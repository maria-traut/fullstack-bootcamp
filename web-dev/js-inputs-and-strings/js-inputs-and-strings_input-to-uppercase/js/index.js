console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener("click", () => {
  const oldValue = firstInput.value;
  const newValue = oldValue.toUpperCase();
  firstInput.value = newValue;
});
