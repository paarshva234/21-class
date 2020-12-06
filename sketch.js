var fixedRect, movingRect, fixedRect2, fixedRect3, fixedRect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.debug = true;
  fixedRect2 = createSprite(375, 135, 50, 80);
  fixedRect2.debug = true;
  fixedRect3 = createSprite(800, 675, 50, 80);
  fixedRect3.debug = true;
  fixedRect4 = createSprite(1000, 700, 50, 80);
  fixedRect4.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  }
  else {
  movingRect.shapeColor = "orange";
  fixedRect.shapeColor = "orange";
  }
  if (isTouching(movingRect, fixedRect2)){
    movingRect.shapeColor = "blue";
    fixedRect2.shapeColor = "blue";
    }
    else {
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
    }
    if (isTouching(movingRect, fixedRect3)){
      movingRect.shapeColor = "blue";
      fixedRect3.shapeColor = "blue";
      }
      else {
      movingRect.shapeColor = "red";
      fixedRect3.shapeColor = "red";
      }
      if (isTouching(movingRect, fixedRect4)){
        movingRect.shapeColor = "blue";
        fixedRect4.shapeColor = "blue";
        }
        else {
        movingRect.shapeColor = "yellow";
        fixedRect4.shapeColor = "yellow";
        }
 drawSprites();
}
//object1 is the moving rectangle and object2 is all of the fixed ones
function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
return true;
}
else {
return false;
}

}
