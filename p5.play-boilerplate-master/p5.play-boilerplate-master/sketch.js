var fixedRec, movingRec; 



function setup() {
  var canvas = createCanvas(800,400);
  fixedRec = createSprite(400, 200, 50, 50);
  fixedRec.shapeColor = "blue";
  movingRec = createSprite(400,250,60,60);
  movingRec.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  
  movingRec.x = World.mouseX; 
  movingRec.y = World.mouseY; 
   
  if(movingRec.x - fixedRec.x <= movingRec.width/2 + fixedRec.width/2 && fixedRec.x - movingRec.x <= movingRec.width/2 + fixedRec.width/2 &&
    movingRec.y - fixedRec.y <= movingRec.height/2 + fixedRec.height/2  && fixedRec.y - movingRec.y <= movingRec.height/2 + fixedRec.height/2){
    movingRec.shapeColor = "red";
    fixedRec.shapeColor = "red";
  }
  else{
    fixedRec.shapeColor = "blue";
    movingRec.shapeColor = "blue";  
  }
  drawSprites();
}