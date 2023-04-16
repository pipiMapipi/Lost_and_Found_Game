class Monster {
  constructor(animation, _row, _col, _me) {
    this.row = _row;
    this.col = _col;
    this.r = 30;
    this.me = _me;
    this.speed = 50;
    this.jump = 3;
    this.animation = animation;
    this.animeSpeed = 0.15;
    this.frameOffset = 0;
    this.length = this.animation.length;
  }

  display() {
    let index = floor(this.frameOffset) % this.length;
    imageMode(CENTER);
    image(this.animation[index], this.row, this.col);
  }

  move() {
    this.frameOffset += this.animeSpeed;
  }

  checkMovement() {
    let posX = constrain((this.me.row - this.row) / this.speed, -4, 4);
    let posY = constrain((this.me.col - this.col) / this.speed, -4, 4);

    if (
      !isWall(scene, this.row + posX, this.col) &&
      !isWall(scene, this.row, this.col + posY)
    ) {
      this.row += posX;
      this.col += posY;
    }

    if (this.me.col >= this.col) {
      if (isWall(scene, this.row, this.col + posY)) {
        if (this.col < height / 2 || this.col > 250) {
          this.row -= this.jump;
        } else {
          this.row += this.jump;
        }
      }
      if (isWall(scene, this.row + posX, this.col)) {
        this.col += this.jump;
      }
    } else {
      if (isWall(scene, this.row, this.col + posY)) {
        if (this.col < height / 2 || this.col > 250) {
          this.row += this.jump;
        } else {
          this.row -= this.jump;
        }
      }
      if (isWall(scene, this.row + posX, this.col)) {
        this.col -= this.jump;
      }
    }
  }

  kill() {
    if (
      dist(this.row, this.col, this.me.row, this.me.col) <
      this.r + this.me.r - meSpeed
    ) {
      life.now = 0;
    }
  }
}
