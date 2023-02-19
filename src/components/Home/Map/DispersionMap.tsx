import Icon from "react-icons";
import { GoogleMap, useLoadScript, Marker, InfoBox } from "@react-google-maps/api";
import CustomMarker from "./CustomMarker";
import mapStyles from "./styles";

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
          position={{ lat: 37.7749, lng: -122.4194 }}
          onClick={() => console.log('Marker clicked')}
        >
          <InfoBox>
            <CustomMarker />
          </InfoBox>
        </Marker>
      </GoogleMap>
    </div>
  )
}

export default DispersionMap;
