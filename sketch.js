function setup() {
  createCanvas(480,800);
 
  ground = createSprite(240,800,940,20);

  division = createSprite(100,600,10,500);
  division2 = createSprite(160,600,10,500);
  division = createSprite(220,600,10,500);
  division = createSprite(280,600,10,500);
  division = createSprite(340,600,10,500);
  division = createSprite(400,600,10,500);

}
var Particle = [];
var Ground = [];
var Division = [];
var Pinko = [];

var divisionHeight = 300;
for(var k = 0;k <= Width;k = k + 80){
  division.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
}

function draw() {
  background("black");  
  drawSprites();
}