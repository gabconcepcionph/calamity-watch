import { NavLink } from 'react-router-dom';

const navigationItems = [
  { label: 'Calamities', to: '/calamities' },
  { label: 'Volunteers', to: '/volunteers' },
  { label: 'Inventories', to: '/inventories' },
];

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          <div className="px-6 py-5 text-xl font-semibold tracking-tight">Calamity Watch</div>
          <nav className="flex-1 px-4">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center rounded-lg px-3 py-2 text-sm font-medium transition ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-6 pb-6 pt-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">Need updates?</p>
              <p className="mt-1 text-xs text-slate-500">Subscribe stakeholders to real-time alerts.</p>
              <button className="mt-3 w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                Manage Alerts
              </button>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="border-b border-slate-200 bg-white px-6 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-lg font-semibold">Emergency Operations Center</h1>
                <p className="text-sm text-slate-500">Coordinating response across teams and regions.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative hidden md:block">
                  <input
                    type="search"
                    placeholder="Search incidents, teams..."
                    className="w-64 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  />
                </div>
                <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                  Support
                </button>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  CW
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-10">{children}</main>
        </div>
      </div>
    </div>
  );
}