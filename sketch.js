  fill("green")
  rect(sprX, sprY, 30, 50)
  line(sprX-10, sprY+30, sprX, sprY)
  line(sprX+30, sprY, sprX+40, sprY+30)
  fill("rgb(0,30,128)")
  rect(spr2X, spr2Y, 30, 50)
  line(spr2X-10, spr2Y+30, spr2X, spr2Y)
  line(spr2X+30, spr2Y, spr2X+40, spr2Y+30)
  
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
  createCanvas(windowWidth, windowHeight-65)
}
