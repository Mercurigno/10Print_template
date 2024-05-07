let x = 0;
let y = 0;
let size = 45;
let isFill = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();
}

function draw() {
  // Genera un nuovo colore casuale ad ogni iterazione
  let r = random(100, 200);
  let g = random(50, 150);
  let b = random(150, 255); 
  let alpha = random(100, 200); // Trasparenza

  strokeWeight(2);
  if (isFill) {
    fill(r, g, b, alpha);
  } else {
    noFill();
    stroke(r, g, b, alpha);
  }
  
  // Decide casualmente quale forma disegnare
  let choice = random(6);
  if (choice < 1) {
    // Linea diagonale
    line(x, y, x + size, y + size);
  } else if (choice < 2) {
    // Quadrato
    if (isFill) {
      square(x, y, size);
    } else {
      rect(x, y, size, size);
    }
  } else if (choice < 3) {
    // Cerchio
    if (isFill) {
      ellipse(x + size / 2, y + size / 2, size * 0.8);
    } else {
      ellipse(x + size / 2, y + size / 2, size * 0.8, size * 0.8);
    }
  } else if (choice < 4) {
    // Croce
    let halfSize = size / 2;
    line(x, y + halfSize, x + size, y + halfSize);
    line(x + halfSize, y, x + halfSize, y + size);
  } else if (choice < 5) {
    // Curva sinuosa
    beginShape();
    for (let i = 0; i < size; i += 5) {
      let xOffset = random(-10, 10);
      let yOffset = random(-10, 10);
      vertex(x + i, y + i + xOffset);
    }
    endShape();
  } else {
    // Arcata sinistra
    arc(x + size / 2, y + size / 2, size * 1.2, size * 1.2, HALF_PI, PI);
  }
  
  // Sposta x a destra per la prossima figura
  x += size;
  if (x > width) {
    x = 0;
    y += size; // Sposta y giù per la prossima riga
  }

  // Verifica se è necessario fermare il disegno spostandosi oltre l'altezza della finestra
  if (y > height) {
    noLoop(); // Ferma la funzione draw()
  }
  
  // Inverte il valore di isFill per la prossima forma
  isFill = !isFill;
}
