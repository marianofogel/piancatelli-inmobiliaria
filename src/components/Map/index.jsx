import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "/img/marker-icon.png",
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

function MapComponent({ address, selectedTab }) {
  const [center, setCenter] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (address) {
      const { lat, lng } = address;
      setCenter([lat, lng]);
    }
  }, [address]);

  useEffect(() => {
    if (ref.current) {
      ref.current.invalidateSize(false);
    }
  }, [selectedTab]);

  return center ? (
    <div id="map">
      <MapContainer
        style={{ borderRadius: "10px" }}
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className="h-100"
        ref={ref}
      >
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
