class Chain{
    constructor(bodyA,bodyB, offsetX, offsetY){

   this.offsetX = offsetX
   this.offsetY = offsetY

var options={

bodyA : bodyA,
bodyB : bodyB,
stiffness : 0.05,
length : 500,
pointB : {x:this.offsetX, y:this.offsetY}

}

this.chain = Constraint.create(options);

World.add(world, this.chain)

    }
 
    display(){


  var point1 = this.chain.bodyA.position
  var point2 = this.chain.bodyB.position

var anchor1x=point1.x
var anchor1y=point1.y

var anchor2x = point2.x+this.offsetX
var anchor2y = point2.y+this.offsetY

  line(anchor1x,anchor1y,anchor2x,anchor2y)

    }

}