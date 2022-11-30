function ticketIcon() {
  if (haveTicket) {
    imageMode(CENTER);
    image(itemImage, 35, 365);
    image(ticketImage, 35, 375);
  }
}

function lifeIcon() {
  if (haveLife) {
    if (life.now == 0 && !exit) {
      scene = 15;
    } else if (life.now == 0 && exit) {
      BE = true;
    }
    // fill(255);
    // rect(520, 15, life.total * 6, 15);
    // fill(0, 255, 0);
    let remainLife = map(life.now, 0, 10, 0, life.total * 6);
    // rect(520, 15, remainLife, 15);
    imageMode(CENTER);
    tint(255, 50);
    image(health[9], 565, 27);
    noTint();
    if (life.now != 0) {
      imageMode(CENTER);
      image(health[life.now - 1], 565, 27);
    }
  }
}

function scarfIcon() {
  if (haveScarf) {
    fill(0);
    rect(me.row - me.r, me.col, me.r * 2, 10);
  }
}
