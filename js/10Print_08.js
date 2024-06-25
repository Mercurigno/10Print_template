let x = 0; // Inizializza la coordinata x a 0
let y = 0; // Inizializza la coordinata y a 0
let size = 40; // Dimensione dei singoli elementi

function setup() {
  createCanvas(windowWidth, windowHeight); // Crea un canvas che riempie l'intera finestra del browser
  background(255); // Imposta il colore di sfondo a bianco (RGB 255, 255, 255)
  noFill(); // Imposta il riempimento delle forme a nessuno
}

function draw() {
  // Genera un nuovo colore casuale ad ogni iterazione con trasparenza
  let r = random(255); // Genera un valore casuale per il canale rosso (0-255)
  let g = random(255); // Genera un valore casuale per il canale verde (0-255)
  let b = random(255, 200); // Genera un valore casuale per il canale blu con trasparenza (200-255)

  strokeWeight(2); // Imposta lo spessore del tratto a 2 pixel
  stroke(r, g, b); // Imposta il colore del tratto in base ai valori RGB generati

  // Decide casualmente se disegnare una X, un quadrato, un'ellisse, una croce o un triangolo
  let choice = random(5); // Genera un numero casuale tra 0 (incluso) e 5 (escluso)
  if (choice < 1) {
    // Disegna una X
    line(x, y, x + size, y + size); // Linea da (x, y) a (x + size, y + size)
    line(x, y + size, x + size, y); // Linea da (x, y + size) a (x + size, y)
  } else if (choice < 2) {
    // Disegna un quadrato
    square(x, y, size); // Quadrato con l'angolo in alto a sinistra in (x, y) e lato size
  } else if (choice < 3) {
    // Disegna un'ellisse
    ellipse(x + size / 2, y + size / 2, size * 0.8); // Ellisse centrata in (x + size/2, y + size/2) con dimensioni size*0.8
  } else if (choice < 4) {
    // Disegna una croce
    line(x, y + size / 2, x + size, y + size / 2); // Linea orizzontale al centro
    line(x + size / 2, y, x + size / 2, y + size); // Linea verticale al centro
  } else {
    // Disegna un triangolo
    triangle(x + size / 2, y, x, y + size, x + size, y + size); // Triangolo con vertici in (x + size/2, y), (x, y + size), (x + size, y + size)
  }

  // Sposta x a destra per la prossima figura
  x += size; // Sposta x di size pixel verso destra
  if (x > width) { // Se x supera la larghezza del canvas
    x = 0; // Riporta x a 0
    y += size; // Sposta y verso il basso per passare alla riga successiva
  }

  // Verifica se è necessario fermare il disegno spostandosi oltre l'altezza della finestra
  if (y > height) {
    noLoop(); // Ferma la funzione draw() per evitare il disegno oltre l'altezza della finestra
  }
}
