import { NavLink } from 'react-router-dom';

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
    </div>
  );
}