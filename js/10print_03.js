// Dichiarazione delle variabili globali per la posizione e la dimensione delle forme
let x = 0;
let y = 0;
let size = 50;

function setup() {
  // Crea un canvas che occupa l'intera finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Imposta il colore di sfondo del canvas a bianco (RGB 255)
  background(255);
  // Rimuove il tratto delle forme per renderle piene
  noStroke();
}

function draw() {
  // Genera tre valori casuali per i canali RGB (rosso, verde, blu)
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Genera un valore casuale per il canale alpha (trasparenza) tra 100 e 200
  let alpha = random(100, 200);

  // Imposta il colore di riempimento delle forme con i valori RGB e alpha generati
  fill(r, g, b, alpha);

  // Sceglie casualmente tra tre forme: cerchio, quadrato e triangolo
  let choice = floor(random(3));
  if (choice === 0) {
    // Disegna un cerchio centrato in (x + size / 2, y + size / 2) con diametro size
    ellipse(x + size / 2, y + size / 2, size);
  } else if (choice === 1) {
    // Disegna un quadrato con l'angolo in alto a sinistra in (x, y) e dimensioni size x size
    rect(x, y, size, size);
  } else {
    // Disegna un triangolo con i vertici in (x, y), (x + size, y), (x + size / 2, y + size)
    triangle(x, y, x + size, y, x + size / 2, y + size);
  }

  // Sposta la posizione x verso destra per la prossima forma
  x += size;

  // Se x supera la larghezza del canvas, riporta x a 0 e sposta y verso il basso per la prossima riga
  if (x > width) {
    x = 0;
    y += size;
  }

  // Se y supera l'altezza del canvas, ferma l'esecuzione della funzione draw()
  if (y > height) {
    noLoop();
  }
}

