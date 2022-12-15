/////////////// Scene 6 ///////////////
function scene6() {
  imageMode(CORNER);
  image(scenes[6], 0, 0);
  // painting
  fill(100);
  rect(30, 40, 200, 100);

  // mouths
  for (let i = 0; i < mouths.length; i++) {
    if (me.col < 265 && me.row > mouths[i].x) {
      mouths[i].display();
      mouths[i].catchDetection();
    }
  }
  // me
  me.display();
  me.checkMovement();
  ticketIcon();
  lifeIcon();
  scarfIcon();

  // eyes
  if (me.col < 265) {
    eye1.display();
  }
  if (me.row > width / 2 + roadWidth) {
    eye2.display();
  }

  // Texts
  for (let i = 0; i < scene6Text.length; i++) {
    fill(255, 0, 0);
    textSize(25);
    if (me.col < 265 && me.row >= 300 + i * 60) {
      text(scene6Text[i], 300 + i * 60, 70 + (i % 2) * 50);
    }
  }

  if (me.row > width) {
    nextScene = true;
    sceneChange();
    me.row = me.r;
  }
}
