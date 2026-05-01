import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(id) {
    setLights((lights) =>
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      }),
    );
  }

  const lightsOn = lights.filter((light) => light.isOn === true);
  // console.log(lights);
  // console.log(lightsOn);

  const lightsOnSum = lightsOn.length;
  //console.log(lightsOnSum);

  // short: const lightsOnSum = lights.filter(light => light.isOn).length;

  return (
    <Layout lightsOnSum={lightsOnSum}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        lightsOnSum={lightsOnSum}
      />
    </Layout>
  );
}
