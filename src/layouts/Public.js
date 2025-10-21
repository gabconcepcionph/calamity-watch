import { NavLink } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const navigationItems = [
  { label: 'Calamities', to: '/calamities' },
  { label: 'Help Requests', to: '/help-request', urgent: true },
  { label: 'Inventory Tracking', to: '/inventories' },
];

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-6 text-center">
          <a
            href="/"
            className="text-3xl font-semibold uppercase tracking-[0.45em] text-slate-900 transition hover:text-slate-600"
          >
            Calamity Watch Philippines
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-slate-600">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => {
                  if (item.urgent) {
                    return `inline-flex items-center gap-2 rounded-full border border-rose-200 px-5 py-2 text-xs uppercase tracking-wide transition ${
                      isActive
                        ? 'bg-rose-600 text-white shadow-lg'
                        : 'bg-rose-500 text-white shadow hover:bg-rose-400'
                    }`;
                  }

                  return `transition-colors ${
                    isActive ? 'text-slate-900' : 'hover:text-slate-900'
                  }`;
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="px-6 pt-0 pb-8">
        {children}
      </main>
      <div className="fixed bottom-6 right-6 z-50 max-w-xs rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-white shadow-2xl">
        <p className="text-sm font-semibold">I-download ang Calamity Watch mobile app</p>
        <p className="mt-1 text-xs text-slate-300">
          Manatiling napapanahon sa mga real-time na alerto at mapagkukunan kahit saan ka magpunta.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            <FaApple aria-hidden="true" />
            <span>I-download sa App Store</span>
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            <FaGooglePlay aria-hidden="true" />
            <span>Kunin sa Google Play</span>
          </a>
        </div>
      </div>
    </div>
  );
}