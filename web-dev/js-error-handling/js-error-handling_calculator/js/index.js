console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

try {
  output.innerText = operations[operation](firstNumber, secondNumber);
  document.querySelector(".error").innerText = "";
} catch (error) {
  console.log(error);
  console.error(error);
  output.innerText = "❌";
  document.querySelector(".error").innerText = error.message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
});
