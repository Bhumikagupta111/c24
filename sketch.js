const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2,box3,box4;
var pig,pig1,pig2;
var log1,log2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
   
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    ground = new Ground(600,height,1200,20)
    pig  =new pigs(810,350);
    pig1  =new pigs(810,220);
  
    bird1= new birds(30,200)

    log1 =new logs(810,260,400,PI/2);
    log2 =new logs(810,60,400,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    bird1.display();
pig1.display();
    ground.display();
    pig.display();
    log1.display();
    log2.display();

}