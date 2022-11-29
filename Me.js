class Me {
  constructor(_row, _col, _r) {
    this.row = _row;
    this.col = _col;
    this.r = _r;
    this.down = characterDown;
    this.up = characterUp;
    this.left = characterLeft;
    this.right = characterRight;
    this.animation = characterDown;
    this.frameOffset = 0;
    this.length = this.animation.length;
    this.speed = 0.2;
  }

  display() {
    // return int value
    let index = floor(this.frameOffset) % this.length;
    imageMode(CENTER);
    image(this.animation[index], this.row, this.col);
  }

  checkMovement() {
    if (
      (keyIsDown(LEFT_ARROW) || keyIsDown(65 /*a*/)) &&
      !isWall(scene, this.row - meSpeed, this.col)
    ) {
      this.row -= meSpeed;
      this.animation = this.left;
      this.frameOffset += this.speed;
    } else if (
      (keyIsDown(RIGHT_ARROW) || keyIsDown(68 /*d*/)) &&
      !isWall(scene, this.row + meSpeed, this.col)
    ) {
      this.row += meSpeed;
      this.animation = this.right;
      this.frameOffset += this.speed;
    } else if (
      (keyIsDown(UP_ARROW) || keyIsDown(87 /*w*/)) &&
      !isWall(scene, this.row, this.col - meSpeed)
    ) {
      this.col -= meSpeed;
      this.animation = this.up;
      this.frameOffset += this.speed;
    } else if (
      (keyIsDown(DOWN_ARROW) || keyIsDown(83 /*s*/)) &&
      !isWall(scene, this.row, this.col + meSpeed)
    ) {
      this.col += meSpeed;
      this.animation = this.down;
      this.frameOffset += this.speed;
    }
  }
}
