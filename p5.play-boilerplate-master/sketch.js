const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball 








function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  var property={
    isStatic:true
  }
  ball=Bodies.circle(400,200,40,property);
  World.add(world,ball);
}

function draw() {
  Engine.update(engine)
  background(0);  
  ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y,40,40)

}