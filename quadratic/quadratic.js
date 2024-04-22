// QUADRATIC FORMULA CALCULATOR
// Event Listener
let quaBtn = document.getElementById("qua-calc-btn");
quaBtn.addEventListener("click", calculate);

function calculate() {
  // INPUT
  let aValue = +document.getElementById("a-in").value;
  let bValue = +document.getElementById("b-in").value;
  let cValue = +document.getElementById("c-in").value;

  // PROCESS
  let math1 = (bValue * -1).toFixed(3);
  let math2 = (bValue ** 2 - 4 * aValue * cValue).toFixed(3);
  let math3 = (2 * aValue).toFixed(3);

  // OUTPUT
  let output = document.getElementById("output");
  output.innerHTML = `(${math1} ± √${math2}) / ${math3}`;

  let xInts = document.getElementById("x-ints");
  if (math2 > 0) {
    xInts.innerHTML = "2";
  } else if (math2 == 0) {
    xInts.innerHTML = "1";
  } else if (math2 < 0) {
    xInts.innerHTML = "0";
  }
}
