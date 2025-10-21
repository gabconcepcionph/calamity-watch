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
            <h1 className="text-3xl font-semibold">Aktibong Kalamidad</h1>
            <p className="text-sm opacity-90 mt-2">
              Suriin ang kasalukuyang insidente, katayuan ng pagtugon, at mga koponan sa koordinasyon.
            </p>
            <a
              href="/ask-for-help"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#E84E6B] shadow-md transition hover:bg-gray-100"
            >
              Humingi ng Tulong
            </a>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Calamity Overview */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Pangkalahatang Pagsusuri</h2>
            <p className="mt-3 text-sm text-gray-600">
              Pansamantalang ulat para sa nagdaang lindol sa Cebu. Palitan ng beripikadong impormasyon mula sa Situation Awareness and Damage Assessment (SADA).
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Buod ng Pangyayari:</span> Magnitude 6.1 na tectonic na lindol na naitala noong 13:58 PST na may sentro sa kanluran ng Cebu City.
              </li>
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Sintomas ng Pinsala:</span> Naiulat ang mga bitak sa estruktura at bahagyang pagkawala ng kuryente sa ilang lugar.
              </li>
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Kalagayan ng Operasyon:</span> Aktibo ang ICS sa Cebu Capitol; nakikipag-ugnayan ang PDRRMO sa OCD Region VII at mga NGO.
              </li>
            </ul>
            <img src="https://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/1-him-colored.png" className="mt-4" alt="" />
          </section>

          {/* Situation Reports */}
          <section className="rounded-2xl border border-[#FAD6DB] bg-[#FFF7F8] p-6 shadow-md">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Mga Ulat sa Sitwasyon</h2>
              <span className="rounded-full bg-[#FDECEF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
                Agarang Feed
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Pansamantalang live feed. Palitan ang mga entry ng kumpirmadong SitRep na may oras at petsa.
            </p>
            <div className="mt-5 space-y-4 rounded-xl border border-[#FAD6DB] bg-white p-4">
              <header className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
                <span>Pinakahuling Update</span>
                <span
                  onClick={handleScrollTop}
                  className="cursor-pointer text-[#E84E6B] transition hover:text-[#D54060]"
                >
                  Bumalik sa Itaas
                </span>
              </header>
              <div ref={timelineRef} className="max-h-56 space-y-3 overflow-y-auto pr-1">
                {[
                  "Kumpirmado ng PDRRMO ang magnitude 6.1 na lindol; walang banta ng tsunami.",
                  "Naiulat ng EOC ang mga paglikas sa mga Barangay Capitol Site at Kamputhaw.",
                  "May mga lokal na pagkawala ng kuryente; mga kruweng naka-deploy na may mga safety escort.",
                ].map((msg, i) => (
                  <article
                    key={i}
                    className="flex gap-3 rounded-lg border border-[#FAD6DB] bg-[#FFF9F9] p-3 shadow-sm"
                  >
                    <time className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
                      Okt 21, 2025 • {14 + i}:0{i}
                    </time>
                    <p className="text-sm text-gray-700">{msg}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Affected Areas */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Mga Apektadong Lugar</h2>
            <p className="mt-3 text-sm text-gray-600">
              Pansamantalang talaan para sa buod ng pinsala ng nagdaang lindol sa Cebu.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Cebu City:</span> Intensity VI na pagyanig; 3 mid-rise buildings ang nakapila para sa inspeksyon.
              </li>
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Lapu-Lapu City:</span> May mga bitak dulot ng liquefaction; 420 katao ang nailipat sa pansamantalang tirahan.
              </li>
            </ul>
          </section>

          {/* Relief Operations */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Mga Operasyon ng Tulong</h2>
            <p className="mt-3 text-sm text-gray-600">
              Palitan ang mga entry ng kumpirmadong ulat mula sa logistics at volunteer desks.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Mga Donasyon:</span> 1,200 family food packs at 800 hygiene kits na handa nang ipadala.
              </li>
              <li className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <span className="font-semibold text-gray-800">Mga Boluntaryo:</span> 65 responders ang nakatalaga para sa night operations.
              </li>
            </ul>
          </section>
        </div>
      </section>

    </PublicLayout>
  );
}
