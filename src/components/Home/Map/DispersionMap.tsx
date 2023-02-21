import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "./styles";
import { useEffect, useState } from "react";

const DispersionMap = () => {
  const mapsApiUrl = import.meta.env.VITE_API_URL;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapsApiUrl,
  });

  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    const data = await fetch(
      "https://restcountries.com/v3.1/all?fields=latlng,name"
    ).then((data) => data.json());
    setCountries(data);
  };

  useEffect(() => {
    getAllCountries();
    console.log(countries);
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
        center={{ lat: 65, lng: -18 }}
        mapContainerClassName="map-container"
        options={{ styles: mapStyles }}
      >
        {countries.slice(0, 200).map((country) => {
          const { latlng } = country;
          return (
            <Marker
              position={{ lat: latlng[0], lng: latlng[1] }}
              onClick={() => console.log("Marker clicked")}
              options={{
                icon:
                  import.meta.env.VITE_CLOUDINARY_STORAGE_API_URL +
                  "public/bulk/marker.png",
              }}
              key={latlng[0] + latlng[1]}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default DispersionMap;
