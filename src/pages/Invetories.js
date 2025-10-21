import PublicLayout from '../layouts/Public';

const donationLogs = [
  {
    reference: 'DN-2025-1031',
    donor: 'Harborlight Alliance',
    items: '2,500 Food Pack para sa Pamilya',
    receivedAt: 'Oct 21, 2025 • 09:45',
    contactPerson: 'Atty. L. Montero',
    office: 'Logistics Cluster Desk',
    notes: 'Idaraan sa mga prayoridad na baybaying sona ng lalawigan',
  },
  {
    reference: 'DN-2025-1045',
    donor: 'Aurora Relief Collective',
    items: '950 Hygiene Kit',
    receivedAt: 'Oct 21, 2025 • 11:10',
    contactPerson: 'Engr. P. Sandico',
    office: 'Warehouse Control Office',
    notes: 'Kailangang i-repack ang mga sabon bago ipadala',
  },
  {
    reference: 'DN-2025-1056',
    donor: 'Delta Horizons Trust',
    items: '1,200 Kahon ng Bottled Water',
    receivedAt: 'Oct 21, 2025 • 13:25',
    contactPerson: 'Ms. A. Umares',
    office: 'Cold Storage Team',
    notes: 'Ilagay sa climate-controlled na bay 3 ng bodega',
  },
  {
    reference: 'DN-2025-1063',
    donor: 'Frontier Rebuild Guild',
    items: '450 Kit sa Pag-ayos ng Silungan',
    receivedAt: 'Oct 21, 2025 • 14:05',
    contactPerson: 'Mr. J. Ibarra',
    office: 'Shelter Cluster Coordination',
    notes: 'Mag-atas ng mga boluntaryong karpintero para tumulong sa pag-install',
  },
  {
    reference: 'DN-2025-1071',
    donor: 'Skylark Outreach Circle',
    items: '300 Trauma Care Pack',
    receivedAt: 'Oct 21, 2025 • 14:40',
    contactPerson: 'Dr. M. Alonzo',
    office: 'Medical Logistics Office',
    notes: 'Kailangang nakaimbak sa cold pack na 8°C',
  },
  {
    reference: 'DN-2025-1079',
    donor: 'Northwind Cooperative',
    items: '1,000 Sleeping Bag',
    receivedAt: 'Oct 21, 2025 • 15:05',
    contactPerson: 'Ms. G. Ladera',
    office: 'Warehouse Receiving Unit',
    notes: 'Gawing prayoridad ang upland evacuation centers',
  },
  {
    reference: 'DN-2025-1084',
    donor: 'Velocity Sky Relief',
    items: '200 Portable Generator',
    receivedAt: 'Oct 21, 2025 • 15:30',
    contactPerson: 'Capt. L. Madrazo',
    office: 'Power Restoration Cell',
    notes: 'I-full charge ang mga yunit bago ipadala',
  },
  {
    reference: 'DN-2025-1092',
    donor: 'NovaCare Initiative',
    items: '1,500 Tableta sa Paglilinis ng Tubig',
    receivedAt: 'Oct 21, 2025 • 15:55',
    contactPerson: 'Ms. A. Quirao',
    office: 'WASH Cluster Desk',
    notes: 'I-ugnay ang distribusyon sa mga barangay health worker',
  },
  {
    reference: 'DN-2025-1098',
    donor: 'SignalReach Response Team',
    items: '120 Satellite Phone',
    receivedAt: 'Oct 21, 2025 • 16:20',
    contactPerson: 'Engr. N. Pascua',
    office: 'Communications Task Force',
    notes: 'I-activate ang mga SIM card at itala ang nakatalagang operator',
  },
  {
    reference: 'DN-2025-1104',
    donor: 'BrightPath Compassion Fund',
    items: '2,200 Infant Care Kit',
    receivedAt: 'Oct 21, 2025 • 16:45',
    contactPerson: 'Ms. R. Siasat',
    office: 'Maternal & Child Health Unit',
    notes: 'Bigyang-priyoridad ang pamamahagi sa mga evacuation site ng Mandaue',
  },
];

