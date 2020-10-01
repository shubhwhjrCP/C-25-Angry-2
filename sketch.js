
//commands for engine
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;


//declaring boxes
var box1,box2,box3,box4,box5;
var backgroundImg;

function preload(){

  backgroundImg= loadImage("sprites/bg.png");
}
//declaring ground
var ground;

//declaring pigs
var pig1,pig2;

//declaring logs
var log1,log2,log3,log4;

//declaring birds
var bird1;

function setup() {
  
  //creating canvas
  var canvas=createCanvas(1200,400);

  //creating engine
  engine=Engine.create();
  //adding 
  world=engine.world;
  
  //platform
  ground=new Ground(600,height,1200,20);

  //boxes
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  box3= new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  box5=new Box(810,160,70,70);

  //pigs
  pig1=new Pig(810,350);
  pig2=new Pig(810,220);

  //logs
  log1=new Log(810,260,300,PI/2);
  log2=new Log(810,180,300,PI/2);
  log3=new Log(760,120,150,PI/7);
  log4= new Log(870,120,150,-PI/7);
  
  //birds
  bird1=new Bird(100,100);
 


}

function draw() {
  
  //background
  background(backgroundImg);  
  
  //updating engines
  Engine.update(engine);

  //displaying boxes
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  //displaying grounds
  ground.display();
  pig1.display();
  log1.display();
  log2.display();
  pig2.display();
  log3.display();
  log4.display();

  //displaying birds
  bird1.display();

}