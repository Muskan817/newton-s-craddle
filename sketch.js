
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var diameter;

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof = new Roof(width/2, 100, 600, 15)
	 diameter = 40

	 bobStartXPosition = width/2;
	 bobStartYPosition = 400;
	 
	 bob = new Bob(bobStartXPosition-diameter*3, bobStartYPosition, diameter);
	 chain1 = new Chain(bob.body, roof.body, -diameter*4, 0)
	 bob2 = new Bob(bobStartXPosition-diameter*1.5, bobStartYPosition, diameter)
	 chain2 = new Chain(bob2.body, roof.body, -diameter*2, 0)
	 bob3 = new Bob(bobStartXPosition, bobStartYPosition, diameter);
	 chain3 = new Chain(bob3.body, roof.body, 0, 0);
	 bob4 = new Bob(bobStartXPosition+diameter*1.5,bobStartYPosition, diameter);
	 chain4 = new Chain(bob4.body, roof.body, diameter*2, 0)
	 bob5 = new Bob(bobStartXPosition+diameter*3, bobStartYPosition, diameter);
	 chain5 = new Chain(bob5.body, roof.body, diameter*4, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');

  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display(); 
  bob5.display();

  

 
 
}

function keypressed(){
	if(keyCode === 38){
	Body.setPosition(bob.body, {x:bobStartXPosition-diameter*6, y:200})
	}
}
	

	
