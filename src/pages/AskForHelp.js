import { useEffect, useMemo, useState } from 'react';
import { Circle, MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PublicLayout from '../layouts/Public';
import askForHelpMock from '../store/mocks/ask-for-help.json';
import { Icon } from 'leaflet';
import Modal from '../components/Modal';
import useHotlinesStore from '../store/useHotlinesStore';
import { FiPhoneCall, FiPlusCircle } from 'react-icons/fi';

const DEFAULT_CENTER = [14.5995, 120.9842]; // Manila fallback

const markerIcon = new Icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function RecenterMap({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center);
  }, [center, map]);

  return null;
}

export default function AskForHelp() {
  const [geolocation, setGeolocation] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(DEFAULT_CENTER);
  const [userHasMovedMarker, setUserHasMovedMarker] = useState(false);
  const [geoError, setGeoError] = useState(null);
  const [isHotlinesOpen, setIsHotlinesOpen] = useState(false);
  const [hotlineQuery, setHotlineQuery] = useState('');
  const { hotlines } = useHotlinesStore();

  const filteredHotlines = useMemo(() => {
    const query = hotlineQuery.trim().toLowerCase();
    if (!query) {
      return hotlines;
    }

    return hotlines.filter(({ agency, contacts }) => {
      if (agency.toLowerCase().includes(query)) {
        return true;
      }

      return contacts.some((contact) => contact.toLowerCase().includes(query));
    });
  }, [hotlineQuery, hotlines]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by this browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (coords) => {
        const { latitude, longitude } = coords.coords;
        const currentPosition = [latitude, longitude];
        setGeolocation(currentPosition);
        if (!userHasMovedMarker) {
          setMarkerPosition(currentPosition);
        }
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setGeoError('Location permission denied. Enter your location manually.');
        } else {
          setGeoError('Unable to determine current location.');
        }
      }
    );
  }, []);

  const mapCenter = markerPosition ?? DEFAULT_CENTER;

  const handleMarkerDragEnd = (event) => {
    const { lat, lng } = event.target.getLatLng();
    setMarkerPosition([lat, lng]);
    setUserHasMovedMarker(true);
  };

  const handleCenterOnLocation = () => {
    if (!geolocation) {
      return;
    }
    setMarkerPosition(geolocation);
    setUserHasMovedMarker(false);
  };

  const renderLocationSection = (inModal = false) => (
    <div
      className={`rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-md ${
        inModal ? '' : ''
      }`}
    >
      <h2 className="text-base font-semibold text-gray-900">
        Current location (100 m radius)
      </h2>
      <p className="mt-1 text-xs text-gray-500">
        Confirm the detected area or adjust the details below if the location is inaccurate.
      </p>

      <div className="mt-4 h-64 w-full overflow-hidden rounded-2xl border border-gray-100">
        <MapContainer
          center={mapCenter}
          zoom={16}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <RecenterMap center={mapCenter} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={markerPosition}
            draggable
            eventHandlers={{ dragend: handleMarkerDragEnd }}
            icon={markerIcon}
          />
          <Circle
            center={markerPosition}
            radius={100}
            pathOptions={{ color: '#E94D65', fillOpacity: 0.2 }}
          />
        </MapContainer>
      </div>

      <button
        type="button"
        onClick={handleCenterOnLocation}
        className="mt-5 inline-flex items-center justify-center rounded-full border border-[#F4A1AC] bg-gradient-to-r from-[#E94D65] to-[#D83750] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!geolocation}
      >
        Center on my location
      </button>

      {geoError && (
        <p className="mt-3 text-xs font-medium text-[#E94D65]">{geoError}</p>
      )}
    </div>

  );

  const handleCloseHotlines = () => {
    setIsHotlinesOpen(false);
    setHotlineQuery('');
  };

  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-3xl flex-col gap-8 text-center bg-[#F9F9FB] pb-10">
        <header className="space-y-4 rounded-b-3xl bg-gradient-to-r from-[#E94D65] to-[#D83750] px-6 py-10 text-white shadow">
          <h1 className="text-2xl font-semibold">Request Emergency Assistance</h1>
          <p className="text-sm opacity-90">
            Submit urgent information so response teams can reach you faster.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsHotlinesOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-xs font-semibold text-[#E94D65] shadow-sm transition hover:bg-rose-50"
            >
              View emergency hotlines
            </button>
          </div>
        </header>

        {!isHotlinesOpen ? renderLocationSection() : null}

        <form className="space-y-5 rounded-2xl border border-gray-100 bg-white p-8 text-left shadow-md">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-gray-700">
              Full name
              <input
                type="text"
                name="fullName"
                placeholder={askForHelpMock.fullName}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#E94D65] focus:ring-2 focus:ring-[#F4A1AC]"
              />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Contact number
              <input
                type="tel"
                name="contactNumber"
                placeholder={askForHelpMock.contactNumber}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#E94D65] focus:ring-2 focus:ring-[#F4A1AC]"
              />
            </label>
          </div>

          <label className="text-sm font-medium text-gray-700">
            Location / barangay
            <input
              type="text"
              name="location"
              placeholder={askForHelpMock.location}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#E94D65] focus:ring-2 focus:ring-[#F4A1AC]"
            />
          </label>

          <label className="text-sm font-medium text-gray-700">
            Describe the situation
            <textarea
              name="situation"
              rows="4"
              placeholder={askForHelpMock.situation}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#E94D65] focus:ring-2 focus:ring-[#F4A1AC]"
            />
          </label>

          <label className="text-sm font-medium text-gray-700">
            Immediate needs
            <input
              type="text"
              name="needs"
              placeholder={askForHelpMock.needs}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-[#E94D65] focus:ring-2 focus:ring-[#F4A1AC]"
            />
          </label>

          <div className="space-y-2 text-left">
            <p className="text-sm font-medium text-gray-700">
              Additional photos <span className="text-xs font-normal text-gray-400">(optional)</span>
            </p>
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center text-sm text-gray-500 transition hover:border-[#E94D65]/50 hover:bg-rose-50">
              <FiPlusCircle className="h-8 w-8 text-gray-400" />
              <span className="text-sm font-semibold text-gray-600">Upload photos</span>
              <span className="text-xs text-gray-400">PNG, JPG up to 10MB</span>
              <input type="file" name="photos" accept="image/png, image/jpeg" multiple className="hidden" />
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[#E94D65] to-[#D83750] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            Submit request
          </button>
        </form>

        <p className="text-xs text-gray-500">
          For life-threatening emergencies, call your local rescue hotline immediately.
        </p>
      </section>


      <Modal
        isOpen={isHotlinesOpen}
        onClose={handleCloseHotlines}
        title="Emergency Hotlines"
      >
        <div className="space-y-4 h-[calc(100vh-20rem)] overflow-y-auto text-sm bg-[#F9F9FB] px-1">
  {/* Search Header */}
  <div className="sticky top-0 bg-[#F9F9FB] pb-4 pt-2">
    <label className="block text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
      Search hotlines
      <input
        type="search"
        value={hotlineQuery}
        onChange={(event) => setHotlineQuery(event.target.value)}
        placeholder="Search by agency or contact number"
        className="mt-2 w-full rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm focus:border-[#E94D65] focus:ring-2 focus:ring-[#F4A1AC] focus:outline-none transition"
      />
    </label>
  </div>

  {/* Hotline List */}
  {filteredHotlines.length ? (
    filteredHotlines.map(({ agency, contacts }) => (
      <div
          key={agency}
          className="rounded-2xl border border-gray-100 bg-white p-4 text-left shadow-sm hover:shadow transition"
        >
          <p className="text-sm font-semibold text-gray-800">{agency}</p>
          <ul className="mt-2 space-y-1 text-xs text-gray-500">
            {contacts.map((contact) => (
              <li key={contact} className="flex items-center gap-2">
                <FiPhoneCall className="h-3.5 w-3.5 text-[#E94D65]" />
                {contact}
              </li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p className="rounded-2xl border border-dashed border-[#F4A1AC] bg-rose-50/80 p-4 text-left text-xs font-medium text-[#E94D65]">
        No hotlines match your search. Try different keywords.
      </p>
    )}
  </div>

      </Modal>
    </PublicLayout>
  );
}
