import { NavLink } from 'react-router-dom';

const navigationItems = [
  { label: 'Calamities', to: '/calamities' },
  //{ label: 'Volunteers', to: '/volunteers' },
  { label: 'Inventory Tracking', to: '/inventories' },
];

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-6 text-center">
          <a
            href="/"
            className="text-lg font-semibold uppercase tracking-[0.45em] text-slate-900 transition hover:text-slate-600"
          >
            Calamity Watch
          </a>
          <nav className="flex items-center gap-10 text-sm font-semibold text-slate-600">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? 'text-slate-900' : 'hover:text-slate-900'
                  }`
                }
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