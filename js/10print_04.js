let x = 0;
let y = 0;
let size = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (random(1) < 0.5) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let alpha = map(dist(x, y, width / 2, height / 2), 0, width / 2, 255, 0);
    stroke(r, g, b, alpha);
    strokeWeight(2);
    line(x, y, x + size, y + size); // Linea diagonale
  } else {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    stroke(r, g, b);
    strokeWeight(2);
    point(x, y);
  }

  x += size;
  if (x > width) {
    x = 0;
    y += size;
  }
}

