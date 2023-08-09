function appendToResult(character) {
  document.getElementById("result").value += character;
}


function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  var result = eval(document.getElementById("result").value);
  document.getElementById("result").value = result;
}

function backSpace() {
  var currentInput = document.getElementById("result").value;
  document.getElementById("result").value = currentInput.slice(0, -1);
}