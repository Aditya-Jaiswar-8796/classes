import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src || markerIcon,
  shadowUrl: markerShadow.src || markerShadow,
});

export default function Map() {

  const position = [19.0760, 72.8777]; // Mumbai

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      className="z-40 mt-5"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>Our Coaching Center 📍</Popup>
      </Marker>

    </MapContainer>
  );
}