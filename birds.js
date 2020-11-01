class birds{
    constructor(x,y) {
        var prop= {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        }
        this.bird=Bodies.rectangle(x,y,50,50,prop) ;
        this.width=50;
        this.height=50;
       World.add(world,this.bird) 
    }
    display() {
        var opt =this.bird.position;
        
        opt.x=mouseX;
        opt.y=mouseY;
        var angle = this.bird.angle;
        push();
        translate(opt.x, opt.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height)
        pop();
    }
}