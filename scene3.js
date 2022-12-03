/////////////// Scene 3 ///////////////
function scene3() {
  imageMode(CORNER);
  image(scenes[3], 0, 0);

  me.display();
  me.checkMovement();
  imageMode(CORNER);
  image(s3_overlay, 0, 0);
  ticketIcon();
  lifeIcon();

  if (me.row + me.r > width) {
    nextScene = true;
    sceneChange();
    me.row = me.r;
  }
}
