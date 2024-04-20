function Transform() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let d = parseFloat(document.getElementById("d").value);
  let tx = parseFloat(document.getElementById("tx").value);
  let ty = parseFloat(document.getElementById("ty").value);
  let angle = parseFloat(document.getElementById("angle").value);
  let scale = parseFloat(document.getElementById("scale").value);

  let angleInRadians = angle * Math.PI / 180;
  let cos = Math.cos(angleInRadians);
  let sin = Math.sin(angleInRadians);

  let scaleCos = scale * cos;
  let scaleSin = scale * sin;

  let newA = a * scaleCos + b * scaleSin;
  let newB = a * -scaleSin + b * scaleCos;
  let newC = c * scaleCos + d * scaleSin;
  let newD = c * -scaleSin + d * scaleCos;

  let matrixTxt = "matrix(" + newA + ", " + newC + ", " + newB + ", " + newD + ", " + tx + ", " + ty + ")"

  let matrixDisplay = [
    "变换矩阵：",
    "[" + newA.toFixed(2) + ", " + newB.toFixed(2) + ", " + tx.toFixed(2) + "]",
    "[" + newC.toFixed(2) + ", " + newD.toFixed(2) + ", " + ty.toFixed(2) + "]",
    "[0.00, 0.00, 1.00]"
  ].join("\n");
  document.getElementById("matrixDisplay").textContent = matrixDisplay;

  document.getElementById("photo").style.transform = matrixTxt;

  document.getElementById("retBtn").disabled = false;
}

function Reset() {
  document.getElementById("photo").style.transform = "matrix(1, 0, 0, 1, 0, 0)";
  document.getElementById("a").value = 1;
  document.getElementById("b").value = 0;
  document.getElementById("c").value = 0;
  document.getElementById("d").value = 1;
  document.getElementById("tx").value = 0;
  document.getElementById("ty").value = 0;
  document.getElementById("angle").value = 0;
  document.getElementById("scale").value = 1;
  document.getElementById("matrixDisplay").innerHTML = `
  变换矩阵：
  [ a,  b,  tx]
  [ c,  d,  ty]
  [ 0,  0,   1]
  `;
  document.getElementById("angleValue").textContent = 0;
  document.getElementById("scaleValue").textContent = 1;

  document.getElementById("retBtn").disabled = true;
  
}

document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "t" || event.key ===  "T") {
      Transform();
  }
  else if (event.key === "r" || event.key ===  "R") {
      Return();
  }
});


var angleSlider = document.getElementById("angle");
var angleValue = document.getElementById("angleValue");

angleSlider.oninput = function() {
  angleValue.textContent = this.value;
}


var scaleSlider = document.getElementById("scale");
var scaleValue = document.getElementById("scaleValue");

scaleSlider.oninput = function() {
  scaleValue.textContent = this.value;
}