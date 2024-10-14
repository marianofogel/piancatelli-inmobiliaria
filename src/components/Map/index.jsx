import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { setDefaults, fromAddress } from "react-geocode";

setDefaults({
  key: "",
  language: "en",
  region: "es",
});

const containerStyle = {
  width: "100%",
  height: "400px",
};

function GoogleMapComponent({ address }) {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    async function fetchGeocode() {
      const results = await fromAddress(address);
      setCenter(results[0].geometry.location);
    }
    try {
      // fetchGeocode(); TODO conseguir APIKEY
      setCenter({
        lat: -34.602756, 
        lng: -58.375298,
      });
    } catch (error) {}
  }, [address]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  const onLoad = React.useCallback(
    function callback(map) {
      if (center) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.setCenter(bounds);
      }
    },
    [center]
  );

  return isLoaded && center ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapComponent);
