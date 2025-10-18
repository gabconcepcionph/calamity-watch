import PublicLayout from '../layouts/Public';

export default function Home() {
  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Coordinate disaster response with clarity.
          </h1>
          <p className="text-base text-slate-500 sm:text-lg">
            Calamity Watch helps teams monitor calamities, mobilize volunteers, and manage relief inventories in one modern workspace.
          </p>
          <a
            href="/ask-for-help"
            className="inline-flex items-center justify-center rounded-full bg-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-400"
          >
            Ask for help
          </a>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Calamities</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">See active incidents</p>
            <p className="mt-2 text-sm text-slate-500">Review severity, response status, and regional leads in real time.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Volunteers</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">Mobilize support</p>
            <p className="mt-2 text-sm text-slate-500">Assign shifts, track availability, and confirm on-site deployments.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Inventories</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">Maintain supplies</p>
            <p className="mt-2 text-sm text-slate-500">Monitor stock levels and schedule replenishments ahead of demand.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/login"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Sign in to dashboard
          </a>
          <a
            href="/dashboard"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Preview workspace
          </a>
        </div>
      </section>
    </PublicLayout>
  );
}