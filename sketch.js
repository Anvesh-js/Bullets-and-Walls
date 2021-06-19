//creates variables
var bullet,wall,speed,weight,thickness,d;

function setup() {
  //creates a canvas
  createCanvas(1600,400);

  //adds properties to variables
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  //creates a sprite and its properties
  bullet = createSprite(50, 200, 75, 15);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  //creates a sprite and its properties
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  //creates a background
  background("black");  

  //calculates damage
  d=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  
  //changes color of the wall acording to the damage
  if(d<10 && bullet.isTouching(wall)){
    wall.shapeColor="green";
  }
  else if(d>10 && bullet.isTouching(wall)){
    wall.shapeColor="red";
  }

  //stops the bullet when it touches the wall
  if (bullet.isTouching(wall)) {
    bullet.velocityX=0;
  }

  //draws all the sprites
  drawSprites();
}