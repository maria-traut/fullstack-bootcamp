import { useState } from "react";

export default function useChronicle(initialValue) {
  const [timeline, setTimeline] = useState([initialValue]);
  const currentValue = timeline.at(-1);
  console.log(currentValue);

  function setState(newValue) {
    setTimeline([...timeline, newValue]);
  }

  function resetState() {
    if (timeline.length <= 1) {
      return;
    }

    setTimeline([...timeline.slice(0, -1)]);
  }

  return [currentValue, setState, resetState];
}
