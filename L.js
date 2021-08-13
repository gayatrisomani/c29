class L{
    constructor(bodyA, bodyB){
        var lastlink = bodyA.body.bodies.length-2;
        this.C = Matter.Constraint.create({
            bodyA:bodyA.body.bodies[lastlink],
            pointA:{x:0,y:0},
            bodyB:bodyB,
            pointB:{x:0,y:0},
            length:-10,
            stiffness:0.01
          });
     World.add(world,this.C)
    }
}