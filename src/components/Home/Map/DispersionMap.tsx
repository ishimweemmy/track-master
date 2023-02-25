import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./styles";
import { useEffect, useMemo, useState } from "react";

const DispersionMap = () => {
  const mapsApiUrl = import.meta.env.VITE_API_URL;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapsApiUrl,
  });

  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    const data = await fetch(
      "https://restcountries.com/v3.1/all?fields=latlng,name,flag"
    ).then((data) => data.json());
    setCountries(data);
  };

  useEffect(() => {
    getAllCountries();
    console.log(countries);
  }, []);

  const [selectedLocation, setSelectedLocation] = useState<any>("");

  const mapCenter = useMemo(() => {
    return { lat: 65, lng: -18 };
  }, []);

  if (!isLoaded)
    return (
      <img
        src="/logo.svg"
        className="z-10 ml-[2rem] mt-8 animate-spin"
        height={10}
        width={80}
        alt=""
      />
    );

  return (
    <div className="w-full h-fit grid place-items-center">
      <GoogleMap
        zoom={10}
        center={mapCenter}
        mapContainerClassName="map-container"
        options={{ styles: mapStyles }}
      >
        {countries.slice(0, 100).map((country) => {
          const { latlng } = country;
          return (
            <Marker
              position={{ lat: latlng[0], lng: latlng[1] }}
              onClick={() => setSelectedLocation(country)}
              options={{
                icon:
                  import.meta.env.VITE_CLOUDINARY_STORAGE_API_URL +
                  "public/bulk/marker.png",
              }}
              key={`${latlng[0]}${latlng[1]}`}
            />
          );
        })}
        {selectedLocation && (
          <InfoWindow
            position={{
              lat: selectedLocation.latlng[0],
              lng: selectedLocation.latlng[1],
            }}
            options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
          >
            <div className="w-fit h-fit flex flex-col rounded-3xl p-12 justify-center items-center gap-3 text-white border-gray-300 backdrop-blur-xl text-xl font-bold bg-primary">
              <p className="w-full pl-3 flex justify-start gap-3">
                <span className="whitespace-nowrap">
                  {selectedLocation.flag}
                </span>
                <span>{selectedLocation.name.official}</span>
              </p>
              <div className="w-full pl-3 flex justify-start gap-3">
                <img src="/bulk/people.svg" alt="" />
                <p>
                  200 <span className="font-normal">Users</span>
                </p>
              </div>
              <div className="w-full pl-3 flex justify-start gap-3">
                <img src="/bulk/mouse-circle.svg" alt="" />
                <p>
                  340 <span className="font-normal">clicks</span>
                </p>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default DispersionMap;
