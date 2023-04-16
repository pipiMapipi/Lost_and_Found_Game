class Flower {
  constructor(animation1, animation2, row, col, speed) {
    this.animation1 = animation1;
    this.animation2 = animation2;
    this.speed = speed;
    this.frameOffset = 0;
    this.length = this.animation1.length;
    this.row = row;
    this.col = col;
  }

  display() {
    let index = floor(this.frameOffset) % this.length;
    imageMode(CENTER);

    if (!evilFlower) {
      image(this.animation1[index], this.row, this.col);
    } else {
      image(this.animation2[index], this.row, this.col);
    }
  }

  move() {
    this.frameOffset += this.speed;
  }
}
