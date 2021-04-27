class Bob{

constructor(x,y){

var options={

restitution : 0.5,
density :1.2

}

this.body = Bodies.circle(x,y,30,options)

this.radius = 30

World.add(world,this.body)
}

display(){

var pos = this.body.position
push()

// for color
fill (117,119,138)

ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius,this.radius)

pop()
}
}
//117,119,138