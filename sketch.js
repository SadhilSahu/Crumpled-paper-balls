
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density:1.2,
	}

	ball = Bodies.circle(100,50,20,ball_options);
	World.add(world,ball);


	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,100);
	rightSide = new Ground(1111,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);
  
  
  groundObj.show();
  leftSide.show();
  rightSide.show();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.2});
	}
}



