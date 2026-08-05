import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Eye, EyeOff, LockKeyhole, Mail, Users, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { isMsalConfigured, loginWithMicrosoft } from '../services/msalAuth';
import { isDemoModeEnabled } from '../utils/demoMode';

interface LoginPageProps {
  onLogin: (email: string) => void;
}

export const DEMO_ACCOUNTS = [
  {
    email: 'admin@mgenesis.com',
    password: 'password123',
    role: 'Admin',
    designation: 'Executive',
    department: 'Business Solutions Manager'
  },

  // Procurement
  {
    email: 'maria.fernandez@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Rank & File',
    department: 'Procurement Group'
  },
  {
    email: 'carlos.bautista@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Supervisory',
    department: 'Procurement Group'
  },
  {
    email: 'angela.reyes@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Managerial',
    department: 'Procurement Group'
  },

  // Logistics
  {
    email: 'miguel.santos@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Rank & File',
    department: 'Logistics'
  },
  {
    email: 'denise.aquino@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Supervisory',
    department: 'Logistics'
  },
  {
    email: 'ramon.villanueva@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Managerial',
    department: 'Logistics'
  },

  // Accounts Payable - Trade
  {
    email: 'kristine.manalo@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Rank & File',
    department: 'Accounts Payable - Trade'
  },
  {
    email: 'paolo.cruz@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Supervisory',
    department: 'Accounts Payable - Trade'
  },
  {
    email: 'bianca.torres@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Managerial',
    department: 'Accounts Payable - Trade'
  },

  // Business Solutions Manager (BSM)
  {
    email: 'joshua.ramos@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Rank & File',
    department: 'Business Solutions Manager'
  },
  {
    email: 'katrina.lopez@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Supervisory',
    department: 'Business Solutions Manager'
  },
  {
    email: 'nathaniel.garcia@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Managerial',
    department: 'Business Solutions Manager'
  },
  {
    email: 'estrella.domingo@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Director',
    department: 'Business Solutions Manager'
  },

  // TASS
  {
    email: 'julius.mercado@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Rank & File',
    department: 'TASS'
  },
  {
    email: 'corazon.ilagan@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Supervisory',
    department: 'TASS'
  },
  {
    email: 'vincent.alvarez@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Managerial',
    department: 'TASS'
  },
  {
    email: 'patricia.navarro@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Director',
    department: 'TASS'
  },

  // Executive Office (new department)
  {
    email: 'rafael.concepcion@mgenesis.com',
    password: 'password123',
    role: 'Employee',
    designation: 'Executive',
    department: 'Executive Office'
  }
];

// Ambient dot texture for the hero panel — kept extremely faint (2–5% via the
// text-white/[x] utility on the parent) so it reads as depth, not pattern.
function DotGrid({ id, className }: { id: string; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id={id} width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

// Oversized concentric rings echoing the orbital swoosh in the Microgenesis
// mark — bled off the panel edge and kept near-invisible, so it only adds a
// sense of scale/depth behind the hero content, never a focal point.
function OrbitalRings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="480" cy="120" r="260" stroke="currentColor" strokeWidth="1" />
      <circle cx="480" cy="120" r="195" stroke="currentColor" strokeWidth="1" transform="rotate(-16 480 120)" />
      <ellipse cx="480" cy="120" rx="260" ry="150" stroke="currentColor" strokeWidth="1" transform="rotate(22 480 120)" />
    </svg>
  );
}

