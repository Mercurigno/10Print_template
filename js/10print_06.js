// La funzione setup() viene eseguita una sola volta all'inizio del programma.
function setup() {
  // Crea una tela (canvas) con dimensioni pari a quelle della finestra del browser.
  createCanvas(windowWidth, windowHeight);
  
  // Imposta il colore di sfondo della tela a nero.
  background(0);
  
  // Disabilita i contorni (stroke) per le forme disegnate.
  noStroke();
}

// La funzione draw() viene eseguita continuamente in un ciclo infinito.
function draw() {
  // Imposta il colore di riempimento a un colore casuale. 
  // random(255) genera un numero casuale tra 0 e 255 per i valori di rosso, verde e blu.
  fill(random(255), random(255), random(255));
  
  // Genera una posizione casuale per l'asse x all'interno della larghezza della tela.
  let x = random(width);
  
  // Genera una posizione casuale per l'asse y all'interno dell'altezza della tela.
  let y = random(height);
  
  // Imposta la larghezza del rettangolo a 100 pixel.
  let rWidth = 100;
  
  // Imposta l'altezza del rettangolo a 100 pixel.
  let rHeight = 100;
  
  // Disegna un rettangolo alla posizione (x, y) con larghezza rWidth e altezza rHeight.
  rect(x, y, rWidth, rHeight);
}





