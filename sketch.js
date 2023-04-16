let scene = 1;
let nextScene = false;
let me;
let monster;
const meSpeed = 3;

let regularFont;
let boldFont;
let textFrame = [];

// Main Character
let characterDown = [];
let characterUp = [];
let characterLeft = [];
let characterRight = [];

let walls = [];
let scenes = [];
const roadWidth = 100;
let haveTicket = false;
let haveLife = false;
let haveScarf = false;

let life = { now: 10, total: 10 };
let health = [];

// scene 1 default
let showFigure = false;
let mystery = [];
let mysteriousGuy;
let ticketImage;
let itemImage;

// scene 2 default
let frontdesk = [];
let frontdeskGuy;
let computer;

// scene 3 default
let s3_overlay;

// scene 4 default
let lightOffset = 0;
let reality;
let changeTrigger = false;
let realityTime = 280;
let s4_overlay;

// scene 5 default
let hands = [];
let handsSprite = [];
let s5_overlay;

// scene 6 default
let s6_overlay;
let eye1;
let eye2;
let mouths = [];
let scene6Text = ["HOW", "DARE", "YOU", "LOSE", "IT"];
let eyesSprite = [];
let mouthsSprite = [];

// scene 7 default
let s7_overlay;
let extraLife = false;
let evilFlower = false;
let flowersSprite1 = [];
let flowersSprite2 = [];
let s7Flowers = [];
let flowerAttack = [];
let bulletsSprite = [];
let scene7Text = [
  "CARELESS!",
  "NO WAY!",
  "IRRESPONSIBLE!",
  "JUST KIDDING!",
  "YOU?",
  "IMPOSSIBLE!",
];

// scene 8 default
let approachMonster = false;
let monsterAttack = false;
let textOffset = 10;
let textNum = 1;
let attackCountdown = 0;
let choiceSprite = [];
let monsterChoice;
let attackSprite = [];
let attack;
let s8_overlay;

// scene 9 default
let monsterChase;
let monsterSprite = [];

// scene 10 default
let s10Flowers = [];
let flowerAttack10 = [];

// scene 11 default
let hands11 = [];
let pick = false;
let pickOffset = 0;
let mouths11 = [];

// scene 12 default
let HE = false;
let BE = false;
let fadeOffset = 0;
let exit = false;

