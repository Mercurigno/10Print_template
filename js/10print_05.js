// Inizializza le variabili per tracciare la posizione corrente e altre impostazioni
let x = 0;
let y = 0;
let size = 45; // Dimensione di ciascuna figura
let isFill = true; // Determina se le figure saranno riempite o meno

// La funzione setup viene eseguita una sola volta all'inizio
function setup() {
  createCanvas(windowWidth, windowHeight); // Crea una tela che copre tutta la finestra del browser
  background(255); // Imposta lo sfondo della tela su bianco
  noFill(); // Imposta il riempimento iniziale a nessuno
}

// La funzione draw viene eseguita continuamente fino a quando noLoop() viene chiamata
function draw() {
  // Genera un nuovo colore casuale ad ogni iterazione
  let r = random(100, 200); // Valore rosso casuale tra 100 e 200
  let g = random(50, 150); // Valore verde casuale tra 50 e 150
  let b = random(150, 255); // Valore blu casuale tra 150 e 255
  let alpha = random(100, 200); // Trasparenza casuale tra 100 e 200

  strokeWeight(2); // Imposta la larghezza del contorno a 2
  if (isFill) {
    fill(r, g, b, alpha); // Applica il riempimento con il colore e la trasparenza casuali
  } else {
    noFill(); // Non riempie la figura
    stroke(r, g, b, alpha); // Applica il colore e la trasparenza casuali al contorno
  }
  
  // Decide casualmente quale forma disegnare
  let choice = random(6); // Numero casuale tra 0 e 6
  if (choice < 1) {
    // Disegna una linea diagonale
    line(x, y, x + size, y + size);
  } else if (choice < 2) {
    // Disegna un quadrato
    if (isFill) {
      square(x, y, size); // Usa la funzione square se è riempito
    } else {
      rect(x, y, size, size); // Usa la funzione rect se non è riempito
    }
  } else if (choice < 3) {
    // Disegna un cerchio
    if (isFill) {
      ellipse(x + size / 2, y + size / 2, size * 0.8); // Cerchio centrato e ridotto
    } else {
      ellipse(x + size / 2, y + size / 2, size * 0.8, size * 0.8); // Cerchio centrato e ridotto
    }
  } else if (choice < 4) {
    // Disegna una croce
    let halfSize = size / 2;
    line(x, y + halfSize, x + size, y + halfSize); // Linea orizzontale della croce
    line(x + halfSize, y, x + halfSize, y + size); // Linea verticale della croce
  } else if (choice < 5) {
    // Disegna una curva sinuosa
    beginShape(); // Inizia la forma
    for (let i = 0; i < size; i += 5) {
      let xOffset = random(-10, 10); // Offset casuale per l'asse x
      let yOffset = random(-10, 10); // Offset casuale per l'asse y
      vertex(x + i, y + i + xOffset); // Definisce il vertice della curva
    }
    endShape(); // Termina la forma
  } else {
    // Disegna un arco sinistro
    arc(x + size / 2, y + size / 2, size * 1.2, size * 1.2, HALF_PI, PI);
  }
  
  // Sposta x a destra per la prossima figura
  x += size;
  if (x > width) {
    x = 0; // Reimposta x a 0 quando raggiunge il bordo destro della tela
    y += size; // Sposta y giù per la prossima riga
  }

  // Verifica se è necessario fermare il disegno spostandosi oltre l'altezza della finestra
  if (y > height) {
    noLoop(); // Ferma la funzione draw()
  }
  
  // Inverte il valore di isFill per la prossima figura
  isFill = !isFill;
}

