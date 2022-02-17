var asteroid, asteroidImg
var gas, gasImg
var space, spaceImg
var rocketship, rocketshipImg



function preload(){
  asteroidImg = loadImage("asteroid.png");
  gasImg = loadImage("gas.png");
  rocketshipImg = loadImage("rocketship.png");
  spaceImg = loadImage("space.jpg");

}

function setup() {
  createCanvas(600,600);
  space.add("space.jpg", spaceImg);
  space = createSprite(300,300);
  space.velocityY = 2;

}

function draw() {
  if(space.y > 400){

    space.y = 300;
    

    }
  

  drawSprites();
  
}



