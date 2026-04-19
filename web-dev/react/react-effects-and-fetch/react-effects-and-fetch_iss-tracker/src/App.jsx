import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const { latitude, longitude } = await response.json();
      // const data = await response.json();
      setCoords({ latitude, longitude });
      // setCoords(data);
    } catch (error) {
      console.error(error);
      // console.log(error)
    }
  }
  useEffect(() => {
    getISSCoords();

    const interval = setInterval(() => {
      getISSCoords();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  //useEffect(() => {
  // const intervalId = setInterval(getISSCoords, 5 * 1000);
  // return () => clearInterval(intervalId);
  //  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
