class Stick{
    constructor(x,y,width,height){
        
        var options = {
            'isStatic' : true
        }
        
       this.stick = Bodies.rectangle(x,y,width,height,options)
       this.width=width;
       this.height=height;

       World.add(world,this.stick)
}
display(){
    fill("brown")
    rect(this.stick.position.x,this.stick.position.y,this.width,this.height);
}
}