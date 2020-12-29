
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
	 roof = new Roof(680, 100, 600, 15)
	 diameter = 50
	 
	 bob = new Bob(480, 412, 40);
	 chain1 = new Chain(bob.body, roof.body, -diameter*3.6, 0)
	 bob2 = new Bob(680, 402, 40)
	 chain2 = new Chain(bob2.body, roof.body, -diameter*2, 0)
	 bob3 = new Bob(765, 403, 40);
	 chain3 = new Chain(bob3.body, roof.body, -diameter*0.5, 0)
	 bob4 = new Bob(870,390, 40);
	 chain4 = new Chain(bob4.body, roof.body, -diameter*-1, 0)
	 bob5 = new Bob(880, 415, 40);
	 chain5 = new Chain(bob5.body, roof.body, -diameter*-2.5, 0)
	
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
function mouseDragged(){
	Body.setPosition(bob.body, {x:mouseX, y:mouseY})
	}
	
	function mouseReleased(){
	chain1.fly()
	}

	
