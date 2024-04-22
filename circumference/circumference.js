// CIRCUMFERENCE CALCULATOR
// Event Listener
let cirBtn = document.getElementById("cir-calc-btn");
cirBtn.addEventListener("click", cirCalculation);

// Event Function
function cirCalculation() {
  // Input
  let radiusIn = +document.getElementById("radius").value;

  // Process
  math = 2 * Math.PI * radiusIn;
  output = math.toFixed(3);

  // Output
  document.getElementById("cir_output").innerHTML = output;
  console.log("Program Works");
}
