function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);

  let gridSize = 50;  // Dimensione della griglia
  let circleSize = gridSize * 0.8;  // Dimensione dei cerchi

  for (let x = gridSize / 2; x < width; x += gridSize) {
      for (let y = gridSize / 2; y < height; y += gridSize) {
          let r = map(x, 0, width, 50, 255);
          let g = map(y, 0, height, 50, 255);
          let b = 150;

          fill(r, g, b, 150);  // Colori sfumati
          noStroke();
          ellipse(x, y, circleSize, circleSize);
      }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}



