function setup() {
  // Crea un canvas con larghezza e altezza pari a quelle della finestra del browser
  createCanvas(windowWidth, windowHeight);
  
  // Imposta lo sfondo del canvas a bianco
  background(255);
  
  // Disabilita il contorno per le forme
  noStroke();
  
  // Imposta il modo colore su HSB con hue da 0 a 360, saturazione e luminosità da 0 a 100, e alfa da 0 a 1
  colorMode(HSB, 360, 100, 100, 1);
  
  // Disegna il pattern iniziale
  drawPattern();
}

function drawPattern() {
  // Reimposta lo sfondo del canvas a bianco, cancellando eventuali disegni precedenti
  background(255);
  
  // Definisce il numero di cerchi da disegnare
  let numCircles = 200;
  
  // Definisce il diametro massimo dei cerchi
  let maxDiameter = 200;
  
  // Ciclo per disegnare ciascun cerchio
  for (let i = 0; i < numCircles; i++) {
    // Genera una posizione casuale (x, y) per il cerchio
    let x = random(width);
    let y = random(height);
    
    // Genera un diametro casuale per il cerchio, compreso tra 50 e maxDiameter
    let diameter = random(50, maxDiameter);
    
    // Genera un colore di base casuale per il cerchio
    let baseColor = random(360);
    
    // Chiama la funzione per disegnare un cerchio con pattern
    drawPatternCircle(x, y, diameter, baseColor);
  }
}

// Funzione per disegnare un cerchio con pattern
function drawPatternCircle(x, y, diameter, baseColor) {
  // Salva lo stato attuale delle trasformazioni e degli stili di disegno
  push();
  
  // Trasla il sistema di coordinate al punto (x, y)
  translate(x, y);
  
  // Ruota il sistema di coordinate di un angolo casuale
  rotate(random(TWO_PI));
  
  // Genera un numero casuale di passi nel cerchio, tra 5 e 15
  let numSteps = int(random(5, 15));
  
  // Ciclo per disegnare ciascun passo del cerchio
  for (let i = 0; i < numSteps; i++) {
    // Calcola il diametro del passo corrente, riducendolo progressivamente
    let stepDiameter = map(i, 0, numSteps, diameter, 0);
    
    // Calcola il colore del passo corrente, variando il colore di base
    let stepColor = (baseColor + i * 10) % 360;
    
    // Imposta il colore di riempimento con il colore calcolato e una trasparenza del 10%
    fill(stepColor, 80, 90, 0.1);
    
    // Disegna un'ellisse al centro del sistema di coordinate traslato
    ellipse(0, 0, stepDiameter, stepDiameter);
  }
  
  // Ripristina lo stato delle trasformazioni e degli stili di disegno salvato
  pop();
}

// Funzione che viene chiamata quando si preme il pulsante del mouse
function mousePressed() {
  // Ridisegna il pattern
  drawPattern();
}

