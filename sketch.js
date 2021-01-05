
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone, ground, launcher;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var world, boy;


function preload(){
	boy = loadImage("boy.png");	
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,30); 

	mango1 = new Mango(1100,100,30);
    mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1100,160,35);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);
	mango11 = new Mango(1080,40,40);
	mango12 = new Mango(900,160,40);
	mango13 = new Mango(820,200,40);
	mango14 = new Mango(750,280,40);
	mango15 = new Mango(650,300,40);
	mango16 = new Mango(700,230,40);
	mango17 = new Mango(500,180,30);
	mango18 = new Mango(600,150,40);
	mango19 = new Mango(800,50,40);
	mango20 = new Mango(700,90,40);
	
	
	tree = new Tree(1000,350);
	ground = new Ground(width/2, 870 ,width, 20);
	launcher = new Launcher(stone.body,{x:235,y:420})


	Engine.run(engine);
	
  
}


function draw() {
	background("skyblue");
	Engine.update(engine);
	textSize(20);
	fill("purple");
	text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200, 340, 200, 300);

	launcher.display();
	
	tree.display();

	stone.display();
  
	ground.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango6.display();
    mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	mango15.display();
	mango16.display();
	mango17.display();
	mango18.display();
	mango19.display();
	mango20.display();

	

	detectollision(stone, mango1);
	detectollision(stone, mango2);
	detectollision(stone, mango3);
	detectollision(stone, mango4);
	detectollision(stone, mango5);
	detectollision(stone, mango6);
	detectollision(stone, mango7);
	detectollision(stone, mango8);
	detectollision(stone, mango9);
	detectollision(stone, mango10);
	detectollision(stone, mango11);
	detectollision(stone, mango12);
	detectollision(stone, mango13);
	detectollision(stone, mango14);
	detectollision(stone, mango15);
	detectollision(stone, mango16);
	detectollision(stone, mango17);
	detectollision(stone, mango18);
	detectollision(stone, mango19);
	detectollision(stone, mango20);
	

  }
  
  function mouseDragged(){
	  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
  }
  
  function mouseReleased(){
	  launcher.fly();  
  }
  
  function keyPressed() {
	  if (keyCode === 32) {
	     Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	     launcher.attach(stone.body);
	    }
	}
  
	function detectollision(lstone,lmango){
	  mangoBodyPosition = lmango.body.position
	  stoneBodyPosition = lstone.body.position
  
	  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if (distance<=lmango.r+lstone.r){

	 Matter.Body.setStatic(lmango.body, false);
   } 
}


