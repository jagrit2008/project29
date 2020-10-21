const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  block;


function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    block1=new block(270,260,30,40);
    block2=new block(300,260,30,40);
    block3=new block(330,260,30,40);
    block4=new block(360,260,30,40);
    block5=new block(390,260,30,40);
    block6=new block(420,260,30,40);
    block7=new block(450,260,30,40);
    block8=new block(480,260,30,40);
  

    block9=new block(330,235,30,40);
    block10=new block(360,235,30,40); 
    block11=new block(390,235,30,40);
    block12=new block(420,235,30,40);
    block13=new block(450,235,30,40);
   

    block14=new block(360,195,30,40);
    block15=new block(360,195,30,40);
    block16=new block(390,195,30,40);

    block17=new block(420,235,30,40);
   

    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}