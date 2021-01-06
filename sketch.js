
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var l1,l2,l3,l4
var paper0
var db

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	l1=createSprite(20,675,10000,30)

	//paper0= new  Papper;

	l2=createSprite(725,625,20,100)

	l3=createSprite(600,625,20,100)

	l4=createSprite(670,655,125,20)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  l1.display();
  l2.display();
  l3.display();
  l4.display();
 // paper0.display();
 // l1.display();
 
}



