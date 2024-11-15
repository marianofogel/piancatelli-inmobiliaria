import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const icon = L.icon({ iconUrl: "/img/marker-icon.png" });

function MapComponent({ address }) {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    if (address) {
      const { lat, lng } = address;
      setCenter([lat, lng]);
    }
  }, [address]);

  return center ? (
    <div id="map">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="h-100">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={icon}></Marker>
      </MapContainer>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);
