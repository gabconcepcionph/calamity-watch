import { useRef } from 'react';
import PublicLayout from '../layouts/Public';

export default function Calamities() {
  const timelineRef = useRef(null);

  const handleScrollTop = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        {/* Header */}
        <header className="space-y-4 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-[#E84E6B] to-[#D54060] p-8 text-white shadow-md">
            <h1 className="text-3xl font-semibold">Active Calamities</h1>
            <p className="text-sm opacity-90 mt-2">
              Review live incidents, response status, and coordination teams.
            </p>
            <a
              href="/ask-for-help"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#E84E6B] shadow-md transition hover:bg-gray-100"
            >
              Ask for help
            </a>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Calamity Overview */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Calamity Overview</h2>
            <p className="mt-3 text-sm text-gray-600">
              Placeholder briefing for the recent Cebu earthquake. Replace with verified Situation Awareness and Damage Assessment (SADA) inputs.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Event Summary:</span> Magnitude 6.1 tectonic quake recorded at 13:58 PST with epicenter west of Cebu City.
              </li>
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Impact Snapshot:</span> Structural cracks and partial power interruptions reported in several areas.
              </li>
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Operational Status:</span> ICS activated at Cebu Capitol; PDRRMO coordinating with OCD Region VII and NGOs.
              </li>
            </ul>
            <img src="https://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/1-him-colored.png" className="mt-4" alt="" />
          </section>

          {/* Situation Reports */}
          <section className="rounded-2xl border border-[#FAD6DB] bg-[#FFF7F8] p-6 shadow-md">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Situation Reports</h2>
              <span className="rounded-full bg-[#FDECEF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
                Emergency Feed
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Live feed placeholder. Substitute entries with confirmed, time-stamped SitRep notes.
            </p>
            <div className="mt-5 space-y-4 rounded-xl border border-[#FAD6DB] bg-white p-4">
              <header className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
                <span>Latest Updates</span>
                <span
                  onClick={handleScrollTop}
                  className="cursor-pointer text-[#E84E6B] transition hover:text-[#D54060]"
                >
                  Back to Top
                </span>
              </header>
              <div ref={timelineRef} className="max-h-56 space-y-3 overflow-y-auto pr-1">
                {[
                  "PDRRMO confirms magnitude 6.1 quake; no tsunami threat.",
                  "EOC reports evacuations in Barangays Capitol Site and Kamputhaw.",
                  "Localized power outages; crews dispatched with safety escorts.",
                ].map((msg, i) => (
                  <article
                    key={i}
                    className="flex gap-3 rounded-lg border border-[#FAD6DB] bg-[#FFF9F9] p-3 shadow-sm"
                  >
                    <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
                      Oct 21, 2025 • {14 + i}:0{i}
                    </time>
                    <p className="text-sm text-gray-700">{msg}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Affected Areas */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Affected Areas</h2>
            <p className="mt-3 text-sm text-gray-600">
              Placeholder for recent Cebu earthquake impact summary.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Cebu City:</span> Intensity VI shaking, 3 mid-rise inspections pending.
              </li>
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Lapu-Lapu City:</span> Liquefaction cracks; 420 individuals relocated.
              </li>
            </ul>
          </section>

          {/* Relief Operations */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Relief Operations</h2>
            <p className="mt-3 text-sm text-gray-600">
              Update entries with confirmed reports from logistics and volunteer desks.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Donations:</span> 1,200 family food packs and 800 hygiene kits ready for dispatch.
              </li>
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Volunteers:</span> 65 responders rostered for night operations.
              </li>
            </ul>
          </section>
        </div>
      </section>

    </PublicLayout>
  );
}
