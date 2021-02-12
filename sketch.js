
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(600,height,1200,90);

paper1 = new Paper(30,150,50,50);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
 console.log(mouseX,mouseY);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.Position,{x:85,y:-85});

	}
}



