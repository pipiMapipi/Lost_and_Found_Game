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
    this.speed = 0.1;
  }

  display() {
    // return int value
    let index = floor(this.frameOffset) % this.length;
    imageMode(CENTER);
    image(this.animation[index], this.row, this.col);
  }

  checkMovement() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65 /*a*/)) {
      if (!isWall(scene, this.row - meSpeed, this.col)) {
        this.row -= meSpeed;
        this.frameOffset += this.speed;
      }
      this.animation = this.left;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68 /*d*/)) {
      if (!isWall(scene, this.row + meSpeed, this.col)) {
        this.row += meSpeed;
        this.frameOffset += this.speed;
      }
      this.animation = this.right;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87 /*w*/)) {
      if (!isWall(scene, this.row, this.col - meSpeed)) {
        this.col -= meSpeed;
        this.frameOffset += this.speed;
      }
      this.animation = this.up;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83 /*s*/)) {
      if (!isWall(scene, this.row, this.col + meSpeed)) {
        this.col += meSpeed;
        this.frameOffset += this.speed;
      }
      this.animation = this.down;
    }
  }
}
