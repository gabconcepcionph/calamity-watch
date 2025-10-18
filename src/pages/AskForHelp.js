import PublicLayout from '../layouts/Public';

export default function AskForHelp() {
  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-3xl flex-col gap-8 text-center">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900">Request Emergency Assistance</h1>
          <p className="text-sm text-slate-500">
            Submit urgent information so response teams can reach you faster.
          </p>
        </header>

        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Full name
              <input
                type="text"
                name="fullName"
                placeholder="Juan Dela Cruz"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Contact number
              <input
                type="tel"
                name="contactNumber"
                placeholder="0917 000 0000"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </label>
          </div>

          <label className="text-sm font-medium text-slate-700">
            Location / barangay
            <input
              type="text"
              name="location"
              placeholder="Barangay San Roque, Marikina"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Describe the situation
            <textarea
              name="situation"
              rows="4"
              placeholder="Provide details about the emergency, number of people affected, and urgent needs."
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Immediate needs
            <input
              type="text"
              name="needs"
              placeholder="Rescue, medical support, food, water, etc."
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-400"
          >
            Submit request
          </button>
        </form>

        <p className="text-xs text-slate-500">
          For life-threatening emergencies, call your local rescue hotline immediately.
        </p>
      </section>
    </PublicLayout>
  );
}
