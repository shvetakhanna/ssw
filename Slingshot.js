class SlingShot{
    constructor(bodyA,pointB)
    {
        var options=
        {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.08
        }
///variable to download the image file
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World .add(world,this.sling);

    }
    fly()
    {
        this.sling.bodyA=null
    }
   display()
    { 
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.sling.bodyA)
        {
        var b=this.sling.bodyA.position;
        var point=this.pointB;
       /// line (b.x,b.y,point.x,point.y)
        }
    }
}
