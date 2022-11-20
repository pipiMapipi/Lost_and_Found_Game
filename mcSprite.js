class mcSprite {
  constructor(animation) {
    this.animation = animation;
    this.speed = 2;
    this.frameOffset = 0;
    this.length = this.animation.length;
  }

  display() {
    imageMode(CENTER);
    image(this.animation[this.frameOffset % this.length], me.row, me.col);
  }

  move() {
    this.frameOffset += 0.3;
  }
}
