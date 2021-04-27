class Roof{

constructor(){

var options ={

isStatic : true

}

this.body = Bodies.rectangle(400,17,800,35,options)

this.width = 800
this.height = 35



World.add(world,this.body)
}

display(){

var pos = this.body.position

push()

fill(11,105,99)
//rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)

pop()
}
}
//11,105,99