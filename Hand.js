class Hand {
  constructor(animation, row, col, speed, side) {
    this.animation = animation;
    this.speed = speed;
    this.frameOffset = 0;
    this.length = this.animation.length;
    this.row = row;
    this.col = col;
    this.side = side;
    this.startX = row;
    this.startY = col;
    this.offset = 0;
    this.time = 0;
  }

  display() {
    let index = floor(this.frameOffset) % this.length;
    imageMode(CORNER);
    if (this.side == -1) {
      scale(-1, 1);
      image(this.animation[index], -this.row, this.col);
    } else {
      image(this.animation[index], this.row, this.col);
    }
  }

  wallText() {
    textAlign(CENTER);
    textSize(25);
    fill(255, 0, 0);
    if (this.side == -1) {
      text(
        "WHERE?",
        this.row - 210 + random(-3, 3),
        this.col + 70 + random(-2, 2)
      );
    } else {
      text(
        "WHERE!!",
        this.row + 210 + random(-3, 3),
        this.col + 70 + random(-2, 2)
      );
    }
  }

  move(direction) {
    this.frameOffset += this.speed;
    // hands out
    if (direction == 1) {
      if (this.offset < 1) {
        this.offset += 0.1;
      } else {
        this.offset = 1;
      }
    } else {
      // hands back
      if (this.offset > 0) {
        this.offset -= 0.1;
      } else {
        this.offset = 0;
      }
    }

    if (this.side == -1) {
      // left hands
      this.row = lerp(this.startX, this.startX + 75, this.offset);
    } else {
      // right hands
      this.row = lerp(this.startX, this.startX - 75, this.offset);
    }
  }

  catchDetection() {
    if (
      (this.side == 1 &&
        me.row + me.r >= this.startX - 55 &&
        me.col + me.r > this.col &&
        me.col - me.r < this.col + 35) ||
      (this.side == -1 &&
        me.row - me.r <= this.startX + 125 &&
        me.col + me.r > this.col &&
        me.col - me.r < this.col + 35)
    ) {
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
