var movingrect; 
var fixedrect;
var gameObject1;
var gameObject2;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(300, 200, 80, 50);
  gameObject1 = createSprite (100, 100,50,50);
  gameObject2 = createSprite (100, 300,20,20);
  fixedrect.velocityX = -2;
  movingrect.velocityX = 2;
  gameObject1.velocityY = 2;
  gameObject2.velocityY = -2;
}


function draw() {
  background(0,0,0);
  //movingrect.x = World.mouseX  
  //movingrect.y = World.mouseY  
  bounceOff (movingrect, fixedrect);
  bounceOff (gameObject1, gameObject2);
  drawSprites();
}

