-- ============================================================================
-- Seed the initial system administrators.
-- ============================================================================
-- Run this ONCE in the Supabase SQL editor (Dashboard > SQL Editor) after
-- applying schema.sql. It gives the two bootstrap admins an Admin row so that
-- Row Level Security (public.is_admin(), public.my_role(), etc.) recognizes
-- them server-side. Keep this list in sync with BOOTSTRAP_ADMIN_EMAILS in
-- src/App.tsx (the client-side fallback that recognizes them before their row
-- is read).
--
-- Emails MUST be stored lowercase: my_email() lowercases auth.jwt()->>'email'
-- before matching, so a mixed-case row here would never match.
-- ============================================================================

insert into public.accounts (email, role, designation, department)
values
  ('sheanne.cahinhinan@mgenesis.com', 'Admin', 'Executive', 'Business Solutions Manager'),
  ('presshel.escleto@mgenesis.com',   'Admin', 'Executive', 'Business Solutions Manager')
on conflict (email) do update
  set role = excluded.role,
      designation = excluded.designation,
      department = excluded.department;

-- Verify:
--   select email, role from public.accounts where role = 'Admin';
