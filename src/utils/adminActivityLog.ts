// Lightweight client-side log of admin actions (database resets, account/
// permission changes) that don't already have a dedicated log of their own
// (exports are tracked separately in exportHistory.ts). Powers the Settings
// page's "Recent Activity" panel.

export interface AdminActivityEntry {
  id: string;
  action: string;
  details?: string;
  timestamp: string;
}

const STORAGE_KEY = 'survey_admin_activity_v1';
const HISTORY_LIMIT = 100;

export function logAdminActivity(action: string, details?: string) {
  try {
    const existing = getAdminActivity();
    const next: AdminActivityEntry = {
      id: `ACT-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      action,
      details,
      timestamp: new Date().toISOString(),
    };
    const updated = [next, ...existing].slice(0, HISTORY_LIMIT);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('admin-activity-updated'));
  } catch (e) {
    // Best-effort logging only.
  }
}

export function getAdminActivity(): AdminActivityEntry[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}
