import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./styles";
import { useEffect, useMemo, useState } from "react";
import { useFetchAllVisitorsDataQuery } from "../../../services/data-api-slice";

const DispersionMap = () => {
  const mapsApiUrl = import.meta.env.VITE_API_URL;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapsApiUrl,
  });

  const { data: generalData, isLoading, isError, isSuccess } = useFetchAllVisitorsDataQuery()
  const [selectedLocation, setSelectedLocation] = useState<any>("");
  console.log(generalData)

  const mapCenter = useMemo(() => {
    if (!generalData) return { lat: 0, lng: 0 }
    return { lat: JSON.parse(generalData?.data[0].location).latitude, lng: JSON.parse(generalData?.data[0].location).longitude };
  }, [generalData]);

  if (!isLoaded)
    return (
      <img
        src="/logo.svg"
        className={`z-10 ml-[2rem] mt-8 ${!isLoaded && !isError ? "animate-spin" : "animate-ping"}`}
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
        {generalData?.data.slice(0, 100).map((country: any) => {
          const { latitude, longitude } = JSON.parse(country.location)
          return (
            <Marker
              position={{ lat: latitude, lng: longitude }}
              onClick={() => setSelectedLocation(country)}
              options={{
                icon:
                  import.meta.env.VITE_CLOUDINARY_STORAGE_API_URL +
                  "public/bulk/marker.png",
              }}
              key={`${latitude}${longitude}`}
            />
          );
        })}
        {selectedLocation && (
          <InfoWindow
            position={{
              lat: JSON.parse(selectedLocation.location).latitude,
              lng: JSON.parse(selectedLocation.location).longitude,
            }}
            options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
          >
            <div className="w-fit h-fit flex flex-col rounded-3xl p-12 justify-center items-center gap-3 text-white border-gray-300 backdrop-blur-xl text-xl font-bold bg-primary">
              <p className="w-full pl-3 flex justify-start gap-3">
                <span className="whitespace-nowrap">
                  {selectedLocation.countryFlag}
                </span>
                <span>{selectedLocation.Country}</span>
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
