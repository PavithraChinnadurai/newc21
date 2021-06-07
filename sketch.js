var a,b,c,d,e,f;
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(100,200,30,30);
  a.shapeColor="red";
  b.shapeColor="red";

  c=createSprite(200,200,30,30);
  c.shapeColor="red";
  d=createSprite(250,200,30,30);
  d.shapeColor="red";
  e=createSprite(300,200,30,30);
  e.shapeColor="red";
  f=createSprite(350,200,30,30);
  f.shapeColor="red";

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
} 

function draw() {
  background(255,255,255);  
  a.x=World.mouseX;
  a.y=World.mouseY;
 // console.log(a.y-b.y);
  if(isTouching(a,e)){
    a.shapeColor="blue";
    e.shapeColor="blue";
  }
  else{
    a.shapeColor="red";
    e.shapeColor="red";
  }
  
bounceOff(movingRect,fixedRect);

    drawSprites();
}