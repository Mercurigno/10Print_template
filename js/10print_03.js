function setup() {
  // Crea una tela che copre l'intera finestra del browser
  createCanvas(windowWidth, windowHeight);
  
  // Esegue il codice nel draw() una sola volta, anziché ripetutamente
  noLoop();
  
  // Imposta il colore di sfondo della tela a bianco
  background(255);
}

function draw() {
  // Definisce il numero di colonne e righe nella griglia
  let cols = 6;
  let rows = 8;
  
  // Calcola lo spazio tra le colonne e le righe
  let spacingX = width / cols;
  let spacingY = height / rows;

  // Ciclo esterno per attraversare la larghezza della tela con passo spacingX
  for (let x = 0; x < width; x += spacingX) {
    // Ciclo interno per attraversare l'altezza della tela con passo spacingY
    for (let y = 0; y < height; y += spacingY) {
      // Genera valori casuali per i componenti rosso, verde e blu del colore
      let r = random(255);
      let g = random(255);
      let b = random(255);
      
      // Imposta il colore di riempimento con i valori RGB generati e un'alpha di 150 per la trasparenza
      fill(r, g, b, 150);
      
      // Rimuove il bordo delle ellissi
      noStroke();
      
      // Disegna un'ellisse centrata nella cella della griglia
      // x + spacingX / 2 e y + spacingY / 2 centrano l'ellisse nella cella
      // spacingX * 0.8 imposta la dimensione dell'ellisse al 80% dello spazio della cella
      ellipse(x + spacingX / 2, y + spacingY / 2, spacingX * 0.8);
    }
  }
}

// Questa funzione viene chiamata ogni volta che la finestra viene ridimensionata
function windowResized() {
  // Ridimensiona la tela per coprire la nuova dimensione della finestra
  resizeCanvas(windowWidth, windowHeight);
  
  // Ridisegna la tela chiamando di nuovo la funzione draw()
  redraw();
}
