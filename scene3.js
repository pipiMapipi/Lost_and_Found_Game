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

  // text

  textAlign(LEFT);
  textFont(regularFont);
  if (me.col < 235) {
    if (me.row >= 55 && me.row <= 145) {
      fill(0, 100);
      rect(15, 150, 170, 40, 3);
      textSize(7);
      fill(255);
      text("I forget to bring my textbook!", 20, 165);
      text("I'll be put in timeout today...", 20, 180);
    } else if (me.row >= width / 2 - 45 && me.row <= width / 2 + 45) {
      fill(0, 100);
      rect(width / 2 - 57, 150, 115, 40, 3);
      textSize(7);
      fill(255);
      text("Why do my erasers", width / 2 - 51, 165);
      text("keep DISAPPEARING?", width / 2 - 51, 180);
    } else if (me.row >= width - 145 && me.row <= width - 55) {
      fill(0, 100);
      rect(width - 183, 150, 165, 40, 3);
      textSize(7);
      fill(255);
      text("I cannot find my glasses...", width - 179, 165);
      text("What? They are over my head?", width - 179, 180);
    }
  } else if (me.col > height - 135) {
    if (me.row >= 155 && me.row <= 245) {
      fill(0, 100);
      rect(120, 245, 165, 40, 3);
      textSize(7);
      fill(255);
      text("Why do I act so stupid today?", 125, 260);
      text("Did I leave my brain at home?", 125, 275);
    } else if (me.row >= width - 245 && me.row <= width - 155) {
      fill(0, 100);
      rect(width - 280, 230, 165, 55, 3);
      textSize(7);
      fill(255);
      text("In Memorial of My Lost Hair:", width - 275, 245);
      text("Alice, Ann, Andy, Ben, Betty,", width - 275, 260);
      text("Cindy, Carl, Daisy, Daniel...", width - 275, 275);
    }
  }
}
