
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
    isStatic:false,
    restitution:0.3,
	friction: 0,
	density:1.2
}


ball=Bodies.circle(200,100,20,ball_options)
ground=new Ground(width/2,670,width,20)
leftside=new Ground(1100,600,20,120)
rightside=new Ground(1350,600,20,120)
	Engine.run(engine);
	
	World.add(world,ball)
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  leftside.show()
  rightside.show()
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



