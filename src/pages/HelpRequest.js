import PublicLayout from '../layouts/Public';

const helpRequests = [
  {
    id: 'HR-2025-2401',
    requester: 'Elio Vargas',
    contact: '0912 555 0101',
    location: 'Barangay Harborview, New Cordis',
    submittedAt: 'Oct 21, 2025 • 14:32',
    priority: 'High',
    status: 'Naghihintay ng Pagsagip',
    coordinates: { lat: 10.3121, lng: 123.9056 },
    situation:
      'Mabilis na pagtaas ng baha ang nakasilo sa mga residente sa ikalawang palapag ng duplex malapit sa ilog. Tumataas ang tubig ng 10 cm bawat 15 minuto.',
    needs: ['Bangkang pangligtas', 'Medical triage', 'Suplay para sa sanggol'],
  },
  {
    id: 'HR-2025-2402',
    requester: 'Ren Amador',
    contact: '0921 770 4420',
    location: 'Sitio Lumen, East Marava',
    submittedAt: 'Oct 21, 2025 • 14:48',
    priority: 'Critical',
    status: 'Papunta na ang Responder',
    coordinates: { lat: 10.3245, lng: 123.8944 },
    situation:
      'Anim na pamilya ang nasa bubong matapos barahan ng taunang lupa ang hagdanan. Patuloy ang malakas na ulan.',
    needs: ['Koponang may lubid', 'Thermal blanket', 'Mabilis na pagtatasa ng pinsala'],
  },
  {
    id: 'HR-2025-2403',
    requester: 'Nia Calder',
    contact: '0908 613 7725',
    location: 'Apex Heights Tower B, Ikalabing-isang Palapag',
    submittedAt: 'Oct 21, 2025 • 15:05',
    priority: 'High',
    status: 'Nagkokoordina ng mga Boluntaryo',
    coordinates: { lat: 10.3023, lng: 123.9188 },
    situation:
      'Nabagabag ang elevator pagkatapos ng aftershock; hindi makagalaw ang matatandang residente at limitado ang gamot. Ayos ang bentilasyon ngunit hindi matatag ang kuryente.',
    needs: ['Medical volunteer', 'Portable oxygen', 'Stair stretcher'],
  },
  {
    id: 'HR-2025-2404',
    requester: 'Jiro Lacsina',
    contact: '0917 880 1333',
    location: 'Barangay Southpoint Covered Court',
    submittedAt: 'Oct 21, 2025 • 15:11',
    priority: 'Medium',
    status: 'Kailangang Beripikahin',
    coordinates: { lat: 10.2951, lng: 123.9032 },
    situation:
      'Iniulat ng mga evacuee na nauubos ang inuming tubig at walang charging station para sa mga komunikasyon.',
    needs: ['Pag-refill ng tubig', 'Charging kiosk', 'Child-safe sleeping mat'],
  },
  {
    id: 'HR-2025-2405',
    requester: 'Tala Inverna',
    contact: '0916 400 2255',
    location: 'Isla Verde Wharf, Bay 6',
    submittedAt: 'Oct 21, 2025 • 15:19',
    priority: 'Critical',
    status: 'Naghihintay ng Dispatsya',
    coordinates: { lat: 10.2879, lng: 123.9301 },
    situation:
      'Nagpatong ang storm surge, naiwan ang 18 mangingisda na may panganib sa hypothermia; mababa ang visibility dahil sa malakas na ulan.',
    needs: ['Rescue RIB', 'Thermal gear', 'Mainit na pagkain'],
  },
  {
    id: 'HR-2025-2406',
    requester: 'Miro Santero',
    contact: '0928 333 5411',
    location: 'Northvale Elementary Gym Shelter',
    submittedAt: 'Oct 21, 2025 • 15:27',
    priority: 'High',
    status: 'Nakapila ang Supply Convoy',
    coordinates: { lat: 10.2756, lng: 123.9112 },
    situation:
      'Nadoble ang dami ng taong nasa shelter sa loob ng isang oras. Tatagal lamang sa loob ng 8 oras ang kasalukuyang mga suplay.',
    needs: ['Ready-to-eat meal', 'Bottled water', 'Volunteer cook'],
  },
  {
    id: 'HR-2025-2407',
    requester: 'Ionah Devale',
    contact: '0915 211 0470',
    location: 'Cascade Ridge Barangay Hall',
    submittedAt: 'Oct 21, 2025 • 15:36',
    priority: 'Medium',
    status: 'Minomonitor ang Sitwasyon',
    coordinates: { lat: 10.2688, lng: 123.8877 },
    situation:
      'May brownout sa mini-grid na nakakaapekto sa mga gamot na naka-refrigerate para sa mga pasyenteng may chronic na kondisyon; 40% na lang ang gasolina ng generator.',
    needs: ['Pag-angkat ng gasolina', 'Konsultasyon sa parmasyutiko', 'Cold-chain container'],
  },
  {
    id: 'HR-2025-2408',
    requester: 'Sena Farrow',
    contact: '0939 888 9212',
    location: 'Twinlights Subdivision, Block 9',
    submittedAt: 'Oct 21, 2025 • 15:44',
    priority: 'Critical',
    status: 'Papunta na ang Responder',
    coordinates: { lat: 10.2547, lng: 123.8994 },
    situation:
      'May natukoy na pagtagas ng gas pagkatapos ng lindol; nasa bangketa ang mga residente nang walang respiratory protection.',
    needs: ['Yunit panapat ng apoy', 'Gas detector', 'Respirator mask'],
  },
  {
    id: 'HR-2025-2409',
    requester: 'Kael Orvigo',
    contact: '0913 722 1800',
    location: 'Lumina Tech Park Dormitory',
    submittedAt: 'Oct 21, 2025 • 15:51',
    priority: 'Low',
    status: 'Nakapila para sa Pagsusuri',
    coordinates: { lat: 10.2442, lng: 123.9159 },
    situation:
      'Kailangan ng mga nawalan ng tirahan na empleyado ng transport pass para makarating sa itinalagang shelter.',
    needs: ['Koordinasyon sa transportasyon', 'Identification kit', 'Psychosocial support'],
  },
  {
    id: 'HR-2025-2410',
    requester: 'Myra Quell',
    contact: '0920 144 6622',
    location: 'Skybridge Residences, Tower C Roofdeck',
    submittedAt: 'Oct 21, 2025 • 15:58',
    priority: 'High',
    status: 'Naghihintay ng Airlift',
    coordinates: { lat: 10.2386, lng: 123.9274 },
    situation:
      'Apat na pasyente ang naghihintay ng medevac matapos maubos ang suplay ng pansamantalang klinika; bahagyang nakaharang ang helipad sa bubong.',
    needs: ['Helicopter extraction', 'Advanced trauma kit', 'Koponang maglilinis ng estruktura'],
  },
];

