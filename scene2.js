/////////////// Scene 2 ///////////////
function scene2() {
  imageMode(CORNER);
  image(scenes[2], 0, 0);

  // counter
  frontdeskGuy.display();
  frontdeskGuy.move();

  // computer
  imageMode(CENTER);
  image(computer, width / 2, height / 2 - 21);

  me.display();
  me.checkMovement();
  counterCheck();
  ticketIcon();
  lifeIcon();
  nextRoom();
}

function counterCheck() {
  let receptionist = collideRectCircle(
    width / 2 - 100,
    height / 2 - 50,
    200,
    50,
    me.row,
    me.col,
    (me.r + meSpeed) * 2
  );
  if (receptionist) {
    if (!haveLife) {
      fill(0);
      imageMode(CENTER);
      textAlign(CENTER);
      image(textFrame[0], width / 2, height / 2 - 90);
      text("YOU'LL NEED THIS", width / 2, height / 2 - 85);
    } else {
      fill(0);
      imageMode(CENTER);
      textAlign(CENTER);
      image(textFrame[0], width / 2, height / 2 - 90);
      text("ENJOY YOUR VISIT", width / 2, height / 2 - 85);
    }
  }
  return receptionist;
}

function nextRoom() {
  // go to the next room
  if (haveLife) {
    if (me.row + me.r > width) {
      nextScene = true;
      sceneChange();
      me.row = me.r;
    }
  }
}
