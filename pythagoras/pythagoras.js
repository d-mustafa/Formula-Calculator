// PYTHAGORAS CALCULATOR
// Event Listener
let pythBtn = document.getElementById("py-calc-btn");
pythBtn.addEventListener("click", pythCalculation);

// Event Function
function pythCalculation() {
  // Input
  let inputA = +document.getElementById("a-sqr-in").value;
  let inputB = +document.getElementById("b-sqr-in").value;

  // Process
  equation = Math.sqrt(inputA ** 2 + inputB ** 2);
  output = equation.toFixed(3);

  // Output
  let finalOutput = document.getElementById("py_output");
  finalOutput.innerHTML = output;
}
