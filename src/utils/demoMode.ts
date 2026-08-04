// Controls whether demo/simulation scaffolding is shown: the Login page's
// quick-login account panel, the placeholder employee roster seeded into
// Account Management, and the Database Simulator tool in Settings. Defaults
// to enabled (today's behavior) so nothing changes until you explicitly flip
// it off - set VITE_ENABLE_DEMO_MODE=false in .env once real accounts and a
// production data source are in place, ahead of fully deleting this code.
export function isDemoModeEnabled(): boolean {
  return import.meta.env.VITE_ENABLE_DEMO_MODE !== 'false';
}
