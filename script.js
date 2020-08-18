const password = document.getElementById("password");
const meter = document.querySelector(".strength-meter");
const hints = document.querySelector(".hints");
const messgages = [
  "Length of the password must be > 7",
  "Password must contain Numericals",
  "Password must contain lowercase",
  "Password must contain Uppercase",
  "Password must contain Special Character",
];
let currentStrength;

password.addEventListener("input", init);

function init() {
  clearHints();
  currentStrength = 0;
  let length = checker(/(.)/g);
  let numeric = checker(/([0-9])/g);
  let lowercase = checker(/([a-z])/g);
  let uppercase = checker(/[A-Z]/g);
  let specialCharacters = checker(/[^a-zA-z0-9]/g);
  length >= 7 ? updateUI(20) : handleHints(messgages[0]);
  numeric > 0 ? updateUI(20) : handleHints(messgages[1]);
  lowercase > 0 ? updateUI(20) : handleHints(messgages[2]);
  uppercase > 0 ? updateUI(20) : handleHints(messgages[3]);
  specialCharacters > 0 ? updateUI(20) : handleHints(messgages[4]);
}

function clearHints() {
  var child = hints.lastElementChild;
  while (child) {
    hints.removeChild(child);
    child = hints.lastElementChild;
  }
}

function updateUI(strength) {
  currentStrength += strength;
  meter.style.setProperty("--strength", currentStrength);
}

function handleHints(message) {
  let hint = document.createElement("div");
  hint.innerHTML = message;
  hints.appendChild(hint);
}

function checker(regex) {
  return (password.value.match(regex) || []).length;
}
