var fixedRect, movingRect;
var r1,r2,r3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 100, 50, 80);
  fixedRect.shapeColor = "red";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "white";
  r1=createSprite(100,100,50,80);
  r1.shapeColor="purple";
  r2=createSprite(300,100,50,80);
  r2.shapeColor="green";
  r3=createSprite(700,100,50,80);
  r3.shapeColor="orange";
}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (hitting(r1,movingRect)){
    movingRect.shapeColor = "purple";
    r1.shapeColor = "purple";
  }
  
  if (hitting(r2,movingRect)){
    movingRect.shapeColor = "green";
    r2.shapeColor = "green";
  }
  
  if (hitting(fixedRect,movingRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
   if (hitting(r3,movingRect)){
    movingRect.shapeColor = "orange";
    r3.shapeColor = "orange";
  }
  
  drawSprites();
}
function hitting(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
  return true;
}
else {
 return false; 
}
}