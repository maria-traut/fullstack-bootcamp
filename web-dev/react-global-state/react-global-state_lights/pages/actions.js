import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lights,
  handleTurnLightsOff,
  handleTurnLightsOn,
  lightsOnSum,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        onTurnLightsOff={handleTurnLightsOff}
        onTurnLightsOn={handleTurnLightsOn}
        lightsOnSum={lightsOnSum}
      />
    </>
  );
}
