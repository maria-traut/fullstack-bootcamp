import { useState } from "react";

export default function useName() {
  const fullName = `${firstName} ${lastName}`;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return [fullName, setFirstName, setLastName];
}
