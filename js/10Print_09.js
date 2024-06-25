// Dichiarazione della variabile globale per la dimensione dei rettangoli
let size = 40; // Dimensione dei rettangoli

function setup() {
  // Crea una canvas che occupa l'intera finestra del browser
  createCanvas(windowWidth, windowHeight);
  
  // Chiama la funzione per disegnare la griglia iniziale
  drawGrid();
}

// Funzione per disegnare la griglia di rettangoli e testo
function drawGrid() {
  // Imposta lo sfondo della canvas a bianco
  background(255);

  // Cicli for annidati per scorrere lungo l'altezza e la larghezza della canvas
  for (let y = 0; y < height; y += size) { // Scorrimento verticale
    for (let x = 0; x < width; x += size) { // Scorrimento orizzontale
      
      // Generazione di colori casuali per i rettangoli
      let r = random(256); // Componente rosso tra 0 e 255
      let g = random(256); // Componente verde tra 0 e 255
      let b = random(256); // Componente blu tra 0 e 255

      // Imposta il colore di riempimento del rettangolo con i valori RGB generati
      fill(r, g, b);
      
      // Disegna un rettangolo alle coordinate (x, y) con dimensioni size x size
      rect(x, y, size, size);
      
      // Aggiunge testo casuale all'interno del rettangolo
      fill(255); // Testo bianco
      textSize(20); // Dimensione del testo
      textAlign(CENTER, CENTER); // Allinea il testo al centro del rettangolo
      
      // Genera una lettera casuale dall'alfabeto e la converte in stringa
      let lettera = String.fromCharCode(random(65, 91)); // Codice ASCII per lettere maiuscole
      
      // Disegna il testo al centro del rettangolo corrente
      text(lettera, x + size/2, y + size/2);
    }
  }
}

// Funzione chiamata automaticamente ogni volta che si fa clic sulla canvas
function mouseClicked() {
  // Chiama la funzione per disegnare una nuova griglia di rettangoli
  drawGrid();
  
  // Forza il ridisegno completo della canvas con la nuova griglia
  redraw();
}
