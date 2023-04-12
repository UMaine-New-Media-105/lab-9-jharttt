let bearList = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 50; i++) {
    let bear = new Sprite(random(width), random(height), random(1, 3), random(20, 50), "orange");
    bearList.push(bear);
  }
}

function draw() {
  background(220);
  for (const bear of bearList) {
    bear.draw();
    bear.move();
    bear.bounce();
  }
}

class Sprite {
  constructor(x, y, speed, size, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
    this.color = color;
    this.xDir = random(-1, 1);
    this.yDir = random(-1, 1);
  }

  draw() {
    push();
    fill(this.color);
    ellipse(this.x, this.y, this.size * 2);
    ellipse(this.x - this.size / 1.2, this.y - this.size / 2, this.size / 2);
    ellipse(this.x + this.size / 1.2, this.y - this.size / 2, this.size / 2);
    pop();
  }

  move() {
    this.x += this.speed * this.xDir;
    this.y += this.speed * this.yDir;
  }

  bounce() {
    if (this.x < 0 || this.x > width) {
      this.xDir *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.yDir *= -1;
    }
  }
}
