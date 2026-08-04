-- ============================================================================
-- Supplier Management System - Supabase schema (DRAFT, not yet applied)
-- ============================================================================
-- Mirrors the localStorage keys currently read/written in
-- src/hooks/useSurveyData.ts and src/App.tsx, so migrating the client is a
-- fairly direct swap: each localStorage.getItem/setItem pair becomes a
-- supabase.from(<table>).select()/.upsert() call.
--
-- Run this in the Supabase SQL Editor (or via `supabase db push` once you
-- have the CLI set up) whenever you're ready - it does not touch your
-- project until you run it. Safe to run on the current empty project.
--
-- NOT covered in this v1 (kept out to keep the first pass reviewable):
--   - survey_analytics_draft_* (in-progress, unsubmitted answers) - fine to
--     leave as localStorage; a draft is inherently per-device/in-progress,
--     not something that needs cross-device sync.
--   - per-user reminder read/deleted state (survey_reminders_read_<email> /
--     survey_reminders_deleted_<email> in employeeNotificationState.ts) -
--     small enough to add as a follow-up table later, not a blocker.
--   - the fine-grained per-department / per-account permission OVERRIDES
--     (departmentPermissions page/surveyType arrays, profile.permissions)
--     are stored here as data, but the RLS policies below only enforce the
--     coarse role/designation/department rule (see survey_responses policy).
--     Replicating the full dynamic override system in SQL is real
--     additional work - flagged as a phase 2, not silently skipped.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- 1. accounts  (mirrors AccountProfile in src/App.tsx + survey_accounts_v1)
-- ----------------------------------------------------------------------------
create table if not exists public.accounts (
  email text primary key,
  role text not null check (role in ('Admin', 'Employee')),
  designation text not null check (designation in ('Rank & File', 'Supervisory', 'Managerial', 'Director', 'Executive')),
  department text not null,
  -- Per-account overrides of the designation/department defaults. Null means
  -- "use the computed default" (see getDefaultPermissions in rbac.ts) -
  -- mirrors profile.permissions being optional in AccountProfile.
  permission_pages text[],
  permission_survey_types text[],
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 2. department_permissions  (survey_department_permissions_v1)
-- ----------------------------------------------------------------------------
create table if not exists public.department_permissions (
  department text primary key,
  pages text[] not null default '{}',
  survey_types text[] not null default '{}'
);

-- ----------------------------------------------------------------------------
-- 3. archive_series  (survey_archive_series_v1)
-- ----------------------------------------------------------------------------
create table if not exists public.archive_series (
  id text primary key,
  label text not null,
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 4. surveys  (CustomForm / survey_analytics_surveys_v6)
-- ----------------------------------------------------------------------------
create table if not exists public.surveys (
  id text primary key,
  title text not null,
  survey_type text not null check (survey_type in ('Courier', 'Supplier', 'Subcontractor')),
  description text not null default '',
  created_at timestamptz not null default now(),
  deadline_date date,
  status text check (status in ('Running', 'Paused', 'Completed', 'Archived')),
  access_departments text[],
  access_roles text[],
  evaluation_company_ids text[],
  max_rating integer,
  -- Question definitions (incl. subQuestions/options/validationRange/section)
  -- are always read and written as one unit per survey - never queried or
  -- joined individually - so JSONB is the pragmatic choice here over fully
  -- normalizing into question/sub-question tables.
  questions jsonb not null default '[]'
);

-- ----------------------------------------------------------------------------
-- 5. survey_responses  (SurveyResponse / survey_analytics_responses_v6)
-- ----------------------------------------------------------------------------
-- One row per answered question per submission, same flat shape the app
-- already uses. Rating is split into rating_value/rating_is_na since SQL
-- needs a real numeric column to average for analytics - Rating = number |
-- 'N/A' on the client reconstructs from these two columns.
-- response_id is shared by every answered question within one submission
-- (one row per question, same response_id) - so it alone isn't unique.
-- question_id is unique only within a submission. Together they identify a
-- row; that's the real primary key here, not response_id on its own.
create table if not exists public.survey_responses (
  response_id text not null,
  survey_type text not null check (survey_type in ('Courier', 'Supplier', 'Subcontractor')),
  respondent_type text not null,
  start_time timestamptz,
  submission_date timestamptz not null,
  company text not null,
  department text,
  address text,
  question_id text not null,
  question_number integer not null,
  question text not null,
  question_category text not null,
  rating_value numeric,
  rating_is_na boolean not null default false,
  comment text,
  respondent_email text,
  archived boolean not null default false,
  archived_at timestamptz,
  archived_by_survey_id text,
  archived_by_survey_title text,
  series_id text references public.archive_series(id),
  created_at timestamptz not null default now(),
  primary key (response_id, question_id)
);

create index if not exists survey_responses_response_id_idx on public.survey_responses (response_id);
create index if not exists survey_responses_respondent_email_idx on public.survey_responses (lower(respondent_email));
create index if not exists survey_responses_department_idx on public.survey_responses (department);
create index if not exists survey_responses_survey_type_idx on public.survey_responses (survey_type);
create index if not exists survey_responses_archived_idx on public.survey_responses (archived);

-- ----------------------------------------------------------------------------
-- 6. partner_companies  (PartnerCompany / survey_analytics_partner_companies_v8)
-- ----------------------------------------------------------------------------
create table if not exists public.partner_companies (
  id text primary key,
  name text not null,
  type text not null check (type in ('Courier', 'Supplier', 'Subcontractor', 'Uncategorized')),
  supplier_origin text check (supplier_origin in ('Local', 'Foreign')),
  email text,
  affiliation text,
  created_at timestamptz not null default now(),
  registered_at timestamptz,
  is_archived boolean not null default false,
  accreditation_status text check (accreditation_status in ('Accredited', 'Unaccredited')),
  evaluation_rank integer,
  -- Branches (almost always exactly one) each carry a nested compliance-
  -- documents map keyed by doc name - variable shape, always read/written
  -- as a unit per company, so JSONB over a fully normalized branch table.
  branches jsonb not null default '[]'
);

create index if not exists partner_companies_type_idx on public.partner_companies (type);
create index if not exists partner_companies_is_archived_idx on public.partner_companies (is_archived);

-- ----------------------------------------------------------------------------
-- 7. document_notification_settings  (documentNotificationSettings.ts)
-- ----------------------------------------------------------------------------
create table if not exists public.document_notification_settings (
  doc_name text primary key,
  label text not null,
  origin text not null check (origin in ('Local', 'Foreign', 'Both')),
  mode text not null check (mode in ('fiscal-year', 'day-milestones')),
  enabled boolean not null default true,
  early_milestone_days integer[] not null default '{}',
  note text
);


-- ============================================================================
-- Auth helper functions
-- ============================================================================
-- These read the calling user's own row in `accounts` (matched by email, the
-- identity key this app already uses everywhere) so RLS policies below don't
-- need to repeat that lookup. SECURITY DEFINER is required here: without it,
-- a policy calling these would recurse into the RLS-protected `accounts`
-- table it's trying to check permissions against.
--
-- IMPORTANT / TO VERIFY: this assumes auth.jwt() ->> 'email' is populated
-- once you wire up supabase.auth.signInWithIdToken({ provider: 'azure', ...})
-- with the MSAL ID token. Confirm the actual claim name once that's wired in
-- (Azure ID tokens usually expose `email`, but double-check against
-- `preferred_username` as a fallback if `email` comes back null for some
-- accounts) before relying on this in production.
-- ============================================================================

create or replace function public.my_email()
returns text
language sql
stable
as $$
  select lower(auth.jwt() ->> 'email')
$$;

create or replace function public.my_role()
returns text
language sql
security definer
set search_path = public
stable
as $$
  select role from public.accounts where lower(email) = public.my_email() limit 1
$$;

create or replace function public.my_designation()
returns text
language sql
security definer
set search_path = public
stable
as $$
  select designation from public.accounts where lower(email) = public.my_email() limit 1
$$;

create or replace function public.my_department()
returns text
language sql
security definer
set search_path = public
stable
as $$
  select department from public.accounts where lower(email) = public.my_email() limit 1
$$;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select coalesce(public.my_role() = 'Admin', false)
$$;


-- ============================================================================
-- Row Level Security
-- ============================================================================

alter table public.accounts enable row level security;
alter table public.department_permissions enable row level security;
alter table public.archive_series enable row level security;
alter table public.surveys enable row level security;
alter table public.survey_responses enable row level security;
alter table public.partner_companies enable row level security;
alter table public.document_notification_settings enable row level security;

-- accounts: everyone can read their own row (needed to resolve their own
-- profile on login); admins can read/write every row (Account Management).
create policy "accounts_select_own_or_admin" on public.accounts
  for select using (lower(email) = public.my_email() or public.is_admin());
create policy "accounts_write_admin_only" on public.accounts
  for all using (public.is_admin()) with check (public.is_admin());

-- department_permissions: readable by everyone (needed client-side to
-- compute effective permissions), writable by admins only.
create policy "dept_perms_select_all" on public.department_permissions
  for select using (auth.role() = 'authenticated');
create policy "dept_perms_write_admin_only" on public.department_permissions
  for all using (public.is_admin()) with check (public.is_admin());

-- archive_series: readable by everyone, writable by admins only.
create policy "archive_series_select_all" on public.archive_series
  for select using (auth.role() = 'authenticated');
create policy "archive_series_write_admin_only" on public.archive_series
  for all using (public.is_admin()) with check (public.is_admin());

-- surveys: admins see everything; everyone else sees a survey only if its
-- own access_departments/access_roles grants allow them (mirrors
-- userAccessibleSurveys in App.tsx). Writes are admin-only.
create policy "surveys_select_scoped" on public.surveys
  for select using (
    public.is_admin()
    or (
      (access_departments is null or array_length(access_departments, 1) is null or public.my_department() = any (access_departments))
      and (access_roles is null or array_length(access_roles, 1) is null or public.my_designation() = any (access_roles))
    )
  );
create policy "surveys_write_admin_only" on public.surveys
  for all using (public.is_admin()) with check (public.is_admin());

-- survey_responses: row-level visibility follows the same rank rule as
-- applyAccessFilter in App.tsx - Admin/Executive/Director see everything,
-- Supervisory sees their department, Rank & File sees only their own
-- submissions. NOTE: this deliberately does NOT special-case the Analytics
-- page the way the client currently does ("Analytics remains company-wide
-- for all users") - RLS operates on rows, not on which page is asking. See
-- get_analytics_summary() below for how company-wide aggregate access is
-- provided instead, without exposing raw respondent-level rows to everyone.
create policy "responses_select_scoped" on public.survey_responses
  for select using (
    public.is_admin()
    or public.my_designation() in ('Executive', 'Director')
    or (public.my_designation() = 'Supervisory' and department = public.my_department())
    or (public.my_designation() = 'Rank & File' and lower(respondent_email) = public.my_email())
  );
-- Any authenticated user can submit a response, but only as themselves.
create policy "responses_insert_self" on public.survey_responses
  for insert with check (lower(respondent_email) = public.my_email() or public.is_admin());
-- Only admins update/delete (archiving, bulk import corrections) - no
-- edit-after-submit exists in the UI for employees today.
create policy "responses_write_admin_only" on public.survey_responses
  for update using (public.is_admin()) with check (public.is_admin());
create policy "responses_delete_admin_only" on public.survey_responses
  for delete using (public.is_admin());

-- partner_companies: read access is broad (used across dashboard, survey
-- filling, feedback hub for every rank); writes are admin-only for now.
-- FOLLOW-UP: the client's `canRenewDocuments` permission (granted
-- independently of full Admin) should probably get its own UPDATE policy
-- scoped to document-related columns once that flow is migrated - not done
-- here to avoid guessing at exact column scoping.
create policy "partner_companies_select_all" on public.partner_companies
  for select using (auth.role() = 'authenticated');
create policy "partner_companies_write_admin_only" on public.partner_companies
  for all using (public.is_admin()) with check (public.is_admin());

-- document_notification_settings: admin-only in both directions - this is
-- an admin config screen, no employee-facing read path today.
create policy "doc_notif_settings_admin_only" on public.document_notification_settings
  for all using (public.is_admin()) with check (public.is_admin());


-- ============================================================================
-- Company-wide analytics (aggregate-only, safe for every rank)
-- ============================================================================
-- SECURITY DEFINER so it reads across ALL rows regardless of the caller's
-- own row-level access (bypassing the responses_select_scoped policy above
-- on purpose) - but only ever returns aggregates, never respondent_email or
-- individual comments, so no row-level identity leaks through it. This is
-- what preserves "Analytics remains company-wide for all users" once raw
-- row access is locked down by rank/department.
--
-- Client-side, the Analytics page should call this via
-- `supabase.rpc('get_analytics_summary')` instead of a plain table select.
create or replace function public.get_analytics_summary()
returns table (
  survey_type text,
  company text,
  department text,
  question_category text,
  question_id text,
  question text,
  rated_count bigint,
  na_count bigint,
  average_rating numeric,
  response_count bigint
)
language sql
security definer
set search_path = public
stable
as $$
  select
    survey_type,
    company,
    department,
    question_category,
    question_id,
    question,
    count(*) filter (where not rating_is_na) as rated_count,
    count(*) filter (where rating_is_na) as na_count,
    avg(rating_value) filter (where not rating_is_na) as average_rating,
    count(distinct response_id) as response_count
  from public.survey_responses
  where archived = false
  group by survey_type, company, department, question_category, question_id, question
$$;

grant execute on function public.get_analytics_summary() to authenticated;


-- ============================================================================
-- TEMPORARY: demo-account testing access - REMOVE before go-live
-- ============================================================================
-- Demo accounts (src/utils/demoMode.ts) log in via a fake local password
-- check, not real Supabase Auth - so there is no auth.jwt() session yet for
-- responses_select_scoped / responses_insert_self above to check, and every
-- request from a demo account would otherwise be blocked (it hits Supabase
-- as the anonymous `anon` role, not `authenticated`).
--
-- Postgres combines multiple permissive policies on the same command with
-- OR, so these two extra policies simply widen access on top of the scoped
-- ones above without replacing them - once real login
-- (MSAL id_token -> supabase.auth.signInWithIdToken) replaces the demo
-- login, delete this whole block and the scoped policies take over as the
-- real access control, with nothing else to change.
create policy "TEMP_responses_select_anon" on public.survey_responses
  for select using (true);
create policy "TEMP_responses_insert_anon" on public.survey_responses
  for insert with check (true);
