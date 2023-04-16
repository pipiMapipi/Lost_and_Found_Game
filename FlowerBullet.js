class FlowerBullet {
  constructor(flower, animation) {
    this.x = flower.row;
    this.y = flower.col;
    this.initX = flower.row;
    this.initY = flower.col;
    this.speed = 30;
    this.time = 0;
    this.animation = animation;
    this.animSpeed = random(0.5, 0.8);
    this.frameOffset = 0;
    this.length = this.animation.length;
    this.fireTime = 0;
  }

  display() {
    let index = floor(this.frameOffset) % this.length;
    imageMode(CENTER);
    image(this.animation[index], this.x, this.y);
    if (dist(me.row, me.col, this.x, this.y) < me.r || this.fireTime >= 100) {
      this.x = this.initX;
      this.y = this.initY;
      this.fireTime = 0;
    }
  }

  animate() {
    this.frameOffset += this.animSpeed;
  }

  move() {
    this.fireTime += 1;
    let posX = (me.row - this.x) / this.speed;
    let posY = (me.col - this.y) / this.speed;
    this.x += posX;
    this.y += posY;
  }

  hitDetection() {
    if (dist(me.row, me.col, this.x, this.y) < me.r + 3) {
      this.time += 0.05;
      if (this.time <= 0.05) {
        life.now--;
      }
      if (this.time >= 1) {
        this.time = 0;
      }
    }
  }
}
