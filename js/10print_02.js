let x = 0; 
let y = 0;
let size = 40; // Dimensione dei quadrati

function setup() {
  createCanvas(windowWidth, windowHeight); // Crea il canvas delle dimensioni della finestra del browser
}

function draw() {
  strokeWeight(0); // Imposta lo spessore del contorno a 0 (nessun contorno)

  // Genera valori casuali per il colore e la trasparenza
  let r = random(256); // Componente rosso casuale (da 0 a 255)
  let g = random(256); // Componente verde casuale (da 0 a 255)
  let b = random(256); // Componente blu casuale (da 0 a 255)
  let alpha = random(100, 200); // Trasparenza casuale tra 100 e 200

  // Selezione casuale del colore in base a un numero tra 0 e 3
  if (random(3) < 1) {
    fill(255, 0, 0, alpha); // Riempimento rosso con trasparenza casuale
  } else if (random(3) < 2) {
    fill(0, 0, 255, alpha); // Riempimento blu con trasparenza casuale
  } else {
    fill(0, 255, 0, alpha); // Riempimento verde con trasparenza casuale
  }
  
  rect(x, y, size, size); // Disegna un rettangolo alla posizione (x, y) con dimensioni size x size
  
  x += size; // Sposta la coordinata x per il prossimo rettangolo nella riga successiva
  if (x > width) { // Se x supera la larghezza del canvas
    x = 0; // Ripristina x a 0 per iniziare una nuova riga
    y += size; // Sposta la coordinata y per iniziare una nuova riga di rettangoli
  }
}

