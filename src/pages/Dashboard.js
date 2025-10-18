import React from 'react';
import AuthLayout from '../layouts/Auth';

const statCards = [
  {
    label: 'Active Calamities',
    value: '6',
    change: '+2 this week',
  },
  {
    label: 'Registered Volunteers',
    value: '1,284',
    change: '+136 new',
  },
  {
    label: 'Relief Requests Pending',
    value: '42',
    change: 'Urgent: 8',
  },
  {
    label: 'Inventory Health',
    value: '87%',
    change: 'Stocked for 5 days',
  },
];

const Home = () => {
  return (
    <AuthLayout>
      <section className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {card.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{card.value}</p>
              <p className="mt-1 text-sm text-slate-500">{card.change}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Calamity Overview</h2>
                  <p className="text-sm text-slate-500">Track active alerts and next actions.</p>
                </div>
                <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900">
                  View all
                </button>
              </div>
              <div className="mt-5 overflow-hidden rounded-xl border border-slate-100">
                <table className="min-w-full divide-y divide-slate-100 text-sm">
                  <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-4 py-3">Incident</th>
                      <th className="px-4 py-3">Region</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Lead</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Typhoon Serene</td>
                      <td className="px-4 py-3">Eastern Visayas</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                          Stabilizing
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">M. Rivera</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Flood Response</td>
                      <td className="px-4 py-3">Cagayan Valley</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-600">
                          Mobilizing
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">J. Navarro</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Wildfire Watch</td>
                      <td className="px-4 py-3">Bicol Region</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-600">
                          Critical
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">L. Santos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Volunteer Activity</h2>
                  <p className="text-sm text-slate-500">Shift assignments for the next 48 hours.</p>
                </div>
                <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900">
                  Manage roster
                </button>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-slate-600">
                <li className="flex items-start justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="font-semibold text-slate-900">Shelter Support</p>
                    <p className="text-xs text-slate-500">Tacloban Sports Complex</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    24 volunteers
                  </span>
                </li>
                <li className="flex items-start justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="font-semibold text-slate-900">Relief Dispatch</p>
                    <p className="text-xs text-slate-500">Quezon City Depot</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    18 volunteers
                  </span>
                </li>
                <li className="flex items-start justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="font-semibold text-slate-900">Medical Triage</p>
                    <p className="text-xs text-slate-500">Sorsogon Provincial Hospital</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                    12 volunteers
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Inventory Snapshot</h2>
              <p className="mt-1 text-sm text-slate-500">Ensure supply coverage for relief hubs.</p>
              <dl className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                  <dt className="text-sm font-medium text-slate-600">Food Packs</dt>
                  <dd className="text-sm font-semibold text-slate-900">8,450 units</dd>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                  <dt className="text-sm font-medium text-slate-600">Medical Kits</dt>
                  <dd className="text-sm font-semibold text-slate-900">1,320 units</dd>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                  <dt className="text-sm font-medium text-slate-600">Emergency Shelters</dt>
                  <dd className="text-sm font-semibold text-slate-900">640 units</dd>
                </div>
              </dl>
              <button className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                Refill supplies
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Announcements</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="rounded-lg bg-slate-50 px-4 py-3">
                  System drills scheduled for November 12, 08:00 PHST.
                </li>
                <li className="rounded-lg bg-slate-50 px-4 py-3">
                  Logistics team to submit inventory audit by Friday EOD.
                </li>
                <li className="rounded-lg bg-slate-50 px-4 py-3">
                  New volunteer onboarding webinar available on-demand.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Home;
