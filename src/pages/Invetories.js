import PublicLayout from '../layouts/Public';

const donationLogs = [
  {
    reference: 'DN-2025-1031',
    donor: 'Harborlight Alliance',
    items: '2,500 Family Food Packs',
    receivedAt: 'Oct 21, 2025 • 09:45',
    contactPerson: 'Atty. L. Montero',
    office: 'Logistics Cluster Desk',
    notes: 'To be routed to priority coastal zones in the province',
  },
  {
    reference: 'DN-2025-1045',
    donor: 'Aurora Relief Collective',
    items: '950 Hygiene Kits',
    receivedAt: 'Oct 21, 2025 • 11:10',
    contactPerson: 'Engr. P. Sandico',
    office: 'Warehouse Control Office',
    notes: 'Requires repacking of soap bars before dispatch',
  },
  {
    reference: 'DN-2025-1056',
    donor: 'Delta Horizons Trust',
    items: '1,200 Bottled Water Cases',
    receivedAt: 'Oct 21, 2025 • 13:25',
    contactPerson: 'Ms. A. Umares',
    office: 'Cold Storage Team',
    notes: 'Store in climate-controlled warehouse bay 3',
  },
  {
    reference: 'DN-2025-1063',
    donor: 'Frontier Rebuild Guild',
    items: '450 Shelter Repair Kits',
    receivedAt: 'Oct 21, 2025 • 14:05',
    contactPerson: 'Mr. J. Ibarra',
    office: 'Shelter Cluster Coordination',
    notes: 'Assign carpentry volunteers for installation support',
  },
  {
    reference: 'DN-2025-1071',
    donor: 'Skylark Outreach Circle',
    items: '300 Trauma Care Packs',
    receivedAt: 'Oct 21, 2025 • 14:40',
    contactPerson: 'Dr. M. Alonzo',
    office: 'Medical Logistics Office',
    notes: 'Requires cold pack storage at 8°C',
  },
  {
    reference: 'DN-2025-1079',
    donor: 'Northwind Cooperative',
    items: '1,000 Sleeping Bags',
    receivedAt: 'Oct 21, 2025 • 15:05',
    contactPerson: 'Ms. G. Ladera',
    office: 'Warehouse Receiving Unit',
    notes: 'Tag priority for upland evacuation centers',
  },
  {
    reference: 'DN-2025-1084',
    donor: 'Velocity Sky Relief',
    items: '200 Portable Generators',
    receivedAt: 'Oct 21, 2025 • 15:30',
    contactPerson: 'Capt. L. Madrazo',
    office: 'Power Restoration Cell',
    notes: 'Charge units to full before dispatch',
  },
  {
    reference: 'DN-2025-1092',
    donor: 'NovaCare Initiative',
    items: '1,500 Water Purification Tablets',
    receivedAt: 'Oct 21, 2025 • 15:55',
    contactPerson: 'Ms. A. Quirao',
    office: 'WASH Cluster Desk',
    notes: 'Coordinate distribution with barangay health workers',
  },
  {
    reference: 'DN-2025-1098',
    donor: 'SignalReach Response Team',
    items: '120 Satellite Phones',
    receivedAt: 'Oct 21, 2025 • 16:20',
    contactPerson: 'Engr. N. Pascua',
    office: 'Communications Task Force',
    notes: 'Activate SIM cards and log assigned operators',
  },
  {
    reference: 'DN-2025-1104',
    donor: 'BrightPath Compassion Fund',
    items: '2,200 Infant Care Kits',
    receivedAt: 'Oct 21, 2025 • 16:45',
    contactPerson: 'Ms. R. Siasat',
    office: 'Maternal & Child Health Unit',
    notes: 'Prioritize distribution to Mandaue evacuation sites',
  },
];

