class Dustbin{
    constructor(x,y){
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.angle = 0;
        
        this.bottom = Bodies.rectangle(x,y,this.width,this.thickness,{isStatic:true});
        World.add(world,this.bottom);

        this.left = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,{isStatic:true});
        World.add(world,this.left);

        this.right = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,{isStatic:true});
        World.add (world,this.right);
        Matter.Body.setAngle(this.right,-1*this.angle);
    }

    display(){
        var posB = this.bottom.position;
        var posL = this.left.position;
        var posR = this.right.position;

        push();
        translate(posL.x,posL.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("brown");
        stroke("brown");
        rotate(this.angle);
        rect(0,0,this.thickness,this.height);
        pop();

        push();
        translate(posR.x,posR.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("brown");
        stroke("brown");
        rotate(this.angle*(-1));
        rect(0,0,this.thickness,this.height);
        pop();

        push();
        translate(posB.x,posB.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("brown");
        stroke("brown");
        rect(0,0,this.width,this.thickness);
        pop();
    }

}