// Minimal line-art scene standing in for the product: an analytics dashboard
// (bars + trend), a KPI gauge, and a small supplier network with one
// checkmark node for surveys. No text/numbers — purely pictogram-level, so it
// reads as texture rather than a mock dashboard.
function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 460 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M55 55 L160 60" stroke="#8fb9dd" strokeOpacity="0.25" strokeWidth="1" />
      <path d="M45 145 L160 130" stroke="#8fb9dd" strokeOpacity="0.25" strokeWidth="1" />
      <path d="M405 135 L340 110" stroke="#8fb9dd" strokeOpacity="0.25" strokeWidth="1" />
      <path d="M245 182 L245 150" stroke="#8fb9dd" strokeOpacity="0.25" strokeWidth="1" />

      <rect x="160" y="35" width="180" height="115" rx="12" fill="#ffffff" fillOpacity="0.03" stroke="#8fc0ea" strokeOpacity="0.3" strokeWidth="1.2" />
      <line x1="178" y1="56" x2="226" y2="56" stroke="#8fc0ea" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />

      <rect x="178" y="100" width="13" height="28" rx="2" fill="#6fa8dd" fillOpacity="0.45" />
      <rect x="200" y="86" width="13" height="42" rx="2" fill="#6fa8dd" fillOpacity="0.6" />
      <rect x="222" y="106" width="13" height="22" rx="2" fill="#6fa8dd" fillOpacity="0.35" />
      <rect x="244" y="76" width="13" height="52" rx="2" fill="#8fc0ea" fillOpacity="0.85" />

      <polyline
        points="178,70 200,64 222,68 244,52 262,46"
        fill="none"
        stroke="#bcdcf7"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="262" cy="46" r="2.5" fill="#bcdcf7" fillOpacity="0.9" />

      <circle cx="350" cy="45" r="18" fill="#0a1730" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
      <circle
        cx="350"
        cy="45"
        r="18"
        stroke="#6fa8dd"
        strokeOpacity="0.85"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="79 200"
        transform="rotate(-90 350 45)"
      />

      <circle cx="55" cy="55" r="7" stroke="#6fa8dd" strokeOpacity="0.5" strokeWidth="1.2" />
      <circle cx="55" cy="55" r="3" fill="#6fa8dd" fillOpacity="0.8" />

      <circle cx="45" cy="145" r="7" stroke="#6fa8dd" strokeOpacity="0.5" strokeWidth="1.2" />
      <circle cx="45" cy="145" r="3" fill="#6fa8dd" fillOpacity="0.8" />

      <circle cx="405" cy="135" r="7" stroke="#6fa8dd" strokeOpacity="0.5" strokeWidth="1.2" />
      <circle cx="405" cy="135" r="3" fill="#6fa8dd" fillOpacity="0.8" />

      <circle cx="245" cy="182" r="11" fill="#0a1730" stroke="#8fc0ea" strokeOpacity="0.5" strokeWidth="1.3" />
      <path
        d="M239 182 L243 186 L251 177"
        stroke="#bcdcf7"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const msalReady = isMsalConfigured();
  const demoModeEnabled = isDemoModeEnabled();
  const [isMsSigningIn, setIsMsSigningIn] = useState(false);
  const [msError, setMsError] = useState('');
  const [demoPanelOpen, setDemoPanelOpen] = useState(false);
  const demoWidgetRef = useRef<HTMLDivElement>(null);

  const demoGroups = useMemo(() => {
    const order: string[] = [];
    const map = new Map<string, typeof DEMO_ACCOUNTS>();
    for (const acc of DEMO_ACCOUNTS) {
      if (!map.has(acc.department)) {
        order.push(acc.department);
        map.set(acc.department, []);
      }
      map.get(acc.department)!.push(acc);
    }
    return order.map((department) => ({ department, accounts: map.get(department)! }));
  }, []);

  useEffect(() => {
    if (!demoPanelOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (demoWidgetRef.current && !demoWidgetRef.current.contains(event.target as Node)) {
        setDemoPanelOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [demoPanelOpen]);

  async function handleMicrosoftSignIn() {
    setMsError('');
    setIsMsSigningIn(true);
    try {
      const result = await loginWithMicrosoft();
      const normalized = result.email.trim().toLowerCase();
      if (!normalized.endsWith('@mgenesis.com')) {
        setMsError('Access is restricted to verified @mgenesis.com accounts.');
        return;
      }
      onLogin(normalized);
    } catch (err) {
      setMsError(err instanceof Error ? err.message : 'Microsoft sign-in failed. Please try again.');
    } finally {
      setIsMsSigningIn(false);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both your email and password.');
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Verification of email extension: MUST have @mgenesis.com
    if (!trimmedEmail.endsWith('@mgenesis.com')) {
      setError('Access is restricted to verified @mgenesis.com email addresses.');
      return;
    }

    setIsSubmitting(true);
    // Simulated auth check: accept password123 or 12345678
    window.setTimeout(() => {
      if (password === 'password123' || password === '12345678') {
        onLogin(trimmedEmail);
      } else {
        setError('Incorrect password. For demo accounts or custom emails, please use "password123" or "12345678".');
        setIsSubmitting(false);
      }
    }, 400);
  }

  const handleQuickSelect = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('password123');
    setError('');
    setDemoPanelOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {/* Mobile hero — compact brand band, distinct from the desktop split layout */}
      <div className="relative overflow-hidden bg-[linear-gradient(160deg,#060c18_0%,#0a1f38_45%,#123a5e_100%)] px-6 pb-16 pt-12 text-white md:hidden">
        <DotGrid id="dots-mobile" className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.035]" />
        <OrbitalRings className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] text-white/[0.07]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(94,169,230,0.18),transparent_65%)]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <img src="/microgenesis_logo.png" alt="Microgenesis" className="h-11 object-contain brightness-0 invert" />

          <div className="mt-8 flex max-w-xs items-center gap-3 text-left">
            <img src="/smpesa_icon.png" alt="" className="h-9 w-9 shrink-0 object-contain" />
            <h1 className="min-w-0 text-xl font-medium leading-snug tracking-tight text-white">
              Supplier Management Performance Evaluation Survey Analytics
            </h1>
          </div>
          <p className="mt-4 max-w-xs text-xs font-light leading-relaxed text-[#93aec9]">
            Surveys, scoring, and reporting for every Microgenesis supplier — in one place.
          </p>
        </div>
      </div>

      <div className="md:flex md:min-h-screen">
        {/* Desktop / tablet brand panel — 2/3 width, marketing-style */}
        <div className="relative hidden overflow-hidden bg-[linear-gradient(160deg,#060c18_0%,#0a1f38_45%,#123a5e_100%)] px-10 py-12 text-white md:flex md:flex-1 md:flex-col lg:px-16">
          <DotGrid id="dots-desktop" className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.035]" />
          <OrbitalRings className="pointer-events-none absolute -right-24 -top-32 h-[560px] w-[560px] text-white/[0.07]" />
          <HeroIllustration className="pointer-events-none absolute -right-16 bottom-0 h-auto w-[620px] max-w-none opacity-[0.14]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_85%_0%,rgba(94,169,230,0.16),transparent_60%)]" />

          <div className="relative z-10 mb-12 flex items-center lg:mb-16">
            <img
              src="/microgenesis_logo.png"
              alt="Microgenesis"
              className="h-12 object-contain brightness-0 invert lg:h-14"
            />
          </div>

          <div className="relative z-10 flex flex-1 flex-col justify-center pb-16 lg:pb-20">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-5">
                  <img src="/smpesa_icon.png" alt="" className="h-16 w-16 shrink-0 object-contain lg:h-20 lg:w-20" />
                  <h2 className="min-w-0 text-4xl font-medium leading-snug tracking-tight text-white lg:text-5xl">
                    Supplier Management Performance Evaluation Survey Analytics
                  </h2>
                </div>
              </motion.div>

              <p className="mt-6 text-base font-light leading-relaxed text-[#93aec9] lg:text-lg">
                Centralizing stakeholder surveys, scoring, and reporting for every Microgenesis supplier and
                subcontractor — in one dashboard.
              </p>
            </div>
          </div>

          <div className="relative z-10 text-[10px] font-light uppercase tracking-wider text-[#7590ae]">
            © {new Date().getFullYear()} Microgenesis. All rights reserved.
          </div>
        </div>

        {/* Login form panel — single instance, reflows for mobile / tablet / desktop */}
        <div className="relative z-10 -mt-8 flex flex-col justify-center rounded-t-3xl bg-white px-6 py-10 shadow-[0_-12px_40px_rgba(15,23,42,0.12)] sm:px-10 md:mt-0 md:w-[380px] md:shrink-0 md:rounded-none md:px-10 md:py-12 md:shadow-none lg:w-1/3 lg:min-w-[380px] lg:px-14">
          <div className="mx-auto w-full max-w-sm">
            <img
              src="/microgenesis_logo.png"
              alt="Microgenesis"
              className="mb-8 h-8 object-contain object-left md:mb-10 md:h-9"
            />

            <div className="mb-7">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#0063a9]">SMPESA</p>
              <h1 className="mt-1.5 text-2xl font-medium text-slate-900">Welcome back</h1>
              <p className="mt-1.5 text-sm font-light text-slate-500">
                Sign in to access your supplier performance dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="field-label">Email address</span>
                <div className="mt-1 flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white pl-3 pr-3 transition focus-within:border-azure focus-within:ring-2 focus-within:ring-blue-100">
                  <Mail size={16} className="shrink-0 text-[#0063a9]" />
                  <span className="h-5 w-px shrink-0 bg-slate-200" />
                  <input
                    type="email"
                    autoComplete="username"
                    className="w-full bg-transparent py-2 text-sm text-ink outline-none placeholder:text-slate-400"
                    placeholder="name@mgenesis.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </label>

              <label className="block">
                <span className="field-label">Password</span>
                <div className="mt-1 flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white pl-3 pr-3 transition focus-within:border-azure focus-within:ring-2 focus-within:ring-blue-100">
                  <LockKeyhole size={16} className="shrink-0 text-[#0063a9]" />
                  <span className="h-5 w-px shrink-0 bg-slate-200" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    className="w-full bg-transparent py-2 text-sm text-ink outline-none placeholder:text-slate-400"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="shrink-0 cursor-pointer text-slate-400 hover:text-slate-600"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="flex cursor-pointer select-none items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-[#0063a9] focus:ring-[#0063a9]"
                  />
                  Remember me
                </label>
                <button type="button" className="cursor-pointer font-medium text-[#0063a9] hover:underline">
                  Forgot password?
                </button>
              </div>

              {error && (
                <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer rounded-lg bg-[#0063a9] py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#00528c] disabled:opacity-70"
              >
                {isSubmitting ? 'Signing in…' : 'Sign in'}
              </button>
            </form>

            {msalReady && (
              <>
                <div className="my-4 flex items-center gap-3 text-xs text-slate-400">
                  <span className="h-px flex-1 bg-slate-200" />
                  <span>or</span>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>

                {msError && (
                  <p className="mb-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose">
                    {msError}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleMicrosoftSignIn}
                  disabled={isMsSigningIn}
                  className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-70"
                >
                  <svg width="18" height="18" viewBox="0 0 21 21" aria-hidden="true">
                    <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                    <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                    <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                    <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                  </svg>
                  {isMsSigningIn ? 'Signing in…' : 'Sign in with Microsoft'}
                </button>
              </>
            )}

            <p className="mt-8 text-center text-[11px] leading-relaxed text-slate-400">
              Access restricted to verified <span className="font-semibold text-slate-500">@mgenesis.com</span>{' '}
              accounts.
              <br />© {new Date().getFullYear()} Microgenesis. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating demo accounts widget — remove once SSO is fully rolled out */}
      {demoModeEnabled && (
        <div ref={demoWidgetRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
          <AnimatePresence>
            {demoPanelOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="flex max-h-[65vh] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-[380px]"
              >
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[#0063a9]" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">Demo Simulation Accounts</p>
                      <p className="text-[11px] text-slate-500">Tap an account to autofill credentials</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDemoPanelOpen(false)}
                    className="cursor-pointer rounded-md p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-600"
                    title="Close"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="space-y-4 overflow-y-auto px-3 py-3">
                  {demoGroups.map((group) => (
                    <div key={group.department}>
                      <p className="px-1 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {group.department}
                      </p>
                      <div className="space-y-1.5">
                        {group.accounts.map((acc) => (
                          <button
                            key={acc.email}
                            type="button"
                            onClick={() => handleQuickSelect(acc.email)}
                            className="flex w-full cursor-pointer flex-col gap-1 rounded-lg border border-slate-200 bg-white p-2.5 text-left transition hover:border-blue-300 hover:bg-blue-50/60"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="truncate text-xs font-bold text-[#0063a9]">{acc.email}</span>
                              <span
                                className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${
                                  acc.role === 'Admin'
                                    ? 'border border-emerald-200 bg-emerald-50 text-emerald-600'
                                    : 'border border-blue-200 bg-blue-50 text-blue-600'
                                }`}
                              >
                                {acc.role}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400">{acc.designation}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-[11px] text-slate-500">
                  All demo accounts use password <strong className="text-slate-700">password123</strong>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setDemoPanelOpen((value) => !value)}
            className="flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[#0063a9] to-[#0090d9] py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
            </span>
            <Users size={16} />
            Demo Accounts
          </button>
        </div>
      )}
    </div>
  );
}
