class Box {
  constructor(x, y, width, height) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
        
    }
    this.ball = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.ball);
  }
  display(){
    var opt =this.ball.position;
    var angle = this.ball.angle;
    push();
    translate(opt.x, opt.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
