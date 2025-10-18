import PublicLayout from '../layouts/Public';

export default function Volunteers() {
  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Volunteer Network</h1>
          <p className="text-sm text-slate-500">
            Organize assignments, track availability, and keep teams deployment-ready.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Shelter Support
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">Tacloban Sports Complex</h2>
            <p className="mt-3 text-sm text-slate-500">
              24 volunteers on shift. Requesting additional medical staff for evening rotation.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Relief Dispatch
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">Quezon City Depot</h2>
            <p className="mt-3 text-sm text-slate-500">
              18 volunteers staging outbound deliveries. Logistics check-in scheduled at 1500H.
            </p>
          </article>
        </div>
      </section>
    </PublicLayout>
  );
}
