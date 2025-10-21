import PublicLayout from '../layouts/Public';

const helpRequests = [
  {
    id: 'HR-2025-2401',
    requester: 'Elio Vargas',
    contact: '0912 555 0101',
    location: 'Barangay Harborview, New Cordis',
    submittedAt: 'Oct 21, 2025 • 14:32',
    priority: 'High',
    status: 'Awaiting Rescue',
    coordinates: { lat: 10.3121, lng: 123.9056 },
    situation:
      'Rapid flash flooding trapped residents on the second floor of a riverside duplex. Waterline rising 10 cm every 15 minutes.',
    needs: ['Rescue boat', 'Medical triage', 'Infant supplies'],
  },
  {
    id: 'HR-2025-2402',
    requester: 'Ren Amador',
    contact: '0921 770 4420',
    location: 'Sitio Lumen, East Marava',
    submittedAt: 'Oct 21, 2025 • 14:48',
    priority: 'Critical',
    status: 'Responder En Route',
    coordinates: { lat: 10.3245, lng: 123.8944 },
    situation:
      'Six families sheltering on rooftop after landslide debris blocked stairways. Torrential rain ongoing.',
    needs: ['Rope rescue team', 'Thermal blankets', 'Rapid damage assessment'],
  },
  {
    id: 'HR-2025-2403',
    requester: 'Nia Calder',
    contact: '0908 613 7725',
    location: 'Apex Heights Tower B, Floor 11',
    submittedAt: 'Oct 21, 2025 • 15:05',
    priority: 'High',
    status: 'Coordinating Volunteers',
    coordinates: { lat: 10.3023, lng: 123.9188 },
    situation:
      'Elevator outage after aftershock; elderly residents immobile with limited medication. Ventilation adequate but power unstable.',
    needs: ['Medical volunteers', 'Portable oxygen', 'Stair stretcher'],
  },
  {
    id: 'HR-2025-2404',
    requester: 'Jiro Lacsina',
    contact: '0917 880 1333',
    location: 'Barangay Southpoint Covered Court',
    submittedAt: 'Oct 21, 2025 • 15:11',
    priority: 'Medium',
    status: 'Needs Verification',
    coordinates: { lat: 10.2951, lng: 123.9032 },
    situation:
      'Evacuees report dwindling drinking water and no charging stations for communication devices.',
    needs: ['Water refills', 'Charging kiosks', 'Child-safe sleeping mats'],
  },
  {
    id: 'HR-2025-2405',
    requester: 'Tala Inverna',
    contact: '0916 400 2255',
    location: 'Isla Verde Wharf, Bay 6',
    submittedAt: 'Oct 21, 2025 • 15:19',
    priority: 'Critical',
    status: 'Awaiting Dispatch',
    coordinates: { lat: 10.2879, lng: 123.9301 },
    situation:
      'Storm surge left 18 fisherfolk stranded with hypothermia risks; visibility low due to heavy rains.',
    needs: ['Rescue RIB', 'Thermal gear', 'Hot meals'],
  },
  {
    id: 'HR-2025-2406',
    requester: 'Miro Santero',
    contact: '0928 333 5411',
    location: 'Northvale Elementary Gym Shelter',
    submittedAt: 'Oct 21, 2025 • 15:27',
    priority: 'High',
    status: 'Supply Convoy Queued',
    coordinates: { lat: 10.2756, lng: 123.9112 },
    situation:
      'Shelter population doubled within an hour. Current stocks can only serve 8 hours of meals.',
    needs: ['Ready-to-eat meals', 'Bottled water', 'Volunteer cooks'],
  },
  {
    id: 'HR-2025-2407',
    requester: 'Ionah Devale',
    contact: '0915 211 0470',
    location: 'Cascade Ridge Barangay Hall',
    submittedAt: 'Oct 21, 2025 • 15:36',
    priority: 'Medium',
    status: 'Monitoring Situation',
    coordinates: { lat: 10.2688, lng: 123.8877 },
    situation:
      'Mini-grid outage affecting refrigerated medicines for chronic patients; generators at 40% fuel.',
    needs: ['Fuel resupply', 'Pharmacist consult', 'Cold-chain containers'],
  },
  {
    id: 'HR-2025-2408',
    requester: 'Sena Farrow',
    contact: '0939 888 9212',
    location: 'Twinlights Subdivision, Block 9',
    submittedAt: 'Oct 21, 2025 • 15:44',
    priority: 'Critical',
    status: 'Responder En Route',
    coordinates: { lat: 10.2547, lng: 123.8994 },
    situation:
      'Gas leak detected after quake; neighborhood evacuated curbside without respiratory protection.',
    needs: ['Fire suppression unit', 'Gas detectors', 'Respirator masks'],
  },
  {
    id: 'HR-2025-2409',
    requester: 'Kael Orvigo',
    contact: '0913 722 1800',
    location: 'Lumina Tech Park Dormitory',
    submittedAt: 'Oct 21, 2025 • 15:51',
    priority: 'Low',
    status: 'Queued for Assessment',
    coordinates: { lat: 10.2442, lng: 123.9159 },
    situation:
      'Displaced employees require transportation passes to reach designated shelter.',
    needs: ['Transport coordination', 'Identification kits', 'Psychosocial support'],
  },
  {
    id: 'HR-2025-2410',
    requester: 'Myra Quell',
    contact: '0920 144 6622',
    location: 'Skybridge Residences, Tower C Roofdeck',
    submittedAt: 'Oct 21, 2025 • 15:58',
    priority: 'High',
    status: 'Awaiting Airlift',
    coordinates: { lat: 10.2386, lng: 123.9274 },
    situation:
      'Four patients awaiting medevac after makeshift clinic exhausted supplies; rooftop helipad partially obstructed.',
    needs: ['Helicopter extraction', 'Advanced trauma kit', 'Structural clearing team'],
  },
];

