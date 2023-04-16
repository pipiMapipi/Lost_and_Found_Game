/////////////// Scene 9 (8.2) ///////////////
function scene9() {
  imageMode(CORNER);
  image(scenes[9], 0, 0);

  ticketIcon();
  lifeIcon();
  scarfIcon();

  attackCountdown++;

  monster.display();
  monster.move();

  if (life.now != 0 && attackCountdown >= 30) {
    monster.checkMovement();
    monster.kill();
  }

  me.display();
  me.checkMovement();

  fill(0, 80 + random(-10, 20));
  rect(0, 0, width, height);

  if (me.col > height) {
    nextScene = true;
    sceneChange();
    me.col = me.r;
    attackCountdown = 0;
  }
}
