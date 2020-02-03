class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/1.png');
        this.sling2 = loadImage('sprites/22.png');
        this.sling3 = loadImage('sprites/33.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image(this.sling1,30,40,150,200);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
           
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
               
           
            
            pop();

            if(pointA.x<70||pointA.y>80)
            {
                image(this.sling2,80,40,140,200);
           
            }
        }
        
        // World.remove(world,this.sling);
    }
    
}