const dispatchLogs = [
  {
    reference: 'DS-2025-2078',
    destination: 'Harborview Sports Dome',
    cargo: '1,200 Food Pack, 300 Sleeping Mat',
    dispatchedAt: 'Oct 21, 2025 • 14:40',
    contactPerson: 'Capt. R. Dimas',
    office: 'Field Logistics Unit',
    notes: 'Ina asahang darating ang convoy sa 16:10, may kasamang escort ng PNP Highway Patrol',
  },
  {
    reference: 'DS-2025-2082',
    destination: 'Montelar Civic Hall',
    cargo: '500 Medical Kit, 10 Generator Set',
    dispatchedAt: 'Oct 21, 2025 • 15:05',
    contactPerson: 'SFO2 L. Bautro',
    office: 'Provincial DRRMO Dispatch',
    notes: 'Magkakaroon ng refuel stop sa Balamban checkpoint',
  },
  {
    reference: 'DS-2025-2089',
    destination: 'Eastbay Evacuation Arena',
    cargo: '650 Hygiene Kit, 200 Kumot',
    dispatchedAt: 'Oct 21, 2025 • 15:45',
    contactPerson: 'Ms. J. Villar',
    office: 'Shelter Operations Center',
    notes: 'Pagdating, tatawag ang drayber sa logistics desk para sa unloading crew',
  },
  {
    reference: 'DS-2025-2094',
    destination: 'Riverset Command Post',
    cargo: '75 Modular Tent, 50 Tarpaulin',
    dispatchedAt: 'Oct 21, 2025 • 16:05',
    contactPerson: 'Lt. M. Roldan',
    office: 'Rapid Deployment Squad',
    notes: 'Itayo ang mga tent malapit sa palibot ng basketball court',
  },
  {
    reference: 'DS-2025-2098',
    destination: 'Northvale Cultural Complex',
    cargo: '900 Sako ng Bigas, 200 Lutuan',
    dispatchedAt: 'Oct 21, 2025 • 16:20',
    contactPerson: 'Ms. H. Gavino',
    office: 'Food Security Cluster',
    notes: 'Humiling ng LGU volunteers para sa tulong sa pagbaba ng kargamento',
  },
  {
    reference: 'DS-2025-2105',
    destination: 'Isla Verde Municipal Gym',
    cargo: '400 Hygiene Kit, 150 Sleeping Mat',
    dispatchedAt: 'Oct 21, 2025 • 16:45',
    contactPerson: 'PO2 J. Lisan',
    office: 'Municipal DRRMO Logistics',
    notes: 'Makipag-ugnayan sa mga kapitan ng barangay sa daloy ng pamamahagi',
  },
  {
    reference: 'DS-2025-2111',
    destination: 'Southwind Evacuation Center',
    cargo: '220 Folding Bed, 180 Kumot',
    dispatchedAt: 'Oct 21, 2025 • 17:05',
    contactPerson: 'Ms. L. Ornea',
    office: 'Shelter Cluster Field Team',
    notes: 'Ina asahang gabi ang dating; tiyakin na may lighting kits sa lugar',
  },
  {
    reference: 'DS-2025-2116',
    destination: 'Highridge Gymnasium Hub',
    cargo: '320 Lalagyan ng Tubig, 100 Solar Lamp',
    dispatchedAt: 'Oct 21, 2025 • 17:25',
    contactPerson: 'Mr. C. Evar',
    office: 'WASH Response Team',
    notes: 'I-charge agad ang mga solar lamp pagdating',
  },
  {
    reference: 'DS-2025-2123',
    destination: 'Suncrest Command Center',
    cargo: '500 Medical Kit, 70 Tangke ng Oksiheno',
    dispatchedAt: 'Oct 21, 2025 • 17:45',
    contactPerson: 'Dr. J. Carreon',
    office: 'Emergency Medical Services',
    notes: 'Humihiling ng security escort dahil mataas ang halaga ng kargamento',
  },
  {
    reference: 'DS-2025-2129',
    destination: 'Merriton Multi-purpose Hall',
    cargo: '650 Food Pack, 120 Baby Care Kit',
    dispatchedAt: 'Oct 21, 2025 • 18:05',
    contactPerson: 'Ms. F. Henera',
    office: 'Humanitarian Coordination Desk',
    notes: 'Itala ang oras ng pagdating para sa 18:45 situation briefing',
  },
];

