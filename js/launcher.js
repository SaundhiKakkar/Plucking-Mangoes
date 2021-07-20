class launcher
{
     constructor(bodyA,pointB)
     {
         var option = 
         {
             bodyA:bodyA,pointB:pointB,length:10,stiffness:0.04
         }

         this.launcherObject = Matter.Constraint.create(option) 
         World.add(world,this.launcherObject)
     }

     fly()
     {
         this.launcherObject.bodyA = null;
     }
     attach(bodyA)
     {
        this.launcherObject.bodyA =bodyA
     }

     display()
     {
         if(this.launcherObject.bodyA !== null)
         {
         stroke("black")
         strokeWeight(4)
         line(this.launcherObject.bodyA.position.x,this.launcherObject.bodyA.position.y,
              this.launcherObject.pointB.x,this.launcherObject.pointB.y)
         }
     }
}      
     
   