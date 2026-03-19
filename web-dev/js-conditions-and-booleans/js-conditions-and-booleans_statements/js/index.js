console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! Your are logged in as Brunhilede1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("It's 2 € per hotdog.");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("It's 1.50 € per hotdog.");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("It's 1 € per hotdog.");
} else if (numberOfHotdogs >= 1000000) {
  console.log("It's 0.10 € per hotdog.");
} else {
  console.log("damn");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn ..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting =
  "Hello " + (userName === "Archibald" ? "Coach" : userName) + "!";

console.log(greeting);
