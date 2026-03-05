import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {

  const position = [19.0760, 72.8777]; // Mumbai coordinates

  return (
    <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }} className="z-40 mt-5">
      
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          Our Coaching Center 📍
        </Popup>
      </Marker>

    </MapContainer>
  );
}