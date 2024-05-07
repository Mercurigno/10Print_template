let x = 0; 
let y = 0;
let size = 40; // Aumentato il valore della variabile size

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(0);
  
  // Genera valori casuali per il colore e la trasparenza
  let r = random(256);
  let g = random(256);
  let b = random(256);
  let alpha = random(100, 200); // Trasparenza variabile tra 100 e 200

  if (random(3) < 1) {
    fill(255, 0, 0, alpha); // Rosso
  } else if (random(3) < 2) {
    fill(0, 0, 255, alpha); // Blu
  } else {
    fill(0, 255, 0, alpha); // Verde
  }
  
  rect(x, y, size, size); 
  
  x += size;
  if(x > width){
    x = 0;
    y += size;
  }
}
