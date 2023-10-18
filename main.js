const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

document.addEventListener("keydown", handleKey);

function handleClick(event) {
  const value = event.target.textContent;
  handleInput(value);
}

function handleKey(event) {
  let key = event.key;
  if (key === "Enter") key = "=";
  if (key === "%") key = "percentage";

  if (/[\d.+\-*/%]/.test(key)) {
    handleInput(key);
  } else if (key === "Escape") {
    display.value = "";
  }
}

function handleInput(value) {
  switch (value) {
    case "C":
      display.value = "";
      break;
    case "=":
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
      break;
    default:
      display.value += value;
  }
}
