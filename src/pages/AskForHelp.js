import { useEffect, useMemo, useState } from 'react';
import { Circle, MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PublicLayout from '../layouts/Public';
import askForHelpMock from '../store/mocks/ask-for-help.json';
import { Icon } from 'leaflet';
import Modal from '../components/Modal';
import useHotlinesStore from '../store/useHotlinesStore';

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
      className={`rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm ${
        inModal ? '' : ''
      }`}
    >
      <h2 className="text-base font-semibold text-slate-900">Current location (100 m radius)</h2>
      <p className="mt-1 text-xs text-slate-500">
        Confirm the detected area or adjust the details below if the location is inaccurate.
      </p>
      <div className="mt-4 h-64 w-full overflow-hidden rounded-xl">
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
          <Circle center={markerPosition} radius={100} pathOptions={{ color: '#f43f5e', fillOpacity: 0.2 }} />
        </MapContainer>
      </div>
      <button
        type="button"
        onClick={handleCenterOnLocation}
        className="mt-4 inline-flex items-center justify-center rounded-full border border-rose-200 px-5 py-2 text-xs font-semibold text-rose-500 transition hover:border-rose-300 hover:text-rose-600 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!geolocation}
      >
        Center on my location
      </button>
      <p className="mt-3 text-xs font-medium text-rose-500">{geoError}</p>
    </div>
  );

  const handleCloseHotlines = () => {
    setIsHotlinesOpen(false);
    setHotlineQuery('');
  };

  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-3xl flex-col gap-8 text-center">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900">Request Emergency Assistance</h1>
          <p className="text-sm text-slate-500">
            Submit urgent information so response teams can reach you faster.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsHotlinesOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-rose-200 px-5 py-2 text-xs font-semibold text-rose-500 transition hover:border-rose-300 hover:text-rose-600"
            >
              View emergency hotlines
            </button>
          </div>
        </header>

        {!isHotlinesOpen ? renderLocationSection() : null}

        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Full name
              <input
                type="text"
                name="fullName"
                placeholder={askForHelpMock.fullName}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Contact number
              <input
                type="tel"
                name="contactNumber"
                placeholder={askForHelpMock.contactNumber}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </label>
          </div>

          <label className="text-sm font-medium text-slate-700">
            Location / barangay
            <input
              type="text"
              name="location"
              placeholder={askForHelpMock.location}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Describe the situation
            <textarea
              name="situation"
              rows="4"
              placeholder={askForHelpMock.situation}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Immediate needs
            <input
              type="text"
              name="needs"
              placeholder={askForHelpMock.needs}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <div className="space-y-2 text-left">
            <p className="text-sm font-medium text-slate-700">Additional photos <span className="text-xs font-normal text-slate-400">(optional)</span></p>
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500 transition hover:border-slate-400 hover:bg-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-slate-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5v-9m-4.5 4.5h9M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
              </svg>
              <span className="text-sm font-semibold text-slate-600">Upload photos</span>
              <span className="text-xs text-slate-400">PNG, JPG up to 10MB</span>
              <input type="file" name="photos" accept="image/png, image/jpeg" multiple className="hidden" />
            </label>
          </div>

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

      <Modal
        isOpen={isHotlinesOpen}
        onClose={handleCloseHotlines}
        title="Emergency Hotlines"
      >
        <div className="space-y-4 h-[calc(100vh-20rem)] overflow-y-auto text-sm">
          <div className="sticky top-0 bg-white pb-4">
            <label className="block text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
              Search hotlines
              <input
                type="search"
                value={hotlineQuery}
                onChange={(event) => setHotlineQuery(event.target.value)}
                placeholder="Search by agency or contact number"
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </label>
          </div>

          {filteredHotlines.length ? (
            filteredHotlines.map(({ agency, contacts }) => (
              <div key={agency} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left">
                <p className="text-sm font-semibold text-slate-800">{agency}</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-500">
                  {contacts.map((contact) => (
                    <li key={contact}>{contact}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="rounded-xl border border-dashed border-rose-200 bg-rose-50/60 p-4 text-left text-xs font-medium text-rose-500">
              No hotlines match your search. Try different keywords.
            </p>
          )}
        </div>
      </Modal>
    </PublicLayout>
  );
}
