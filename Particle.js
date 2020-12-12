class Division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      Matter.Bodies.circle(x, y, radius, [options]);

      Matter.body = Bodies.rectangle(x,y,width,height,options);
      Matter.width = width;
      Matter.height = height;
      World.add(world, Matter.body);
    }
    display(){
      var pos =Matter.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, Matter.width, Matter.height);
    }
  }