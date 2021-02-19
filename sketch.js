var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 80, 30);
  movingrect = createSprite(200, 200, 30, 80);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  fixedrect.velocityX = -2;
  movingrect.velocityX = 2;
}

function draw() {
  background(255,255,255);  

  //movingrect.x = mouseX;
  //movingrect.y = mouseY;

  fixedrect.debug = true;
  movingrect.debug = true;

  if(isTouching(movingrect, fixedrect)){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";

  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";

  }

  bounceOff(movingrect, fixedrect);

  drawSprites();
}

