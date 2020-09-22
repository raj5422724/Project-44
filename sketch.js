// Variables for Player 1
var Player1;
var Player1_anim_norm,Player1_anim_move_right,Player1_anim_move_left;
var Player1_anim_jump,Player1_anim_crouch;
var Player1_anim_punch,Player1_anim_kick;

// Variables for Player 2
var Player2;
var Player2_anim_norm,Player2_anim_move_right,Player2_anim_move_left;
var Player2_anim_jump,Player2_anim_crouch;
var Player2_anim_punch,Player2_anim_kick;

// Buttons for playing in mobile
var Lbtn,Rbtn,UPbtn,DWbtn;
var UImg,RImg,LImg,DImg;

// Variable for Ground
var invisibleGround;

// Health
var health1;
var health2;

function preload() {

  // Background Image

  BG = loadImage("arena.png");

  // Player 1 Images

  Player1_anim_norm = loadAnimation("Images/Player1/Norm/0.png","Images/Player1/Norm/1.png",
  "Images/Player1/Norm/2.png","Images/Player1/Norm/3.png","Images/Player1/Norm/4.png",
  "Images/Player1/Norm/5.png","Images/Player1/Norm/6.png","Images/Player1/Norm/7.png",
  "Images/Player1/Norm/8.png","Images/Player1/Norm/9.png");

  Player1_anim_move_right = loadAnimation("Images/Player1/Move_right/0.png",
  "Images/Player1/Move_right/1.png","Images/Player1/Move_right/2.png",
  "Images/Player1/Move_right/3.png","Images/Player1/Move_right/4.png",
  "Images/Player1/Move_right/5.png","Images/Player1/Move_right/6.png",
  "Images/Player1/Move_right/7.png","Images/Player1/Move_right/8.png");

  Player1_anim_move_left = loadAnimation("Images/Player1/Move_left/0.png",
  "Images/Player1/Move_left/1.png","Images/Player1/Move_left/2.png",
  "Images/Player1/Move_left/3.png","Images/Player1/Move_left/4.png",
  "Images/Player1/Move_left/5.png","Images/Player1/Move_left/6.png",
  "Images/Player1/Move_left/7.png","Images/Player1/Move_left/8.png");

  Player1_anim_jump = loadAnimation("Images/Player1/Jump/0.png",
  "Images/Player1/Jump/1.png","Images/Player1/Jump/2.png","Images/Player1/Jump/3.png",
  "Images/Player1/Jump/4.png");

  Player1_anim_punch = loadAnimation("Images/Player1/Punch/0.png","Images/Player1/Punch/1.png",
  "Images/Player1/Punch/2.png","Images/Player1/Punch/3.png","Images/Player1/Punch/4.png");

  Player1_anim_kick = loadAnimation("Images/Player1/Kick/0.png","Images/Player1/Kick/1.png",
  "Images/Player1/Kick/2.png","Images/Player1/Kick/3.png","Images/Player1/Kick/4.png",
  "Images/Player1/Kick/5.png");

  Player1_anim_crouch = loadAnimation("Images/Player1/Crouch/0.png","Images/Player1/Crouch/1.png",
  "Images/Player1/Crouch/2.png");

  // Player 2 Images

  Player2_anim_norm = loadAnimation("Images/Player2/Norm/0.png","Images/Player2/Norm/1.png",
  "Images/Player2/Norm/2.png","Images/Player2/Norm/3.png","Images/Player2/Norm/4.png",
  "Images/Player2/Norm/5.png","Images/Player2/Norm/6.png","Images/Player2/Norm/7.png",
  "Images/Player2/Norm/8.png");

  Player2_anim_move_right = loadAnimation("Images/Player2/Move_right/0.png",
  "Images/Player2/Move_right/1.png","Images/Player2/Move_right/2.png",
  "Images/Player2/Move_right/3.png","Images/Player2/Move_right/4.png",
  "Images/Player2/Move_right/5.png","Images/Player2/Move_right/6.png",
  "Images/Player2/Move_right/7.png","Images/Player2/Move_right/8.png");

  Player2_anim_move_left = loadAnimation("Images/Player2/Move_left/0.png",
  "Images/Player2/Move_left/1.png","Images/Player2/Move_left/2.png",
  "Images/Player2/Move_left/2.png","Images/Player2/Move_left/4.png",
  "Images/Player2/Move_left/5.png","Images/Player2/Move_left/6.png",
  "Images/Player2/Move_left/7.png","Images/Player2/Move_left/8.png");

  Player2_anim_jump = loadAnimation("Images/Player2/Jump/0.png",
  "Images/Player2/Jump/1.png","Images/Player2/Jump/2.png","Images/Player2/Jump/3.png",
  "Images/Player2/Jump/4.png");

  Player2_anim_punch = loadAnimation("Images/Player2/Punch/0.png","Images/Player2/Punch/1.png",
  "Images/Player2/Punch/2.png","Images/Player2/Punch/3.png","Images/Player2/Punch/4.png");

  Player2_anim_kick = loadAnimation("Images/Player2/Kick/0.png","Images/Player2/Kick/1.png",
  "Images/Player2/Kick/2.png","Images/Player2/Kick/3.png","Images/Player2/Kick/4.png",
  "Images/Player2/Kick/5.png");

  Player2_anim_crouch = loadAnimation("Images/Player2/Crouch/0.png","Images/Player2/Crouch/1.png",
  "Images/Player2/Crouch/2.png");

  Player2_crouch_still = loadAnimation("Images/Player2/Crouch/2.png");

  // Button images
  UImg = loadImage("Images/BTN/Up.png");
  RImg = loadImage("Images/BTN/Right.png");
  DImg = loadImage("Images/BTN/Down.png");
  LImg = loadImage("Images/BTN/Left.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  frameRate(50);

  health1 = 20;
  health2 = 20;

  // The Ground for making the player stand
  invisibleGround = createSprite(windowWidth/2,windowHeight-40,windowWidth,15);
  invisibleGround.visible = false;

  // Player 1
  Player1 = createSprite(400, windowHeight-40, 50, 50);
  Player1.addAnimation("Normal1",Player1_anim_norm);
  Player1.addAnimation("right1",Player1_anim_move_right);
  Player1.addAnimation("left1",Player1_anim_move_left);
  Player1.addAnimation("jump1",Player1_anim_jump);
  Player1.addAnimation("punch1",Player1_anim_punch);
  Player1.addAnimation("kick1",Player1_anim_kick);
  Player1.addAnimation("crouch1",Player1_anim_crouch);
  Player1.scale = 2;

  // Player 2
  Player2 = createSprite(windowWidth-400, windowHeight-40, 50, 50);
  Player2.addAnimation("Normal2",Player2_anim_norm);
  Player2.addAnimation("right2",Player2_anim_move_right);
  Player2.addAnimation("left2",Player2_anim_move_left);
  Player2.addAnimation("jump2",Player2_anim_jump);
  Player2.addAnimation("punch2",Player2_anim_punch);
  Player2.addAnimation("kick2",Player2_anim_kick);
  Player2.addAnimation("crouch2",Player2_anim_crouch);
  Player2.addAnimation("crouch_still",Player2_crouch_still);
  Player2.scale = 2;

  // Buttons 
  Lbtn = createButton('');
  Lbtn.position(50,windowHeight-150);
  Lbtn.style('width','60px');
  Lbtn.style('height','60px');
  Lbtn.style('background','orangered');
  Lbtn.style('border-radius','20px');
  Lbtn.style('color','yellow');
  Lbtn.style('font-size','20px');

  Rbtn = createButton('');
  Rbtn.position(150,windowHeight-150);
  Rbtn.style('width','60px');
  Rbtn.style('height','60px');
  Rbtn.style('background','orangered');
  Rbtn.style('border-radius','20px');
  Rbtn.style('color','yellow');
  Rbtn.style('font-size','20px');
  
  UPbtn = createButton('');
  UPbtn.position(100,windowHeight-200);
  UPbtn.style('width','60px');
  UPbtn.style('height','60px');
  UPbtn.style('background','orangered');
  UPbtn.style('border-radius','20px');
  UPbtn.style('color','yellow');
  UPbtn.style('font-size','20px');

  DWbtn = createButton('');
  DWbtn.position(100,windowHeight-100);
  DWbtn.style('width','60px');
  DWbtn.style('height','60px');
  DWbtn.style('background','orangered');
  DWbtn.style('border-radius','20px');
  DWbtn.style('color','yellow');
  DWbtn.style('font-size','20px');

  // check box
  select = createSelect();
  select.position(50, 50);
  select.style('width', '125px');
  select.style('height', '40px');
  select.option('ON');
  select.option('OFF');
  select.changed(() => {
    let val = select.value();
    if(val === "ON") {
      Lbtn.show();
      Rbtn.show();
      UPbtn.show();
      DWbtn.show();
    }else {
      Lbtn.hide();
      Rbtn.hide();
      UPbtn.hide();
      DWbtn.hide();
    }
  });
}

function draw() {
  background(BG);  

  // Gravity
  Player1.velocityY += 0.8;
  Player2.velocityY += 0.8;
  
  /* -------------------------------------------------------------------- */

  // Function for right movement of player 1
  if(keyDown("D")){
    Player1.x += 6;
    Player1.changeAnimation("right1",Player1_anim_move_right);
  }else {
    Player1.changeAnimation("Normal1",Player1_anim_norm);
  }

  // Function for left movement of player 1
  if(keyDown("A")){
    Player1.x -= 6;
    Player1.changeAnimation("left1",Player1_anim_move_left);
  }

  // Function for jumping of player 1
  if(keyDown("W") && Player1.y > invisibleGround.y-150) {
    Player1.velocityY = -15;
    Player1.changeAnimation("jump1",Player1_anim_jump);
  }

  // Function for crouching of Player 1
  if(keyDown("S")) {
    Player1.changeAnimation("crouch1",Player1_anim_crouch);
  }

  // Function for punching of player 1
  if(keyDown("R")) {
    Player1.changeAnimation("punch1",Player1_anim_punch);
  }

  // Function for kicking of player 1
  if(keyDown("E")) {
    Player1.changeAnimation("kick1",Player1_anim_kick);
    if(Player1.isTouching(Player2)) {
      health1 -= 0.5;
    } 
  }

/* ---------------------------------------------------------------------- */

  // Function for right movement of player 2
  if(keyDown(RIGHT_ARROW)){
    Player2.x += 6;
    Player2.changeAnimation("right2",Player2_anim_move_right);
  }else {
    Player2.changeAnimation("Normal2",Player2_anim_norm);
  }

  // Function for left movement of player 2
  if(keyDown(LEFT_ARROW)){
    Player2.x -= 6;
    Player2.changeAnimation("left2",Player2_anim_move_left);
  }

  // Function for jumping of Player 2 
  if(keyDown(UP_ARROW) && Player2.y > invisibleGround.y-150) {
    Player2.velocityY = -15;
    Player2.changeAnimation("jump2",Player2_anim_jump);
  }

  // Function for crouching of Player 2 
  if(keyIsDown(DOWN_ARROW) && Player2.y > 477) {
    Player2.changeAnimation("crouch2",Player2_anim_crouch);
    if(Player2.y>518) {
      Player2.changeAnimation("crouch_still",Player2_crouch_still);
    }
    //setTimeout(actualanim,300);
  }

  // Function for punching of Player 2 
  if(keyDown("P")) {
    Player2.changeAnimation("punch2",Player2_anim_punch);
  }

  // Function for kicking of Player 2 
  if(keyDown("O")) {
    Player2.changeAnimation("kick2",Player2_anim_kick);
  }

  /* -------------------------------------------------------------------------------- */

  // collision
  Player1.collide(invisibleGround);
  Player2.collide(invisibleGround);
  Player2.collide(Player1);
  Player1.collide(Player2);
  console.log(Player2.y);
  drawSprites();
}

function actualanim() {
  Player2.changeAnimation("crouch_still",Player2_crouch_still);
}