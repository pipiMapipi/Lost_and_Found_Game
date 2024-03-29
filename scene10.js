/////////////// Scene 10///////////////
function scene10() {
  imageMode(CORNER);
  image(scenes[10], 0, 0);

  me.display();
  me.checkMovement();
  ticketIcon();
  lifeIcon();
  scarfIcon();

  attackCountdown++;

  for (let i = 0; i < s10Flowers.length; i++) {
    s10Flowers[i].display();
    s10Flowers[i].move();
    if (attackCountdown > 20) {
      flowerAttack10[i].hitDetection();
      flowerAttack10[i].move();
      flowerAttack10[i].animate();
      flowerAttack10[i].display();
    }
  }

  if (attackCountdown >= 40 && life.now > 0) {
    monster.display();
    monster.move();
    monster.checkMovement();
    monster.kill();
  } else if (attackCountdown < 40) {
    monster.row = width / 2;
    monster.col = monster.r;
  }

  fill(0, 80 + random(-10, 20));
  rect(0, 0, width, height);

  if (me.col > height) {
    nextScene = true;
    sceneChange();
    me.col = me.r;
    attackCountdown = 0;
  }
}
