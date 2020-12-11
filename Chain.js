class Chain{
constructor(BodyA,BodyB){
var options={
    bodyA:BodyA,
    bodyB:BodyB,
    stiffness:0.4,
     length:10
}
this.chain=Constraint.create(options)
World.add(world,this.chain);
}

display(){
    var posA=this.chain.bodyA.position;
    var posB=this.chain.bodyB.position;
    line(posA.x,posA.y,posB.x,posB.y);
}
}

