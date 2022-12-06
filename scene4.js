/////////////// Scene 4 ///////////////
function scene4() {
  imageMode(CORNER);
  if (lightOffset > realityTime) {
    image(reality, 0, 0);
  } else {
    image(scenes[4], 0, 0);
  }

  me.display();
  me.checkMovement();
  scarfDisplay();

  if (me.col - me.r < 0) {
    nextScene = true;
    sceneChange();
    me.col = height - me.r;
    lightOffeset = 0;
    changeTrigger = false;
  }

  textAlign(CORNER);
  textFont(regularFont);
  if (me.col < 235) {
    if (me.row >= 55 && me.row <= 145) {
      fill(0, 100);
      rect(33, 150, 135, 40, 3);
      textSize(7);
      fill(255);
      text("I still have work to do...", 38, 165);
      text("I cannot ...slee...p...zZZ", 38, 180);
    }
  }
}

function scarfDisplay() {
  let touchScarf = collideRectCircle(
    width / 2 - 50,
    height / 2 - 5,
    100,
    100,
    me.row,
    me.col,
    (me.r + meSpeed) * 2
  );
  if (touchScarf) {
    changeTrigger = true;
    if (lightOffset < realityTime) {
      fill(0, 100);
      rect(width / 2 - 105, 135, 215, 50, 3);
      textSize(9);
      textFont(boldFont);
      fill(255);
      text("A scarf that disappeared", width / 2 - 95, 155);
      text("in an under table drawer", width / 2 - 95, 170);
    } else {
      textSize(20);
      textFont(boldFont);
      fill(color("#b98d34"));
      text(
        "YOU LOST THAT SCARF",
        width / 2 - 165 + random(-5, 5),
        height / 2 + 140 + random(-2, 2)
      );
    }
  }

  if (changeTrigger) {
    lightOffset++;
  }

  if (lightOffset >= realityTime && lightOffset < realityTime * 1.2) {
    me.row = width / 2;
    me.col = height / 2 - 7 - me.r;
  }

  if (lightOffset > realityTime) {
    fill(0, 80 + random(-10, 20));
    rect(0, 0, width, height);
  }

  // transition
  if (lightOffset < realityTime) {
    if (
      lightOffset >= 0.6 * realityTime &&
      lightOffset <= 0.8 * realityTime &&
      lightOffset % 6 == 0
    ) {
      fill(0);
      rect(0, 0, width, height);
    } else if (lightOffset > 0.8 * realityTime && lightOffset % 3 == 0) {
      fill(0);
      rect(0, 0, width, height);
    } else if (lightOffset < 0.8 * realityTime || lightOffset % 7 >= 3) {
      imageMode(CORNER);
      image(s4_overlay, 0, 0);
    }
  }

  ticketIcon();
  lifeIcon();
}