const priorityColors = {
  Critical: 'bg-rose-600 text-white',
  High: 'bg-amber-500 text-white',
  Medium: 'bg-blue-500 text-white',
  Low: 'bg-slate-400 text-white',
};

const statusStyles = {
  'Papunta na ang Responder': 'text-emerald-600',
  'Naghihintay ng Pagsagip': 'text-rose-600',
  'Naghihintay ng Dispatsya': 'text-amber-600',
  'Naghihintay ng Airlift': 'text-rose-600',
  'Nakapila ang Supply Convoy': 'text-amber-600',
  'Minomonitor ang Sitwasyon': 'text-blue-600',
  'Kailangang Beripikahin': 'text-slate-500',
  'Nakapila para sa Pagsusuri': 'text-slate-500',
  'Nagkokoordina ng mga Boluntaryo': 'text-indigo-600',
};

export default function HelpRequest() {
  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-5xl flex-col gap-8 pb-10">
        <header className="space-y-4 rounded-b-3xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-400 px-6 py-10 text-white shadow-lg">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              Kinakailangang Agarang Tugon
            </span>
            <h1 className="text-3xl font-semibold">Pila ng Kahilingan ng Tulong</h1>
            <p className="text-sm opacity-90">
              Suriin at unahin ang mga agarang kahilingan ng tulong. Maaaring salain ng mga responder ayon sa prayoridad upang maayos na maitalaga ang mga koponan.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase">
            <span className="rounded-full bg-white/20 px-4 py-2">10 Aktibong Kahilingan</span>
            <span className="rounded-full bg-white/20 px-4 py-2">Na-update Okt 21, 2025 • 16:05</span>
          </div>
        </header>

        <div className="space-y-4">
          {helpRequests.map((request) => (
            <article
              key={request.id}
              className="rounded-2xl border border-rose-100 bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">{request.id}</p>
                  <h2 className="text-lg font-semibold text-slate-900">{request.requester}</h2>
                  <p className="text-sm text-slate-500">{request.location}</p>
                  <p className="text-xs text-slate-400">Isinumite noong {request.submittedAt}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                      priorityColors[request.priority]
                    }`}
                  >
                    Prayoridad: {request.priority}
                  </span>
                  <span className={`text-sm font-semibold ${statusStyles[request.status] || 'text-slate-600'}`}>
                    {request.status}
                  </span>
                </div>
              </header>

              <section className="mt-4 space-y-3 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-slate-800">Situation Overview:</span>
                  <p className="mt-1 leading-relaxed">{request.situation}</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-semibold text-slate-800">Iniulat na Pangangailangan:</span>
                    <ul className="mt-2 flex flex-wrap gap-2 text-xs uppercase tracking-wide">
                      {request.needs.map((need) => (
                        <li
                          key={need}
                          className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-600"
                        >
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-xs text-slate-500">
                    <p className="font-semibold text-slate-700">Agarang Kontak</p>
                    <p>{request.contact}</p>
                    <a
                      href={`https://www.google.com/maps?q=${request.coordinates.lat},${request.coordinates.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-rose-500 underline decoration-dotted underline-offset-4 hover:text-rose-600"
                    >
                      Tingnan sa Mapa ({request.coordinates.lat.toFixed(4)}, {request.coordinates.lng.toFixed(4)})
                    </a>
                  </div>
                </div>
              </section>
            </article>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
