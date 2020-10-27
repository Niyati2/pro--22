const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
function setup() {
	createCanvas(600, 700);
	
	package=createSprite(width/2, 50, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-20, width,50);
	ground.shapeColor=color(0,100,0)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(135,206,235);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y   
  drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    helicopter.x=helicopter.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)

  } else if (keyCode === RIGHT_ARROW) {
    helicopter.x=helicopter.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}
