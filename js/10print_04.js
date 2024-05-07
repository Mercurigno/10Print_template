let x = 0;
let y = 0;
let size = 45;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke();
  
  // Generazione casuale dei colori
  let r1 = random(50, 150);
  let g1 = random(100, 200);
  let b1 = random(200, 255);
  let alpha1 = random(150, 200);
  
  let r2 = random(200, 255);
  let g2 = random(50, 150);
  let b2 = random(100, 200);
  let alpha2 = random(150, 200);
  
  if (random(1) < 0.5) {
    // Disegna un rettangolo
    fill(r1, g1, b1, alpha1);
    rect(x, y, size * 1.2, size * 0.8); // Rettangolo più largo
    
    // Disegna un cerchio all'interno del rettangolo
    fill(r2, g2, b2, alpha2);
    let circleSize = size * 0.6;
    ellipse(x + size * 0.6, y + size * 0.4, circleSize, circleSize); // Posizionato al centro del rettangolo
  } else {
    // Disegna un cerchio
    fill(r2, g2, b2, alpha2);
    ellipse(x + size / 2, y + size / 2, size * 0.8); // Cerchio più piccolo
    
    // Disegna un rettangolo all'esterno del cerchio
    fill(r1, g1, b1, alpha1);
    let rectSize = size * 1.2;
    rect(x - size * 0.1, y - size * 0.1, rectSize, rectSize); // Posizionato sopra e a sinistra del cerchio
  }
  
  x += size * 1.2; // Spostamento verso destra
  if (x > width - size * 1.2) { // Controllo per non superare la larghezza della finestra
    x = 0;
    y += size * 1.2; // Spostamento verso il basso
  }
  
  if (y > height - size * 1.2) { // Controllo per non superare l'altezza della finestra
    noLoop(); // Ferma la funzione draw()
  }
}
