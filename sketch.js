
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin,paper,ground;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(1000,650);
	paper = new Paper(200,450,40);
	ground = new Ground(width/2,670,width,20);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  dustbin.display();
  paper.display();
  ground.display();  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

