function scene0() {
  imageMode(CORNER);
  image(scenes[0], 0, 0);
  fill(0);
  textSize(13);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Press WASD to move", width / 2, 350);
  text("Press ENTER to interact", width / 2, 380);

  // triangle(
  //   width / 2,
  //   10 + sin(millis() / 100) * 10,
  //   width / 2 - 10,
  //   20 + sin(millis() / 100) * 10,
  //   width / 2 + 10,
  //   20 + sin(millis() / 100) * 10
  // );
  me.display();
  me.checkMovement();
  sceneChange();
  if (me.col <= me.r) {
    nextScene = true;
    me.col = height - me.r;
  }
}