export default function Inventories() {
  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-5xl flex-col gap-8 pb-10">
        <header className="space-y-4 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-[#E84E6B] to-[#D54060] p-8 text-white shadow-md">
            <h1 className="text-3xl font-semibold">Pangkalahatang-tingin sa Imbentaryo</h1>
            <p className="mt-2 text-sm opacity-90">
              Subaybayan ang mahahalagang suplay ng tulong, mga papasok na donasyon, at mga operasyong nagpapadala palabas.
            </p>
          </div>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Mga Bodega (3)</p>
            <div className="mt-4 max-h-40 space-y-3 overflow-y-auto pr-1 text-sm text-gray-600">
              <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
                <p><span className="font-semibold text-gray-800">Pier 3 Relief Annex:</span> Bayline Logistics Hub HQ</p>
                <p className="mt-1 text-xs text-gray-500">Kayang magproseso ng 1,800 pallets sa pantalan • Kontak: Operations Desk • +63 999 555 8000</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
                <p><span className="font-semibold text-gray-800">Summit Ridge Depot:</span> Pansamantalang imbakan para sa mga barangay sa kabundukan</p>
                <p className="mt-1 text-xs text-gray-500">May dalawang cold storage bay • Kontak: Shift Lead I. Navarro • +63 998 441 2233</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
                <p><span className="font-semibold text-gray-800">Laguna Drive Lot:</span> Cross-dock ng kanlurang koridor</p>
                <p className="mt-1 text-xs text-gray-500">May 12 slot para sa trailer • Kontak: Yard Marshal T. Sarmiento • +63 977 605 1144</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Donation Accounts (2)</p>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">Beripikadong Daluyan ng Donasyon</h2>
            <p className="mt-3 text-sm text-gray-600">
              Idirekta ang cash assistance sa mga opisyal na banko sa ibaba upang pondohan ang pagbili at mabilis na pagde-deploy.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <span className="font-semibold text-gray-800">Metrofirst Bank:</span> DRRM Trust Account • 1234-5678-90
              </li>
              <li>
                <span className="font-semibold text-gray-800">Summit Savings:</span> Calamity Response Fund • 0049-1285-33
              </li>
              <li>
                <span className="font-semibold text-gray-800">PayLynx:</span> `@CebuReliefCenter` (beripikado)
              </li>
            </ul>
          </article>
        </div>

        <section className="space-y-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Pagtanggap ng Donasyon (10)</h2>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
              Huling tala: Okt 21, 2025 • 16:00
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <div className="max-h-72 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-100 text-left text-sm text-gray-700">
                <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <tr>
                    <th scope="col" className="px-4 py-3">Sanggunian</th>
                    <th scope="col" className="px-4 py-3">Nag-donate</th>
                    <th scope="col" className="px-4 py-3">Mga Natanggap</th>
                    <th scope="col" className="px-4 py-3">Oras ng Pagtanggap</th>
                    <th scope="col" className="px-4 py-3">Pangunahing Kontak</th>
                    <th scope="col" className="px-4 py-3">Opisina</th>
                    <th scope="col" className="px-4 py-3">Mga Tala</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {donationLogs.map((entry) => (
                    <tr key={entry.reference} className="hover:bg-gray-50/70">
                      <td className="px-4 py-3 font-semibold text-gray-800">{entry.reference}</td>
                      <td className="px-4 py-3">{entry.donor}</td>
                      <td className="px-4 py-3">{entry.items}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{entry.receivedAt}</td>
                      <td className="px-4 py-3">{entry.contactPerson}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{entry.office}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{entry.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="space-y-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Dispatch Tracking (10)</h2>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
              Susunod na status call: Okt 21, 2025 • 17:30
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <div className="max-h-72 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-100 text-left text-sm text-gray-700">
                <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <tr>
                    <th scope="col" className="px-4 py-3">Sanggunian</th>
                    <th scope="col" className="px-4 py-3">Patutunguhan</th>
                    <th scope="col" className="px-4 py-3">Nilalaman ng Kargo</th>
                    <th scope="col" className="px-4 py-3">Oras ng Pag-alis</th>
                    <th scope="col" className="px-4 py-3">Pangunahing Kontak</th>
                    <th scope="col" className="px-4 py-3">Opisina</th>
                    <th scope="col" className="px-4 py-3">Mga Tala</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {dispatchLogs.map((entry) => (
                    <tr key={entry.reference} className="hover:bg-gray-50/70">
                      <td className="px-4 py-3 font-semibold text-gray-800">{entry.reference}</td>
                      <td className="px-4 py-3">{entry.destination}</td>
                      <td className="px-4 py-3">{entry.cargo}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{entry.dispatchedAt}</td>
                      <td className="px-4 py-3">{entry.contactPerson}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{entry.office}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{entry.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </PublicLayout>
  );
}
