
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine;
var world;
var groundObj;


function preload() {

}

function setup() {
	createCanvas(900, 600);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(20, 20, 10, ball_options);
	World.add(world,ball);


	Engine.run(engine);
// function setup is used for creating the objects
	groundObj = new Ground (450,600, 900,20);
leftSide = new Ground (550,500, 20,180 );
rightSide = new Ground (750,500, 20,180 );
}

//function draw is used for drawing the objects on the screen
function draw() {
	rectMode(CENTER);
	background(0);

	groundObj.display();
	leftSide.display();
	rightSide.display();
	fill("yellow");
	
	ellipse(ball.x,ball.y,10,10);	
	
	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Circle.applyForce(ball, 20, 0.5);
	}


}

