var ball1,ball2,ball3,ball4;

function setup() {
  createCanvas(800,400);

  ball1=createSprite(200,200,50,50);
  ball1.shapeColor="green";


  ball2=createSprite(600,200,50,50);
  ball2.shapeColor="red";

  ball3=createSprite(200,100,50,50);
  ball3.shapeColor="blue";


  ball4=createSprite(600,100,50,50);
  ball4.shapeColor="pink";

  //ball1.velocityX=2;
  //ball2.velocityX=-2;
  ball3.velocityX=2;
  ball4.velocityX=-2;

}

function draw() {

  background("yellow");  

  bouncing(ball3,ball4);
  //bouncing(ball1,ball2);

  ball2.x=World.mouseX;
  ball2.y=World.mouseY;

  if(touching(ball1,ball2)){

  ball1.shapeColor="black";
  ball2.shapeColor="black";

  }
else{

  ball1.shapeColor="green";
  ball2.shapeColor="red";
  
}


  drawSprites();
}

