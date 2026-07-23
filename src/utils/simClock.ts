// A shared, overridable "current time" for the whole app. Every business-logic
// spot that needs "today" (contract/document expiry, survey eligibility,
// simulated response dating) should read through getEffectiveNow/
// getEffectiveTodayStr instead of calling `new Date()` directly, so the admin
// Database Simulator can "time travel" the entire app at once.
//
// Time keeps flowing forward from the picked anchor at normal speed once
// activated (like changing your system clock), rather than freezing on a
// single instant - see getEffectiveNow.

const STORAGE_KEY = 'survey_sim_clock_v1';

export interface SimClock {
  anchorIso: string;
  activatedAtMs: number;
}

export function loadSimClock(): SimClock | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    const parsed = JSON.parse(data);
    if (!parsed || typeof parsed.anchorIso !== 'string' || typeof parsed.activatedAtMs !== 'number') return null;
    return parsed;
  } catch (e) {
    return null;
  }
}

export function saveSimClock(clock: SimClock | null): void {
  try {
    if (clock) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clock));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {
    // Ignore - simulated clock is a testing convenience, not critical data.
  }
}

export function getEffectiveNow(clock: SimClock | null): Date {
  if (!clock) return new Date();
  const anchorMs = new Date(clock.anchorIso).getTime();
  if (Number.isNaN(anchorMs)) return new Date();
  return new Date(anchorMs + (Date.now() - clock.activatedAtMs));
}

export function getEffectiveTodayStr(clock: SimClock | null): string {
  return getEffectiveNow(clock).toISOString().slice(0, 10);
}
