class logs{
    constructor(x, y, height,angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.log = Bodies.rectangle(x, y,20, height, options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.log,angle)
        World.add(world, this.log);
      }
      display(){
        var opt =this.log.position;
        var angle = this.log.angle;
        push();
        translate(opt.x, opt.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
    
