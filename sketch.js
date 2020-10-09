const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,680,800,45);
	trash1 = createSprite(500,620,20,80);
	trash2 = createSprite(700,620,20,80);
    trash3 = createSprite(600,650,180,20);
	paper1 = new Paper(200,200,20);
   

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  drawSprites();
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:30});
	}
}




