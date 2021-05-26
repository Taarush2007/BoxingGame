var arena;
var player1;
var player2;
var score1 = 0;
var score2 = 0;
var boxer1_img1, boxer1_img2,boxer1_img3;
var boxer2_img1, boxer2_img2,boxer2_img3;
var gameState = 0;

function preload(){

arena = loadImage("Pictures/boxing ring.jpg");
boxer1_img1 = loadImage("Pictures/redboxer.png");
boxer1_img2 = loadImage("Pictures/redleftbox2.png");
boxer1_img3 = loadImage("Pictures/boxredleft1.png");

boxer2_img1 = loadImage("Pictures/blueboxer2.png");
boxer2_img2 = loadImage("Pictures/bluboxer22.png");
boxer2_img3 = loadImage("Pictures/boblueright1.png");
}



function setup() {
  createCanvas(windowWidth,windowHeight);
 player1 = createSprite(500, 350, 50, 50);
 player1.addImage(boxer1_img1);
 player1.scale = 0.6;
 player2 = createSprite(800, 350, 50, 50);
 player2.scale = 0.6;
 player2.addImage(boxer2_img1);                   
 
 player1.shapeColor = "red";
 
  player2.shapeColor = "blue";
}

function draw() {
  background(arena);
  textSize (30)
  
  fill ("red")
  text("PLAYER 1:"+score1,100,50)

  fill ("BLUE")
  text("PLAYER 2:"+score2,1000,50)

  if(gameState === 0){
    fill("white")
    text("PRESS T TO START",500 ,100)
    if(keyDown ("t") ){
      gameState = 1;
    }
  }

if(gameState === 1){

  player1.addImage(boxer1_img2);
  player1.scale = 0.4;
  player2.addImage(boxer2_img2);
  player2.scale = 0.6;
  if(keyDown("k")){
    player1.addImage(boxer1_img3);
    player1.scale = 0.3;
   
  }


  if(keyDown("h")){
    player2.addImage(boxer2_img3);
    player2.scale = 0.4;
   
  }



  if(keyDown(LEFT_ARROW)){
    player2.x = player2.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    player2.x = player2.x+2;
  }

  if(keyDown("a")){
    player1.x = player1.x-2;
  }

  if(keyDown("d")){
    player1.x = player1.x+2;
  }

  //player1.collide(player2)

if(player1.isTouching(player2) && keyDown("k")){
  score1++;
}

if(player2.isTouching(player1) && keyDown("h")){
  score2++;
}
}

  drawSprites();
}