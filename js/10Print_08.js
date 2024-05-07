let x = 0;
let y = 0;
let size = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();
}

function draw() {
  // Genera un nuovo colore casuale ad ogni iterazione con trasparenza
  let r = random(255);
  let g = random(255);
  let b = random(255, 200); // Trasparenza

  strokeWeight(2);
  stroke(r, g, b);
  
  // Decide casualmente se disegnare una X, un quadrato o una croce
  let choice = random(5);
  if (choice < 1) {
    line(x, y, x + size, y + size);
    line(x, y + size, x + size, y);
  } else if (choice < 2) {
    square(x, y, size);
  } else if (choice < 3) {
    ellipse(x + size / 2, y + size / 2, size * 0.8);
  } else {
    // Croce
    line(x, y + size / 2, x + size, y + size / 2);
    line(x + size / 2, y, x + size / 2, y + size);
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
}