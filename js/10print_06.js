// Variabili globali per memorizzare i valori base dei colori
let baseR1, baseG1, baseB1;
let baseR2, baseG2, baseB2;
let baseA;

// Funzione setup: viene eseguita una volta all'avvio del programma
function setup() {
  // Crea una tela delle dimensioni della finestra del browser
  createCanvas(windowWidth, windowHeight);
  
  // Impedisce il ciclo continuo di draw()
  noLoop();
  
  // Genera i colori iniziali
  generateColors();
}

// Funzione draw: disegna sulla tela
function draw() {
  // Imposta lo sfondo bianco
  background(255);

  // Dimensioni della griglia e dei cerchi
  let gridSize = 50;  // Dimensione della griglia
  let circleSize = gridSize * 0.8;  // Dimensione dei cerchi

  // Cicli per creare la griglia di cerchi
  for (let x = gridSize / 2; x < width; x += gridSize) {
    for (let y = gridSize / 2; y < height; y += gridSize) {
      // Mappa le componenti RGB in base alle posizioni x e y
      let r = map(x, 0, width, baseR1, baseR2);
      let g = map(y, 0, height, baseG1, baseG2);
      let b = map(x + y, 0, width + height, baseB1, baseB2);
      
      // Mappa la trasparenza in base alla posizione y
      let a = map(y, 0, height, baseA, 255);

      // Imposta il colore di riempimento con trasparenza
      fill(r, g, b, a);
      
      // Rimuove i contorni dei cerchi
      noStroke();
      
      // Disegna un cerchio alla posizione x, y con dimensione circleSize
      ellipse(x, y, circleSize, circleSize);
    }
  }
}

// Funzione windowResized: viene chiamata ogni volta che la finestra viene ridimensionata
function windowResized() {
  // Ridimensiona la tela alle nuove dimensioni della finestra
  resizeCanvas(windowWidth, windowHeight);
  
  // Ridisegna la tela
  redraw();
}

// Funzione mousePressed: viene chiamata ogni volta che si clicca con il mouse
function mousePressed() {
  // Genera nuovi colori
  generateColors();
  
  // Ridisegna la tela
  redraw();
}

// Funzione generateColors: genera valori casuali per i colori di base
function generateColors() {
  // Genera valori casuali per la prima serie di componenti RGB
  baseR1 = random(50, 150);
  baseG1 = random(50, 150);
  baseB1 = random(50, 150);
  
  // Genera valori casuali per la seconda serie di componenti RGB
  baseR2 = random(150, 255);
  baseG2 = random(150, 255);
  baseB2 = random(150, 255);
  
  // Genera un valore casuale per la trasparenza
  baseA = random(100, 200);
}