function preload() {
  // load walls
  for (let i = 0; i <= 13; i++) {
    walls[i] = loadImage("assets/walls/wall" + i + ".png");
  }

  // load maps
  for (let i = 0; i <= 10; i++) {
    scenes[i] = loadImage("assets/scenes/scene" + i + ".png");
  }

  // load scene 4 V2
  reality = loadImage("assets/scenes/scene4_2.png");

  // load main character
  for (let i = 0; i <= 3; i++) {
    characterDown[i] = loadImage(
      "assets/mainCharacter/down_0" + (i + 1) + ".png"
    );
  }
  for (let i = 0; i <= 3; i++) {
    characterLeft[i] = loadImage(
      "assets/mainCharacter/left_0" + (i + 1) + ".png"
    );
  }
  for (let i = 0; i <= 3; i++) {
    characterRight[i] = loadImage(
      "assets/mainCharacter/right_0" + (i + 1) + ".png"
    );
  }
  for (let i = 0; i <= 3; i++) {
    characterUp[i] = loadImage("assets/mainCharacter/up_0" + (i + 1) + ".png");
  }

  // load mysterious person
  for (let i = 0; i <= 3; i++) {
    mystery[i] = loadImage("assets/mystery/mystery_" + i + ".png");
  }

  // load ticket icon
  ticketImage = loadImage("assets/icons/ticket.png");
  itemImage = loadImage("assets/icons/item.png");

  // load health progress
  for (let i = 0; i <= 9; i++) {
    health[i] = loadImage("assets/icons/health_0" + (9 - i) + ".png");
  }

  // load font
  // https://www.dafont.com/dogica.font
  regularFont = loadFont("assets/font/dogicapixel.otf");
  boldFont = loadFont("assets/font/dogicapixelbold.otf");

  // load text frames
  for (let i = 0; i <= 1; i++) {
    textFrame[i] = loadImage("assets/textFrame/frame_0" + (i + 1) + ".png");
  }

  // scene 2
  // load frontdesk
  for (let i = 0; i <= 3; i++) {
    frontdesk[i] = loadImage("assets/frontdesk/frontdesk_" + i + ".png");
  }
  // load computer
  computer = loadImage("assets/overlay/counterC.png");

  // scene 3
  // overlay
  s3_overlay = loadImage("assets/overlay/s3_overlay.png");

  // scene 4
  // overlay
  s4_overlay = loadImage("assets/overlay/s4_overlay.png");

  // scene 5
  // hands
  for (let i = 0; i <= 7; i++) {
    handsSprite[i] = loadImage("assets/hands/hands_" + i + ".png");
  }
  // overlay
  s5_overlay = loadImage("assets/overlay/s5_overlay.png");

  // scene 6
  // eyes
  for (let i = 0; i <= 41; i++) {
    eyesSprite[i] = loadImage("assets/eyes/eye_" + i + ".png");
  }
  // mouths
  for (let i = 0; i <= 6; i++) {
    mouthsSprite[i] = loadImage("assets/mouths/mouths_" + i + ".png");
  }
  // overlay
  s6_overlay = loadImage("assets/overlay/s6_overlay.png");

  // scene 7
  // flowers
  for (let i = 0; i <= 7; i++) {
    flowersSprite1[i] = loadImage("assets/flowers1/flower_" + i + ".png");
  }
  for (let i = 0; i <= 7; i++) {
    flowersSprite2[i] = loadImage("assets/flowers2/flower_" + i + ".png");
  }
  for (let i = 0; i <= 6; i++) {
    bulletsSprite[i] = loadImage("assets/bullets/bullet_" + i + ".png");
  }
  // overlay
  s7_overlay = loadImage("assets/overlay/s7_overlay.png");

  //scene8
  // choice
  for (let i = 0; i <= 9; i++) {
    choiceSprite[i] = loadImage("assets/choice/choice_0" + i + ".png");
  }
  // attack
  for (let i = 0; i <= 22; i++) {
    attackSprite[i] = loadImage("assets/attack/angry_" + i + ".png");
  }
  // overlay
  s8_overlay = loadImage("assets/overlay/s8_overlay.png");

  //scene9
  // monster
  for (let i = 0; i <= 3; i++) {
    monsterSprite[i] = loadImage("assets/monster/monster_" + i + ".png");
  }
}

function setup() {
  noSmooth();
  createCanvas(600, 400);
  me = new Me(width / 2, height / 2 + 20, 15);

  textFont(boldFont);

  // scene 1 mysterious figure
  mysteriousGuy = new Sprites(mystery, 495, 308, 0.08);

  // scene 2 front desk
  frontdeskGuy = new Sprites(frontdesk, width / 2, height / 2 - 45, 0.04);

  // scene 5 hands
  hands[0] = new Hand(handsSprite, 370, 250, 0.13, 1);
  hands[1] = new Hand(handsSprite, 230, 150, 0.12, -1);
  hands[2] = new Hand(handsSprite, 370, 50, 0.15, 1);

  // scene 6 eyes
  eye1 = new Sprites(eyesSprite, 140, 58.35, 0.17);
  eye2 = new Sprites(eyesSprite, 490, 355, 0.13);

  // scene 6 mouths
  mouths[0] = new Sprites(mouthsSprite, 260, 235, 0.3);
  mouths[1] = new Sprites(mouthsSprite, 450, 210, 0.34);

  // scene 7 flowers
  s7Flowers[0] = new Flower(flowersSprite1, flowersSprite2, 155, 165, 0.13);
  s7Flowers[1] = new Flower(flowersSprite1, flowersSprite2, 155, 265, 0.15);
  s7Flowers[2] = new Flower(
    flowersSprite1,
    flowersSprite2,
    width / 2,
    height / 2 - 150,
    0.14
  );
  s7Flowers[3] = new Flower(
    flowersSprite1,
    flowersSprite2,
    width / 2,
    height / 2 + 150,
    0.14
  );
  s7Flowers[4] = new Flower(flowersSprite1, flowersSprite2, 445, 165, 0.15);
  s7Flowers[5] = new Flower(flowersSprite1, flowersSprite2, 445, 265, 0.13);
  for (let i = 0; i < s7Flowers.length; i++) {
    flowerAttack[i] = new FlowerBullet(s7Flowers[i], bulletsSprite);
  }

  // scene 8 choice
  monsterChoice = new Sprites(choiceSprite, width / 2 + 10, 205, 0.22);
  attack = new Sprites(attackSprite, width / 2 + 15, 210, 0.22);

  // scene 9 monster
  monster = new Monster(monsterSprite, width / 2 + 15, 210, me);

  // scene 10 flowers
  s10Flowers[0] = new Flower(flowersSprite1, flowersSprite2, 350, 250, 0.15);
  s10Flowers[1] = new Flower(flowersSprite1, flowersSprite2, 250, 150, 0.15);
  s10Flowers[2] = new Flower(flowersSprite1, flowersSprite2, 350, 50, 0.15);
  s10Flowers[3] = new Flower(flowersSprite1, flowersSprite2, 250, 300, 0.15);
  for (let i = 0; i < s10Flowers.length; i++) {
    flowerAttack10[i] = new FlowerBullet(s10Flowers[i], bulletsSprite);
  }

  // scene 11 hands
  hands11[0] = new Hand(handsSprite, 550, 185, 0.13, 1);
  hands11[1] = new Hand(handsSprite, 250, 320, 0.12, -1);
  // scene 11 mouths
  mouths11[0] = new Mouth(width / 2 - 150, height / 2 - 40);
  mouths11[1] = new Mouth(width / 2 + 40, height / 2 - 10);
}

