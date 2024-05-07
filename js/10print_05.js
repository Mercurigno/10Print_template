let x = 0;
let y = 0;
let size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke(); // Rimuovi il tratto per rendere le forme piene
}

function draw() {
  // Genera un nuovo colore casuale ad ogni iterazione
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Imposta il colore di riempimento per le forme
  fill(r, g, b);

  // Sceglie casualmente tra tre forme: cerchio, quadrato e triangolo
  let choice = floor(random(3));
  if (choice === 0) {
    // Disegna un cerchio
    ellipse(x + size / 2, y + size / 2, size);
  } else if (choice === 1) {
    // Disegna un quadrato
    rect(x, y, size, size);
  } else {
    // Disegna un triangolo
    triangle(x, y, x + size, y, x + size / 2, y + size);
  }

  // Sposta x a destra per la prossima forma
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
