var wall,car;
var speed,weight;
var Deforation;
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1350, 200, 60, height/2);
  car=createSprite(50,200,50,50)
  wall.shapeColor=(80,80,80);
  




  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500)); 

  car.velocityX=speed;

  Deformation = 0.5*weight*speed*speed/22500
  
 console.log(speed);
 console.log(weight);
}

function draw() {
  
  background("red");
   if(car.isTouching(wall)){
     if(Deformation<100){
     car.shapeColor="green"
     }
     if(Deformation>=100&&Deformation<=180){
     car.shapeColor="yellow"
     }
     if(Deformation>180){
     car.shapeColor="red"
     }
   }
 
  drawSprites();
}