const priorityColors = {
  Critical: 'bg-rose-600 text-white',
  High: 'bg-amber-500 text-white',
  Medium: 'bg-blue-500 text-white',
  Low: 'bg-slate-400 text-white',
};

const statusStyles = {
  'Responder En Route': 'text-emerald-600',
  'Awaiting Rescue': 'text-rose-600',
  'Awaiting Dispatch': 'text-amber-600',
  'Awaiting Airlift': 'text-rose-600',
  'Supply Convoy Queued': 'text-amber-600',
  'Monitoring Situation': 'text-blue-600',
  'Needs Verification': 'text-slate-500',
  'Queued for Assessment': 'text-slate-500',
  'Coordinating Volunteers': 'text-indigo-600',
};

export default function HelpRequest() {
  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-5xl flex-col gap-8 pb-10">
        <header className="space-y-4 rounded-b-3xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-400 px-6 py-10 text-white shadow-lg">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              Immediate Attention Required
            </span>
            <h1 className="text-3xl font-semibold">Help Request Queue</h1>
            <p className="text-sm opacity-90">
              Review and prioritize urgent calls for assistance. Responders can filter by priority to allocate teams effectively.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase">
            <span className="rounded-full bg-white/20 px-4 py-2">10 Active Requests</span>
            <span className="rounded-full bg-white/20 px-4 py-2">Updated Oct 21, 2025 • 16:05</span>
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
                  <p className="text-xs text-slate-400">Submitted {request.submittedAt}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                      priorityColors[request.priority]
                    }`}
                  >
                    {request.priority} Priority
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
                    <span className="font-semibold text-slate-800">Needs Reported:</span>
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
                    <p className="font-semibold text-slate-700">Immediate Contact</p>
                    <p>{request.contact}</p>
                    <a
                      href={`https://www.google.com/maps?q=${request.coordinates.lat},${request.coordinates.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-rose-500 underline decoration-dotted underline-offset-4 hover:text-rose-600"
                    >
                      View Map ({request.coordinates.lat.toFixed(4)}, {request.coordinates.lng.toFixed(4)})
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
