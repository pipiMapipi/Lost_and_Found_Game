class Sprites {
  constructor(animation, row, col) {
    this.animation = animation;
    this.speed = 2;
    this.frameOffset = 0;
    this.length = this.animation.length;
    this.row = row;
    this.col = col;
  }

  display() {
    let index = floor(this.frameOffset) % this.length;
    imageMode(CENTER);
    image(this.animation[index], this.row, this.col);
  }

  move() {
    this.frameOffset += 0.08;
  }
}
