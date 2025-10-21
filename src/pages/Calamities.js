import PublicLayout from '../layouts/Public';

export default function Calamities() {
  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Active Calamities</h1>
          <p className="text-sm text-slate-500">
            Review live incidents, response status, and coordination teams.
          </p>
          <a
            href="/ask-for-help"
            className="inline-flex items-center justify-center rounded-full bg-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-400"
          >
            Ask for help
          </a>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Calamity Overview</h2>
            <p className="mt-3 text-sm text-slate-500">
              Summarize each event with its official name, geographic focus, start date, and current status to orient response leads quickly.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>
                <span className="font-semibold text-slate-700">Name &amp; Location:</span> Identify affected province or municipality clusters.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Start Date:</span> Track first impact or alert issuance.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Status:</span> Mark as ongoing, contained, or monitoring.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Situation Reports</h2>
            <p className="mt-3 text-sm text-slate-500">
              Present periodic updates detailing current conditions, damages, affected population, and priority needs.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>
                <span className="font-semibold text-slate-700">Impact Summary:</span> Highlight casualties, displacement, and infrastructure status.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Needs Assessment:</span> Capture urgent supply and manpower requirements.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Response Actions:</span> Log deployments, coordination calls, and policy updates.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Affected Areas</h2>
            <p className="mt-3 text-sm text-slate-500">
              Map or list impacted barangays and municipalities with severity metrics and population figures.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>
                <span className="font-semibold text-slate-700">Severity Index:</span> Rank flooding, wind damage, or landslide risk per area.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Population Affected:</span> Note households and individuals requiring support.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Resource Needs:</span> Match required relief goods, medical aid, and shelter capacity.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Relief Operations</h2>
            <p className="mt-3 text-sm text-slate-500">
              Track ongoing relief activities, donation flows, volunteer mobilization, and logistics milestones.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>
                <span className="font-semibold text-slate-700">Donations:</span> Record received goods, cash aids, and dispatch schedules.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Volunteers:</span> Monitor deployment counts, skills, and rotation plans.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Logistics &amp; Coordination:</span> Outline transport routes, warehousing, and inter-agency touchpoints.
              </li>
            </ul>
          </section>
        </div>
      </section>
    </PublicLayout>
  );
}
