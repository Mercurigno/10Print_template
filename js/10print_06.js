let x = 0;
let y = 0;
let size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  let r = random(100, 200); // Limita la gamma dei colori
  let g = random(100, 200);
  let b = random(100, 200);
  let alpha = random(150, 200); // Aggiungi trasparenza

  strokeWeight(2);
  stroke(r, g, b, alpha); // Applica trasparenza
  fill(r, g, b, alpha); // Applica trasparenza

  let choice = floor(random(7)); // Aggiungi un'altra forma

  if (choice === 0) {
    ellipse(x + size / 2, y + size / 2, size, size);
  } else if (choice === 1) {
    rect(x, y, size, size);
  } else if (choice === 2) {
    triangle(x, y, x + size, y, x + size / 2, y + size);
  } else if (choice === 3) {
    quad(x + size / 2, y, x + size, y + size / 2, x + size / 2, y + size, x, y + size / 2);
  } else if (choice === 4) {
    hexagon(x + size / 2, y + size / 2, size / 2);
  } else if (choice === 5) { // Aggiungi un'altra forma
    pentagon(x + size / 2, y + size / 2, size / 2);
  } else {
    star(x + size / 2, y + size / 2, size / 2, 5, 0.5); // Aggiungi un'altra forma
  }

  x += size + random(-10, 10); // Aumenta l'intervallo delle dimensioni
  if (x > width) {
    x = 0;
    y += size + random(-10, 10);
  }
  if (y > height) {
    noLoop();
  }
}

// Funzione per disegnare un esagono
function hexagon(x, y, radius) {
  let angle = TWO_PI / 6;
  beginShape();
  for (let a = -PI / 6; a < TWO_PI - PI / 6; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Funzione per disegnare un pentagono
function pentagon(x, y, radius) {
  let angle = TWO_PI / 5;
  beginShape();
  for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Funzione per disegnare una stella
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
