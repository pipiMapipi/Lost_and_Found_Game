/////////////// Scene 5 ///////////////
function scene5() {
  imageMode(CORNER);
  image(scenes[5], 0, 0);
  me.display();
  me.checkMovement();

  handsOut();

  imageMode(CORNER);
  image(s5_overlay, 0, 0);

  fill(0, 80 + random(-10, 20));
  rect(0, 0, width, height);

  ticketIcon();
  lifeIcon();

  if (me.col - me.r < 0) {
    nextScene = true;
    sceneChange();
    me.col = height - me.r;
  }
}

function handsOut() {
  for (let i = 0; i < hands.length; i++) {
    if (me.col <= hands[i].col + 30) {
      hands[i].move(1);
      hands[i].wallText();
      hands[i].catchDetection();
    } else {
      hands[i].move(-1);
    }
    push();
    hands[i].display();
    pop();
  }
}
