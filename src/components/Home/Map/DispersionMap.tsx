import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "./styles";
import { useEffect, useState } from "react";

const DispersionMap = () => {
  const mapsApiUrl = import.meta.env.VITE_API_URL;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapsApiUrl,
  });

  const [usersLocations, setUsersLocations] = useState([]);

  const getUsersLocations = async (url: string) => {
    await fetch(url)
      .then((data) => data.json())
      .then((data) => setUsersLocations(data));
  };

  useEffect(() => {
    getUsersLocations(import.meta.env.VITE_USERS_LOCATION_API);
    console.log(usersLocations)
    
  }, []);


  if (!isLoaded)
    return (
      <img
        src="/logo.svg"
        className="z-10 ml-[2rem] mt-8"
        height={10}
        width={80}
        alt=""
      />
    );

  return (
    <div className="w-full h-fit">
      <GoogleMap
        zoom={10}
        center={{ lat: 50.7127, lng: -73.9872 }}
        mapContainerClassName="map-container"
        options={{ styles: mapStyles }}
      >
        <Marker
          position={{ lat: 36.6163, lng: -100.61 }}
          onClick={() => console.log("Marker clicked")}
          options={{
            icon:
              import.meta.env.VITE_CLOUDINARY_STORAGE_API_URL +
              "public/bulk/marker.png",
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default DispersionMap;
