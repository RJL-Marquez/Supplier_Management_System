import { Clock, History } from 'lucide-react';
import { SimClock } from '../utils/simClock';
import { useEffectiveNow } from '../hooks/useEffectiveNow';

interface SimulatedClockIndicatorProps {
  simClock: SimClock | null;
}

// Sits to the left of the header notification bell, permanently: shows the
// real ticking time when nothing is simulated, or a distinctly-styled
// "Simulated" ticking time when the admin has time-traveled the system via
// the Database Simulator (see utils/simClock.ts).
export function SimulatedClockIndicator({ simClock }: SimulatedClockIndicatorProps) {
  const now = useEffectiveNow(simClock);
  const formatted = now.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });

  if (simClock) {
    return (
      <div
        className="flex items-center gap-1.5 rounded-full bg-amber-400/20 border border-amber-300/40 px-3 py-1.5 text-xs font-bold text-amber-100"
        title="System clock is simulated - manage it from Database Simulator"
      >
        <History size={13} className="text-amber-200" />
        <span className="tabular-nums">{formatted}</span>
        <span className="rounded-full bg-amber-400/80 px-1.5 py-0.5 text-[9px] font-black uppercase text-amber-950">
          Sim
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 text-xs font-medium text-blue-100/80" title="Real system time">
      <Clock size={13} />
      <span className="tabular-nums">{formatted}</span>
    </div>
  );
}
