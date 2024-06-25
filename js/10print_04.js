let numCols = 8; // Numero di colonne nella scacchiera
let numRows = 8; // Numero di righe nella scacchiera
let squareSize; // Dimensione di ogni quadrato
let board = []; // Array 2D per memorizzare lo stato di ogni quadrato (bianco o nero)

function setup() {
  createCanvas(windowWidth, windowHeight); // Crea un canvas che riempie l'intera finestra del browser
  squareSize = width / numCols; // Calcola la dimensione di ogni quadrato basata sulla larghezza della finestra e il numero di colonne
  initializeBoard(); // Inizializza lo stato della scacchiera
  drawCheckerboard(); // Chiama la funzione per disegnare la scacchiera
}

function initializeBoard() {
  for (let col = 0; col < numCols; col++) {
    board[col] = []; // Crea un array per ogni colonna
    for (let row = 0; row < numRows; row++) {
      // Memorizza lo stato iniziale del colore: true per bianco, false per nero
      board[col][row] = (col + row) % 2 === 0;
    }
  }
}

function drawCheckerboard() {
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      if (board[col][row]) {
        fill(255); // Riempi con il colore bianco se lo stato è true
      } else {
        fill(0); // Riempi con il colore nero se lo stato è false
      }
      // Disegna un rettangolo (quadrato della scacchiera) con il colore determinato
      rect(col * squareSize, row * squareSize, squareSize, squareSize);
    }
  }
}

function mousePressed() {
  let colClicked = floor(mouseX / squareSize); // Calcola la colonna del quadrato cliccato basata sulla posizione X del mouse
  let rowClicked = floor(mouseY / squareSize); // Calcola la riga del quadrato cliccato basata sulla posizione Y del mouse

  // Verifica se il clic è all'interno della scacchiera
  if (colClicked >= 0 && colClicked < numCols && rowClicked >= 0 && rowClicked < numRows) {
    // Inverti lo stato del colore del quadrato cliccato
    board[colClicked][rowClicked] = !board[colClicked][rowClicked];

    // Ridisegna il quadrato cliccato con il colore invertito
    if (board[colClicked][rowClicked]) {
      fill(255); // Riempi con il colore bianco se lo stato è true
    } else {
      fill(0); // Riempi con il colore nero se lo stato è false
    }
    rect(colClicked * squareSize, rowClicked * squareSize, squareSize, squareSize);
  }
}
