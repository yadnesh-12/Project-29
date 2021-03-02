class Box4 {
    constructor(x,y){
        var options={
            isStatic:false,
        }
        this.body= Bodies.rectangle(x,y,30,30,options);
        this.width = 30;
        this.height = 30;
        World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("gray");
      rect(pos.x, pos.y, this.width, this.height);
    }
}