var car, wall;
var weight, speed;

function setup() {
  createCanvas(1370,400);
  speed = random(45,60);
  weight = random(1500,3000);
  car = createSprite(100, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(1300,200,40,height/2);
  wall.shapeColor= "grey";
}

function draw() {
  background(25,25,25); 
  var deform = 0.5*weight*speed*speed/22500;
  console.log(deform);
  if (wall.x - car.x <= car.width/2+wall.width/2) {
    if (deform > 180) {
      car.shapeColor = "red";
    } else if (deform < 80) {
      car.shapeColor = "green";
    } else {
      car.shapeColor = "yellow";
    }
    car.velocityX = 0;
    
  }
  drawSprites();
}