class Ground {
    constructor(x,y,width,height) {
      var option= {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,option);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var opt =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(opt.x, opt.y, this.width, this.height);
    }
  };