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
              Public awareness bulletin placeholder. Replace the sample lines below with verified information from official sources before publishing.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>
                <span className="font-semibold text-slate-700">Current Situation:</span> Briefly describe the calamity and immediately affected communities.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Safety Advisory:</span> Outline evacuation notices, emergency hotlines, and precautionary steps.
              </li>
              <li>
                <span className="font-semibold text-slate-700">Government &amp; NGO Updates:</span> Share confirmed response actions and where to access assistance.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-rose-200 bg-white p-6 shadow-lg shadow-rose-100">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">Situation Reports</h2>
              <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700">
                Emergency Feed
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Live emergency timeline styled after Reddit Live. Replace each placeholder with verified, time-stamped updates from response teams.
            </p>
            <div className="mt-5 space-y-4 rounded-xl border border-rose-100 bg-rose-50/80 p-4">
              <header className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-rose-600">
                <span>Latest Updates</span>
                <span>Philippine Standard Time</span>
              </header>
              <div className="max-h-56 space-y-3 overflow-y-auto pr-1">
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 14:05
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Situation room confirms storm surge advisories for coastal barangays. Awaiting further reports.
                  </p>
                </article>
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 14:12
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Field monitors note rising river levels near National Highway KM45. Road remains passable with caution.
                  </p>
                </article>
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 14:18
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Power cooperative reports intermittent outages in Barangay San Isidro. Repair crews on standby.
                  </p>
                </article>
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 14:26
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Evacuation center at Central Elementary now shelters 85 families. Additional bedding requested.
                  </p>
                </article>
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 14:34
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Local weather bureau issues yellow rainfall advisory for the metro area; community sirens activated.
                  </p>
                </article>
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 14:41
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Volunteer medical team dispatched to Barangay Sta. Lucia for first-aid support and triage setup.
                  </p>
                </article>
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 14:47
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Reports of minor landslide debris on Mountain View Road. Clearing equipment en route.
                  </p>
                </article>
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 14:53
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Hotline 161 receiving increased calls for relief packs. Logistics cluster coordinating dispatch.
                  </p>
                </article>
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 14:58
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Rapid assessment team shares preliminary damage mapping for Sitio Riverside. Verification pending.
                  </p>
                </article>
                <article className="flex gap-3 rounded-lg border border-rose-100 bg-white/85 p-3 shadow-sm">
                  <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Oct 21, 2025 • 15:04
                  </time>
                  <p className="text-sm text-slate-600">
                    Placeholder: Provincial EOC schedules next briefing for 15:30. Media partners advised to standby for updates.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Affected Areas</h2>
            <p className="mt-3 text-sm text-slate-500">
              Placeholder for recent Cebu earthquake impact summary. Swap these sample entries with verified assessments from LGUs and response clusters.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                <span className="font-semibold text-slate-700">Cebu City:</span> Intensity VI shaking felt across downtown barangays; 3 mid-rise buildings flagged for structural inspection; temporary shelter capacity at 65%.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                <span className="font-semibold text-slate-700">Lapu-Lapu City:</span> Coastal barangays report liquefaction cracks; 420 individuals relocated to Hoops Dome; requesting potable water bladders.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                <span className="font-semibold text-slate-700">Mandaue City:</span> Bridge approaches undergoing safety checks; traffic rerouted via Plaridel Street; engineering teams conduct aftershock-ready inspections.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                <span className="font-semibold text-slate-700">Toledo City:</span> Mining communities experienced landslide alerts; 110 households monitored for relocation; priority needs include generators and heavy equipment.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Relief Operations</h2>
            <p className="mt-3 text-sm text-slate-500">
              Placeholder for Cebu earthquake relief posture. Update these entries with confirmed reports from logistics, donations, and volunteer desks.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                <span className="font-semibold text-slate-700">Donations:</span> Warehouse in Mandaue logged 1,200 family food packs and 800 hygiene kits ready for dispatch; awaiting transport clearance.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                <span className="font-semibold text-slate-700">Volunteers:</span> 65 responders from Cebu Chamber Volunteers rostered for night operations; safety briefing scheduled 18:00 at Plaza Independencia.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                <span className="font-semibold text-slate-700">Logistics &amp; Coordination:</span> DOTr and DPWH coordinating reroute for relief convoys via SRP; fuel resupply point established in Talisay City.
              </li>
            </ul>
          </section>
        </div>
      </section>
    </PublicLayout>
  );
}
