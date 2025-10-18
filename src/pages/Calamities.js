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

        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Typhoon Serene
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">Eastern Visayas</h2>
            <p className="mt-3 text-sm text-slate-500">
              Landfall expected within 12 hours. Ensure evacuation centers remain stocked and transportation routes open.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Flood Response
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">Cagayan Valley</h2>
            <p className="mt-3 text-sm text-slate-500">
              Rapid assessment teams deployed. Road clearing scheduled and relief convoys en route.
            </p>
          </article>
        </div>
      </section>
    </PublicLayout>
  );
}
