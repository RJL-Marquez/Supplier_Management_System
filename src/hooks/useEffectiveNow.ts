import { useEffect, useState } from 'react';
import { SimClock, getEffectiveNow } from '../utils/simClock';

// Ticks a Date forward at real wall-clock speed, anchored to the simulated
// clock when one is active (see utils/simClock.ts). Isolated in its own hook
// so only the small display components using it re-render every tick,
// instead of the whole app.
export function useEffectiveNow(simClock: SimClock | null, intervalMs = 1000): Date {
  const [now, setNow] = useState(() => getEffectiveNow(simClock));

  useEffect(() => {
    setNow(getEffectiveNow(simClock));
    const id = setInterval(() => setNow(getEffectiveNow(simClock)), intervalMs);
    return () => clearInterval(id);
  }, [simClock, intervalMs]);

  return now;
}