function draw() {
  noStroke();
  switch (scene) {
    case 0:
      scene0();
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
    case 4:
      scene4();
      break;
    case 5:
      scene5();
      break;
    case 6:
      scene6();
      break;
    case 7:
      scene7();
      break;
    case 8:
      scene8();
      break;
    case 9:
      scene9();
      break;
    case 10:
      scene10();
      break;
    case 11:
      scene11();
      break;
    case 12:
      scene12();
      break;
    case 13:
      scene13();
      break;
    case 14:
      scene14();
      break;
    case 15:
      scene15();
      break;
  }
}

function sceneChange() {
  if (nextScene) {
    scene++;
    nextScene = false;
  }
}

function isWall(scene, row, col) {
  const color = walls[scene].get(row, col);
  return color[0] === 255; // check if the pixel is red
}

function keyPressed() {
  if (scene == 1 && getTicket()) {
    if (keyCode === 13) {
      haveTicket = true;
    }
  } else if (scene == 2 && counterCheck()) {
    if (keyCode === 13) {
      haveLife = true;
    }
  } else if (scene == 7 && extraLifeCheck()) {
    if (keyCode === 13) {
      extraLife = true;
      evilFlower = true;
    }
  } else if (scene == 8 && approachMonster) {
    if (keyCode === 13) {
      monsterAttack = true;
    }
  } else if (scene == 12 && haveTicket) {
    if (keyCode === 13) {
      HE = true;
      BE = false;
    }
  } else if (scene == 15) {
    if (keyCode === 13) {
      scene = 0;
    }
  }
}

function mousePressed() {
  let restart = collidePointRect(mouseX, mouseY, width / 2 - 50, 300, 100, 50);
  if ((restart && scene == 13) || scene == 14) {
    scene = 0;

    // reset
    me.row = width / 2;
    me.col = height / 2;
    haveTicket = false;
    haveLife = false;
    haveScarf = false;
    showFigure = false;
    life.now = 10;
    attackCountdown = 0;
    pick = false;
    pickOffset = 0;
    HE = false;
    BE = false;
    exist = false;
    fadeOffset = 0;
    extraLife = false;
    evilFlower = false;
    pick = false;
    approachMonster = false;
    monsterAttack = false;
  }
}

/////////////// BE1 Scene 15 ///////////////
function scene15() {
  background(0);
  textSize(30);
  textAlign(CENTER);
  fill(255, 0, 0);
  text("GAME OVER", width / 2, height / 2);
}
