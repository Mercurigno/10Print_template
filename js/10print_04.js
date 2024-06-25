let numCols = 8;
let numRows = 8;
let squareSize;

function setup() {
  createCanvas(windowWidth, windowHeight); // Crea un canvas che riempie l'intera finestra del browser
  squareSize = width / numCols; // Calcola la dimensione di ogni quadrato basata sulla larghezza della finestra e il numero di colonne
  drawCheckerboard(); // Chiama la funzione per disegnare la scacchiera
}

function drawCheckerboard() {
  // Loop attraverso tutte le colonne e righe della scacchiera
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      if ((col + row) % 2 === 0) {
        fill(255); // Se la somma di colonna e riga è pari, riempi con il colore bianco
      } else {
        fill(0); // Altrimenti, riempi con il colore nero
      }
      // Disegna un rettangolo (quadrato della scacchiera) con il colore determinato sopra
      rect(col * squareSize, row * squareSize, squareSize, squareSize);
    }
  }
}

function mousePressed() {
  let colClicked = floor(mouseX / squareSize); // Calcola la colonna del quadrato cliccato basata sulla posizione X del mouse
  let rowClicked = floor(mouseY / squareSize); // Calcola la riga del quadrato cliccato basata sulla posizione Y del mouse

  // Inverti il colore del quadrato cliccato
  if ((colClicked + rowClicked) % 2 === 0) {
    fill(0); // Se la somma di colonna e riga è pari, cambia il colore del quadrato a nero
  } else {
    fill(255); // Altrimenti, cambia il colore del quadrato a bianco
  }
  // Ridisegna il quadrato cliccato con il colore invertito
  rect(colClicked * squareSize, rowClicked * squareSize, squareSize, squareSize);
}
