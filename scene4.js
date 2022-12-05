/////////////// Scene 4 ///////////////
function scene4() {
  imageMode(CORNER);
  image(scenes[4], 0, 0);

  me.display();
  me.checkMovement();
  ticketIcon();
  lifeIcon();

  scarfDisplay();
  scarfIcon();

  if (me.col - me.r < 0) {
    nextScene = true;
    sceneChange();
    me.col = height - me.r;
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
    if (!haveScarf) {
      fill(250);
      rect(width / 2 - 30, height / 2 + 110, 60, 20);
    } else {
      fill(0);
      rect(width / 2 - 30, height / 2 + 110, 60, 20);
      me.row = width / 2;
      me.col = height / 2 - me.r;
    }
  }
  return touchScarf;
}
