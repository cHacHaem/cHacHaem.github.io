var face;
var sprX = 50;
var sprY = 50;
var spr2X = 80;
var spr2Y = 80;
alert("Click Screen Before Using Control Keys")
function setup() {
  createCanvas(windowWidth, windowHeight-200)
  //getting video ready:
  face = createCapture(VIDEO)
  face.hide()
  
  }
function draw() {
  background("rgb(0,119,128)")
  
  
  
  
  
  //person:
  
  image(face, sprX-10, sprY-51, 50, 50);
  fill("green")
  rect(sprX, sprY, 30, 50)
  line(sprX-10, sprY+30, sprX, sprY)
  line(sprX+30, sprY, sprX+40, sprY+30)
  // door:
  fill
  rect(windowHeight/2, windowWidth-80, 50, 70)
  
  
  }

function up() {
  sprY = sprY-3
}
function down() {
  sprY = sprY+3
}
function left() {
  sprX = sprX-3
}
function right() {
  sprX = sprX+3
}
//movemeant:
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    sprX = sprX-3
  } else if (keyCode === RIGHT_ARROW) {
    sprX = sprX+3
  } else if (keyCode === DOWN_ARROW) {
    sprY = sprY+3
  } else if (keyCode === UP_ARROW) {
    sprY = sprY-3
  } 
}

function windowResized() {
  createCanvas(windowWidth, windowHeight-200)
}
