/////////////// Scene 7 ///////////////
function scene7() {
  imageMode(CORNER);
  image(scenes[7], 0, 0);

  ticketIcon();
  lifeIcon();
  scarfIcon();

  // Recover?
  if (extraLife) {
    imageMode(CORNER);
    image(s7_overlay, 0, 0);
  }

  for (let i = 0; i < s7Flowers.length; i++) {
    if (i % 2 == 0) {
      s7Flowers[i].display();
    }
  }
  me.display();
  me.checkMovement();

  for (let i = 0; i < s7Flowers.length; i++) {
    if (i % 2 == 1) {
      s7Flowers[i].display();
    }
    s7Flowers[i].move();
    if (evilFlower) {
      flowerAttack[i].hitDetection();
      flowerAttack[i].move();
      flowerAttack[i].animate();
      flowerAttack[i].display();
      push();
      textSize(13);
      fill(255);
      textAlign(CENTER);
      text(
        scene7Text[i],
        s7Flowers[i].row +
          (s7Flowers[i].row - width / 2) / 2 +
          random(-1.5, 1.5),
        s7Flowers[i].col +
          (s7Flowers[i].col - height / 2) / 4.2 +
          5 +
          random(-1, 1)
      );
      pop();
    }
  }

  extraLifeCheck();

  if (evilFlower) {
    fill(0, 80 + random(-10, 20));
    rect(0, 0, width, height);
  }

  if (me.row + me.r > width && evilFlower) {
    nextScene = true;
    sceneChange();
    me.row = me.r;
  }
}

function extraLifeCheck() {
  let Credence = collideRectCircle(
    width / 2 - 60,
    height / 2 - 60,
    120,
    120,
    me.row,
    me.col,
    (me.r + meSpeed) * 2
  );
  if (Credence) {
    if (!extraLife && me.row > height / 2 + 40) {
      imageMode(CENTER);
      image(textFrame[1], width / 2, height / 2 + 50);
      textSize(13);
      fill(0);
      textAlign(CENTER);
      text("CHECKPOINT", width / 2, height / 2 + 56);
    }
  }
  return Credence;
}
