console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log("data: ", data);
  console.log("data.results: ", data.results);

  const firstPerson = data.results[0];
  console.log("firstPerson: ", firstPerson);
  console.log("firstPerson.name: ", firstPerson.name);
  console.log("firstPerson.eye_color: ", firstPerson.eye_color);
}

fetchData();

/* Bonus

  const eyeR2D2 = data.results.find((person) => person.name === "R2-D2");
  console.log("R2-D2s eye color: ", eyeR2D2.eye_color);
  
*/
