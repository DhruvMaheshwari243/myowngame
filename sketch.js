const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backGroundImg;
var crane;

function preload() {
   backGroundImg = loadImage("images/background.gif");
}

function setup(){
    var canvas = createCanvas(displayWidth-10,displayHeight-200);
    engine = Engine.create();
    world = engine.world;

    crane = new Crane(displayWidth-200,displayHeight/2 - 50);
}

function draw(){
    background(backGroundImg);
    Engine.update(engine);

   crane.display();
}

function keyPressed(){
    if(keyCode === 37){
     //   Matter.Body.setStatic(crane.body,true);
        crane.body.position.x -= 15;
    }
    if(keyCode === 39){
      //  Matter.Body.setStatic(crane.body,true);
        crane.body.position.x += 15;
    }
}
