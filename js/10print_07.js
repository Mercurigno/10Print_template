let x = 0;
let y = 0;
let size = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  let baseColor = random(360); // Colore di base casuale sull'intera ruota dei colori
  let complementaryColor = (baseColor + 180) % 360; // Calcolo del colore complementare

  let r = hueToRGB(baseColor);
  let g = hueToRGB(baseColor + 120);
  let b = hueToRGB(baseColor + 240);

  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, random(100, 200)); // Opacità casuale tra 100 e 200

  let shapeChoice = random(1); // Scelta casuale della forma

  if (shapeChoice < 0.3) {
    triangle(x, y, x+size, y+size, x+size, y-size); // Triangolo
  } else if (shapeChoice < 0.6) {
    ellipse(x+size/2, y+size/2, size, size); // Ellisse
  } else {
    rect(x, y, size, size); // Quadrato
  }

  x += size + random(-5, 5); // Spaziatura orizzontale casuale
  if (x > width) {
    x = 0;
    y += size + random(-5, 5); // Spaziatura verticale casuale
  }
  if (y > height) {
    noLoop(); // Ferma il loop di draw() una volta disegnato tutto lo schermo
  }
}

// Funzione per convertire un valore di tonalità (0-360) in un valore RGB
function hueToRGB(h) {
  let hue = (h % 360) / 60;
  let c = 255 * (1 - abs(hue % 2 - 1));
  return constrain(c, 0, 255);
}
