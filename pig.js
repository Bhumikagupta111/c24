class pigs {
constructor(x,y) {
    var prop= {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.pig=Bodies.rectangle(x,y,50,50,prop) ;
    this.width=50;
    this.height=50;
   World.add(world,this.pig) 
}
display() {
    var opt =this.pig.position;
    var angle = this.pig.angle;
    push();
    translate(opt.x, opt.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    rect(0,0,this.width,this.height)
    pop();
}
} 