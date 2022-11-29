/////////////// Scene 1 ///////////////
function scene1() {
  const museum = { w: 400, h: 100 };
  const door = { w: 100, h: 40 };

  // background(0, 250, 0);
  textAlign(CENTER);
  imageMode(CORNER);
  image(scenes[1], 0, 0);
  me.display();
  me.checkMovement();
  checkTicket(museum, door);
  ticketIcon();
}

function checkTicket(museum, door) {
  let security = collideRectCircle(
    width / 2 - door.w / 2,
    museum.h - door.h,
    door.w,
    door.h - me.r + meSpeed,
    me.row,
    me.col,
    me.r * 2
  );
  if (security) {
    if (!haveTicket) {
      imageMode(CORNER);
      image(textFrame[0], width / 2 - door.w, museum.h - door.h - 25);
      fill(0);
      text("TICKET PLEASE", width / 2, museum.h - door.h);
      showFigure = true;
    } else {
      if (
        me.row - me.r > width / 2 - door.w / 2 &&
        me.row + me.r < width / 2 + door.w / 2
      ) {
        nextScene = true;
        sceneChange();
        me.col = height - me.r;
      }
    }
  }

  if (showFigure) {
    mysteriousFigure();
    getTicket();
  }
}

function mysteriousFigure() {
  mysteriousGuy.display();
  mysteriousGuy.move();
}

function getTicket() {
  let approach = collideRectCircle(
    475,
    290,
    me.r * 2,
    50,
    me.row,
    me.col,
    (me.r + meSpeed) * 2
  );
  if (approach) {
    if (!haveTicket) {
      fill(0);
      imageMode(CENTER);
      image(textFrame[0], 495, 260);
      text("HERE'S A TICKET", 495, 265);
    } else {
      fill(0);
      imageMode(CENTER);
      image(textFrame[0], 495, 260);
      text("DON'T LOSE IT!", 495, 265);
    }
  }
  return approach;
}
