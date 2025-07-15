let output = "";

function append(char) {
  if (output === "0" && char !== ".") {
    output = char;
  } else {
    output += char;
  }
  updateDisplay();
}

function clearDisplay() {
  output = "";
  updateDisplay("0");
}

function deleteChar() {
  output = output.slice(0, -1);
  if (output === "") {
    updateDisplay("0");
  } else {
    updateDisplay();
  }
}

function calculate() {
  try {
    let result = eval(output);
    output = result.toString();
    updateDisplay();
  } catch {
    updateDisplay("Error");
    output = "";
  }
}

function updateDisplay(val) {
  document.getElementById("display").innerText = val || output;
}
