import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import Button from "./Button";
import { MapContainer, Marker, Popup, useMapEvents } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPositon } from "../hooks/useUrlPositon";
function Map() {
  const { cities } = useCities();
  const [position, setPosition] = useState([40, 0]);
  const { isLoadingPosition, geolocatePosition, getPosition } =
    useGeolocation();
  const [lat, lng] = useUrlPositon();
  useEffect(
    function () {
      if (lat && lng) setPosition([lat, lng]);
    },
    [lat, lng]
  );
  useEffect(
    function () {
      if (geolocatePosition)
        setPosition([geolocatePosition.lat, geolocatePosition.lng]);
    },
    [geolocatePosition]
  );

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use ur position"}
      </Button>
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={cities.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={position} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;
