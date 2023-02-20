import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "./styles";
import CustomMarker from "https://storage.cloud.google.com/track-master/public/bulk/marker.png";

const DispersionMap = () => {
  const mapsApiUrl = import.meta.env.VITE_API_URL

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapsApiUrl
  })

  if (!isLoaded) return <img
    src="logo.svg"
    className="z-10 ml-[2rem] mt-8"
    height={10}
    width={80}
    alt=""
  />

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
          onClick={() => console.log('Marker clicked')}
          options={{icon: CustomMarker}}
        />
      </GoogleMap>
    </div>
  )
}

export default DispersionMap;
