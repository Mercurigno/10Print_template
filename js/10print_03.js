let x = 0;
let y = 0;
let size = 40; // Aumentato il valore della variabile size

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (random(1) < 0.5) {
    let r = random(255); // Valore casuale per il rosso
    let g = random(255); // Valore casuale per il verde
    let b = random(255); // Valore casuale per il blu
    noStroke();
    fill(r, g, b);
    ellipse(x, y, size);
  } else {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    stroke(r, g, b); // Imposta il colore del tratto
    strokeWeight(2); // Aumentato lo spessore del tratto
    point(x, y);
  }

  x += size;
  if (x > width) {
    x = 0;
    y += size;
  }
}