const dispatchLogs = [
  {
    reference: 'DS-2025-2078',
    destination: 'Harborview Sports Dome',
    cargo: '1,200 Food Packs, 300 Sleeping Mats',
    dispatchedAt: 'Oct 21, 2025 • 14:40',
    contactPerson: 'Capt. R. Dimas',
    office: 'Field Logistics Unit',
    notes: 'Convoy ETA 16:10, escorted by PNP Highway Patrol',
  },
  {
    reference: 'DS-2025-2082',
    destination: 'Montelar Civic Hall',
    cargo: '500 Medical Kits, 10 Generator Sets',
    dispatchedAt: 'Oct 21, 2025 • 15:05',
    contactPerson: 'SFO2 L. Bautro',
    office: 'Provincial DRRMO Dispatch',
    notes: 'Fuel refuel stop at Balamban checkpoint',
  },
  {
    reference: 'DS-2025-2089',
    destination: 'Eastbay Evacuation Arena',
    cargo: '650 Hygiene Kits, 200 Blankets',
    dispatchedAt: 'Oct 21, 2025 • 15:45',
    contactPerson: 'Ms. J. Villar',
    office: 'Shelter Operations Center',
    notes: 'Driver to call logistics desk upon arrival for unloading crew',
  },
  {
    reference: 'DS-2025-2094',
    destination: 'Riverset Command Post',
    cargo: '75 Modular Tents, 50 Tarpaulins',
    dispatchedAt: 'Oct 21, 2025 • 16:05',
    contactPerson: 'Lt. M. Roldan',
    office: 'Rapid Deployment Squad',
    notes: 'Set up tents near the basketball court perimeter',
  },
  {
    reference: 'DS-2025-2098',
    destination: 'Northvale Cultural Complex',
    cargo: '900 Rice Sacks, 200 Cooking Stoves',
    dispatchedAt: 'Oct 21, 2025 • 16:20',
    contactPerson: 'Ms. H. Gavino',
    office: 'Food Security Cluster',
    notes: 'Request LGU volunteers for unloading support',
  },
  {
    reference: 'DS-2025-2105',
    destination: 'Isla Verde Municipal Gym',
    cargo: '400 Hygiene Kits, 150 Sleeping Mats',
    dispatchedAt: 'Oct 21, 2025 • 16:45',
    contactPerson: 'PO2 J. Lisan',
    office: 'Municipal DRRMO Logistics',
    notes: 'Coordinate with barangay captains on distribution sequence',
  },
  {
    reference: 'DS-2025-2111',
    destination: 'Southwind Evacuation Center',
    cargo: '220 Folding Beds, 180 Blankets',
    dispatchedAt: 'Oct 21, 2025 • 17:05',
    contactPerson: 'Ms. L. Ornea',
    office: 'Shelter Cluster Field Team',
    notes: 'Nighttime arrival, ensure lighting kits on-site',
  },
  {
    reference: 'DS-2025-2116',
    destination: 'Highridge Gymnasium Hub',
    cargo: '320 Water Containers, 100 Solar Lamps',
    dispatchedAt: 'Oct 21, 2025 • 17:25',
    contactPerson: 'Mr. C. Evar',
    office: 'WASH Response Team',
    notes: 'Solar lamps to be charged immediately upon delivery',
  },
  {
    reference: 'DS-2025-2123',
    destination: 'Suncrest Command Center',
    cargo: '500 Medical Kits, 70 Oxygen Tanks',
    dispatchedAt: 'Oct 21, 2025 • 17:45',
    contactPerson: 'Dr. J. Carreon',
    office: 'Emergency Medical Services',
    notes: 'Security escort requested due to high-value cargo',
  },
  {
    reference: 'DS-2025-2129',
    destination: 'Merriton Multi-purpose Hall',
    cargo: '650 Food Packs, 120 Baby Care Kits',
    dispatchedAt: 'Oct 21, 2025 • 18:05',
    contactPerson: 'Ms. F. Henera',
    office: 'Humanitarian Coordination Desk',
    notes: 'Log arrival time for 18:45 situation briefing',
  },
];

export default function Inventories() {
  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-5xl flex-col gap-8 pb-10">
        <header className="space-y-4 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-[#E84E6B] to-[#D54060] p-8 text-white shadow-md">
            <h1 className="text-3xl font-semibold">Inventory Overview</h1>
            <p className="mt-2 text-sm opacity-90">
              Track critical relief supplies, incoming donations, and outbound dispatch operations.
            </p>
          </div>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Dispatch Warehouse (3)</p>
            <div className="mt-4 max-h-40 space-y-3 overflow-y-auto pr-1 text-sm text-gray-600">
              <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
                <p><span className="font-semibold text-gray-800">Pier 3 Relief Annex:</span> Bayline Logistics Hub HQ</p>
                <p className="mt-1 text-xs text-gray-500">Dockside throughput 1,800 pallets • Contact: Operations Desk • +63 999 555 8000</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
                <p><span className="font-semibold text-gray-800">Summit Ridge Depot:</span> Mountain barangay staging yard</p>
                <p className="mt-1 text-xs text-gray-500">Cold storage bay 2 • Contact: Shift Lead I. Navarro • +63 998 441 2233</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
                <p><span className="font-semibold text-gray-800">Laguna Drive Lot:</span> Western corridor cross-dock</p>
                <p className="mt-1 text-xs text-gray-500">Trailer slots 12 • Contact: Yard Marshal T. Sarmiento • +63 977 605 1144</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Monetary Support Accounts (2)</p>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">Verified Donation Channels</h2>
            <p className="mt-3 text-sm text-gray-600">
              Route cash assistance through the following official bank partners to fund procurement and rapid deployment efforts.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <span className="font-semibold text-gray-800">Metrofirst Bank:</span> DRRM Trust Account • 1234-5678-90
              </li>
              <li>
                <span className="font-semibold text-gray-800">Summit Savings:</span> Calamity Response Fund • 0049-1285-33
              </li>
              <li>
                <span className="font-semibold text-gray-800">PayLynx:</span> `@CebuReliefCenter` (verified)
              </li>
            </ul>
          </article>
        </div>

        <section className="space-y-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Donation Intake Tracking (10)</h2>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
              As of Oct 21, 2025 • 16:00
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <div className="max-h-72 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-100 text-left text-sm text-gray-700">
                <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <tr>
                    <th scope="col" className="px-4 py-3">Reference</th>
                    <th scope="col" className="px-4 py-3">Donor</th>
                    <th scope="col" className="px-4 py-3">Items Received</th>
                    <th scope="col" className="px-4 py-3">Received At</th>
                    <th scope="col" className="px-4 py-3">Contact Person</th>
                    <th scope="col" className="px-4 py-3">Office</th>
                    <th scope="col" className="px-4 py-3">Notes</th>
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
            <h2 className="text-lg font-semibold text-gray-800">Dispatch Logistics Tracking (10)</h2>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#E84E6B]">
              Next status call: Oct 21, 2025 • 17:30
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <div className="max-h-72 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-100 text-left text-sm text-gray-700">
                <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <tr>
                    <th scope="col" className="px-4 py-3">Reference</th>
                    <th scope="col" className="px-4 py-3">Destination</th>
                    <th scope="col" className="px-4 py-3">Cargo Manifest</th>
                    <th scope="col" className="px-4 py-3">Dispatched At</th>
                    <th scope="col" className="px-4 py-3">Contact Person</th>
                    <th scope="col" className="px-4 py-3">Office</th>
                    <th scope="col" className="px-4 py-3">Notes</th>
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
