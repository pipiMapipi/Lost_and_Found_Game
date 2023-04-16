class Sprites {
  constructor(animation, row, col, speed) {
    this.animation = animation;
    this.speed = speed;
    this.frameOffset = 0;
    this.length = this.animation.length;
    this.row = row;
    this.col = col;
    this.r = 20;
  }

  display() {
    let index = floor(this.frameOffset) % this.length;
    imageMode(CENTER);
    image(this.animation[index], this.row, this.col);
  }

  move() {
    this.frameOffset += this.speed;
  }

  mouthCatchDetection() {
    let distMeMouth = dist(me.row, me.col, this.row, this.col);
    if (distMeMouth <= me.r + this.r) {
      this.time += 0.04;
      if (this.time <= 0.04) {
        life.now--;
      }
      if (this.time >= 2) {
        this.time = 0;
      }
    }
  }
}
