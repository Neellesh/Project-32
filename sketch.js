const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ball , blower , blowermouth , button;


function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(500,280);

  blower = new Blower(352,385,170,25);

  blowermouth = new Blowermouth(500,350,120,100);

  button = createButton("Click to Blow");
  button.position(width-200,height-100);
  button.class('blowButton');
  button.mousePressed(blow);
  
}

function draw() {
  background(51);  
  
  Engine.update(engine)
  drawSprites();

  

  ball.display();

  blower.display();

  blowermouth.display()
}

function blow(){
  Matter.Body.applyForce(ball.body, { x: 0 , y: 0 } , { x: 0 , y: -0.05 })
}
