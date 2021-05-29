class box {
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:1.0
          
          }
           this.ball = Matter.Bodies.rectangle(x,y,width,height,options)
           Matter.World.add(world,this.ball);
      this.width = width
      this.height = height  

    }
    display() {
        push ()
        translate (this.ball.position.x,this.ball.position.y)
        rotate (this.ball.angle)
      rectMode(CENTER)
      rect(0,0,this.width,this.height)
      pop ()  
    }

}