
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);

	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball= Bodies.ball(20,20,10,options)
	World.add (world.bodies)


	Engine.run(engine);
  
}
function keyPressed()

function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  ground= new ground (width/2,650,width, 20);
  leftSide= new ground (1000,500,20,120);
  rightSide= new ground (500,250,20,120);
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.circle.applyForce(circle,20,0.5);
}


}

