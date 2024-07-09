let shapes = []; // Dichiarazione di un array vuoto che conterrà tutte le forme in movimento

function setup() {
  createCanvas(windowWidth, windowHeight); // Creazione di una tela grande quanto la finestra del browser
  noStroke(); // Disabilita i bordi per le forme

  // Creazione di alcune forme iniziali
  for (let i = 0; i < 50; i++) {
    shapes.push(new MovingShape()); // Aggiunge 50 nuove istanze di MovingShape all'array shapes
  }
}

function draw() {
  background(255); // Imposta lo sfondo bianco per ogni frame
  
  // Disegna e aggiorna tutte le forme
  for (let shape of shapes) {
    shape.update(); // Aggiorna la posizione della forma
    shape.display(); // Disegna la forma sulla tela
  }
}

class MovingShape {
  constructor() {
    this.x = random(width); // Posizione orizzontale casuale iniziale
    this.y = random(height); // Posizione verticale casuale iniziale
    this.size = random(20, 50); // Dimensione casuale iniziale tra 20 e 50 pixel
    this.color = color(random(255), random(255), random(255)); // Colore casuale
    this.speedX = random(-2, 2); // Velocità orizzontale casuale tra -2 e 2 pixel per frame
    this.speedY = random(-2, 2); // Velocità verticale casuale tra -2 e 2 pixel per frame
  }

  update() {
    this.x += this.speedX; // Aggiorna la posizione orizzontale
    this.y += this.speedY; // Aggiorna la posizione verticale

    // Invertire la direzione quando colpisce i bordi orizzontali
    if (this.x < 0 || this.x > width) this.speedX *= -1;
    // Invertire la direzione quando colpisce i bordi verticali
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }

  display() {
    fill(this.color); // Imposta il colore di riempimento
    ellipse(this.x, this.y, this.size, this.size); // Disegna un'ellisse alla posizione corrente con la dimensione corrente
  }
}
