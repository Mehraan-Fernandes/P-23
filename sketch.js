const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  stick1 = new Stick(400,200,20,500);
  stick2 = new Stick(375,200,20,500);
  stick3 = new Stick(425,200,20,500);
  stick4 = new Stick(450,200,20,500);
  stick5 = new Stick(350,200,20,500);
  stick6 = new Stick(325,200,20,500);
  stick7 = new Stick(300,200,20,500);
  stick8 = new Stick(234,178,300,20);
  stick9 = new Stick(234,125,20,50);
  stick10 = new Stick(515,125,20,50);
  stick11 = new Stick(620,90,60,500);
  stick12 = new Stick(640,35,20,50);
  stick13 = new Stick(665,35,20,50);
  stick14 = new Stick(615,35,20,50);
  stick15 = new Stick(90,90,60,500);
  stick16 = new Stick(135,35,20,50);
  stick17 = new Stick(110,35,20,50);
  stick18 = new Stick(85,35,20,50);
}


function draw() {
  background(0);  
  Engine.update(engine);
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  stick8.display();
  stick9.display();
  stick10.display();
  stick11.display();
  stick12.display();
  stick13.display();
  stick14.display();
  stick15.display();
  stick16.display();
  stick17.display();
  stick18.display();
  drawSprites();
}