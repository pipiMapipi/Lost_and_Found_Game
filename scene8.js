/////////////// Scene 8 ///////////////
function scene8() {
  imageMode(CORNER);
  image(scenes[8], 0, 0);

  // Text
  if (me.row > width / 2 - roadWidth / 1.3) {
    approachMonster = true;
  }

  if (!monsterAttack) {
    // Monster Talking
    monsterChoice.move();
    monsterChoice.display();
    if (!approachMonster) {
      if (textOffset == 50) {
        if (textNum == 1) {
          textNum = 2;
        } else if (textNum == 2) {
          textNum = 1;
        }
        textOffset = 0;
      } else {
        textOffset += 1;
      }
      textSize(20);
      textAlign(CENTER);
      fill(255);
      if (textNum == 1) {
        text("IT'S HERE...", width / 2 + roadWidth, 170);
      } else {
        text("IT'S NOT HERE", width / 2 + roadWidth * 1.6, 235);
      }
    } else {
      textSize(20);
      fill(255);
      textAlign(CENTER);
      text("IS IT HERE???", width / 2 + roadWidth * 1.7, 230);
      textAlign(LEFT);
      if (me.col <= height / 2) {
        textSize(20);
        text("YES", width / 2 - roadWidth * 1.3, height / 2);
        textSize(15);
        text("NO", width / 2 - roadWidth * 1.3, height / 2 + 45);
      } else {
        textSize(15);
        text("YES", width / 2 - roadWidth * 1.3, height / 2);
        textSize(20);
        text("NO", width / 2 - roadWidth * 1.3, height / 2 + 50);
      }
    }
  } else {
    imageMode(CORNER);
    image(s8_overlay, 0, 0);
    attack.move();
    attack.display();
    textSize(30);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("YOU LIED!!!", width / 2 + random(-5, 5), 150 + random(-10, 10));
    attackCountdown++;
  }

  me.display();
  me.checkMovement();
  ticketIcon();
  lifeIcon();

  fill(0, 80 + random(-10, 20));
  rect(0, 0, width, height);

  if (attackCountdown == 100) {
    nextScene = true;
    sceneChange();
    me.row = width / 2;
    me.col = height / 2 + roadWidth;
    attackCountdown = 0;
  }
}
