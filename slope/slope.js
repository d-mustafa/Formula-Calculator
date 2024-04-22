// SLOPE CALCULATOR
// Event Listener
let slopeBtn = document.getElementById("slope-calc-btn");
slopeBtn.addEventListener("click", slopeCalculation);

// Event Function
function slopeCalculation() {
  // Input
  let x1Value = +document.getElementById("x-1").value;
  let x2Value = +document.getElementById("x-2").value;
  let y1Value = +document.getElementById("y-1").value;
  let y2Value = +document.getElementById("y-2").value;

  // Process
  let rise = y2Value - y1Value;
  let run = x2Value - x1Value;
  let slope = rise / run;
  let output = slope.toFixed(3);

  if (output == NaN || output == Infinity) {
    output = 0.0;
  }

  // Output
  document.getElementById("slope-output").innerHTML = output;
}
