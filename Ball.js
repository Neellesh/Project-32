class Ball {
    constructor (x,y,width,height){
       var options = {
       restitution: 0.95,
       density: 0.01 };
 
       this.r = 35;
       this.width = width;
       this.height = height;
      
       this.body = Bodies.circle(x, y, this.r, options);
       World.add(world, this.body); 
    }
 
    display(){
 
       var pos = this.body.position
 
       push();
       ellipseMode(CENTER);
       ellipse(pos.x,pos.y,this.r);
       pop();
    }
 }