function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop(); // Disegniamo solo una volta
  noStroke();
  colorMode(HSB, 360, 100, 100, 1); // Impostiamo il modo colore su HSB con alfa
}

function draw() {
  let numCircles = 200; // Numero di cerchi
  let maxDiameter = 200; // Diametro massimo dei cerchi
  
  for (let i = 0; i < numCircles; i++) {
    let x = random(width);
    let y = random(height);
    let diameter = random(50, maxDiameter);
    
    let baseColor = random(360); // Colore di base casuale
    drawPatternCircle(x, y, diameter, baseColor);
  }
}

// Funzione per disegnare un cerchio con pattern
function drawPatternCircle(x, y, diameter, baseColor) {
  push();
  translate(x, y);
  rotate(random(TWO_PI)); // Rotazione casuale
  
  let numSteps = int(random(5, 15)); // Numero di passi nel cerchio
  for (let i = 0; i < numSteps; i++) {
    let stepDiameter = map(i, 0, numSteps, diameter, 0);
    let stepColor = (baseColor + i * 10) % 360; // Cambiamento di colore
    fill(stepColor, 80, 90, 0.1);
    ellipse(0, 0, stepDiameter, stepDiameter);
  }
  
  pop();
}
