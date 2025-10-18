import PublicLayout from '../layouts/Public';

export default function Inventories() {
  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Inventory Overview</h1>
          <p className="text-sm text-slate-500">
            Track critical relief supplies, replenishment schedules, and logistics status.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Food Packs
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">8,450 units</h2>
            <p className="mt-3 text-sm text-slate-500">
              Covers five days across active shelters. Resupply convoy scheduled tomorrow morning.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Medical Kits
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">1,320 kits</h2>
            <p className="mt-3 text-sm text-slate-500">
              Emergency stock at 87%. Coordinate with regional hospitals for additional supplies.
            </p>
          </article>
        </div>
      </section>
    </PublicLayout>
  );
}
