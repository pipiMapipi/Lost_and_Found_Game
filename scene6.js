/////////////// Scene 6 ///////////////
function scene6() {
  imageMode(CORNER);
  image(scenes[6], 0, 0);

  // mouths
  for (let i = 0; i < mouths.length; i++) {
    if (me.col < 265 && me.row > mouths[i].row) {
      mouths[i].move();
      mouths[i].display();
      mouths[i].mouthCatchDetection();
    }
  }
  // me
  me.display();
  me.checkMovement();

  fill(0, 80 + random(-10, 20));
  rect(0, 0, width, height);

  ticketIcon();
  lifeIcon();
  scarfIcon();

  // eyes
  if (me.col < 265) {
    eye1.move();
    eye1.display();
  }
  if (me.row > width / 2 + roadWidth) {
    eye2.move();
    eye2.display();
  }

  // window
  imageMode(CORNER);
  image(s6_overlay, 0, 0);

  // Texts
  for (let i = 0; i < scene6Text.length; i++) {
    fill(255, 0, 0);
    textSize(22);
    if (me.col < 265 && me.row >= 300 + i * 60) {
      text(
        scene6Text[i],
        270 + i * 60 + random(-1, 1),
        50 + (i % 2) * 40 + random(-1, 1)
      );
    }
  }

  if (me.row > width) {
    nextScene = true;
    sceneChange();
    me.row = me.r;
  }
}
