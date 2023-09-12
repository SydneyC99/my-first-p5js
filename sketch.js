function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  stroke(120);
  strokeWeight(5);
}

function draw() {
  background('#feede9');

  noFill();
  rect(200, 200, 100, 100);

  fill("blue");
  rect(115, 120, 70, 100);

  fill("magenta");
  rect(300, 325, 100, 145);

  fill(120);
  rect(278, 223, 50, 50);

  noFill();
  rect(375, 200, 48, 395);

  fill("blue");
  rect(325, 127, 45, 250);

  fill("magenta");
  rect(75, 325, 145, 145);

  fill(120);
  rect(200, 340, 100, 120);

  fill("lightblue");
  rect(200, 265, 30, 30);

  fill("pink");
  rect(150, 35, 295, 70);

  fill("lightblue");
  rect(275, 133, 50, 125);

  fill(120);
  rect(115, 210, 70, 80);
}
