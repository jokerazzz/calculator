let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));
let operators = ["+", "-", "*", "/"];

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    simulateButtonClick("=");
  } else if (buttons.some((button) => button.innerText === e.key)) {
    simulateButtonClick(e.key);
  }
});

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    simulateButtonClick(e.target.innerText);
  });
});

function simulateButtonClick(key) {
  const currentText = display.innerText;

  if (key === "C") {
    display.innerText = "0";
  } else if (key === "=") {
    display.innerText = eval(display.innerText);
  } else if (operators.includes(key)) {
    if (operators.includes(currentText.charAt(currentText.length - 1))) {
      display.innerText = currentText.slice(0, -1) + key;
    } else {
      display.innerText += key;
    }
  } else {
    if (currentText === "0" || operators.includes(currentText)) {
      display.innerText = key;
    } else {
      display.innerText += key;
    }
  }
}
