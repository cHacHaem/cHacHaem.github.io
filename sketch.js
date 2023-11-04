    }
function draw() {
  if(keyIsPressed && keyCode == 82) {
    if(gameOver) {
     ob1Place() 
     ob2Place()
      score = 0
      overText.setAttribute("position", "x", -200)
    gameOver = false  
    } else {
      ob1.setAttribute("dynamic-body", "mass", 2)
      
    }
    print("r")
  }
  if(ob1.getAttribute("position", "z").z > 5) {
    ob1Place()
    print("bye")
    ob2.setAttribute("dynamic-body", "mass", 2)
    score++
    scoreText.setAttribute("text", "value", "score: " + score)
  }
  if(ob2.getAttribute("position", "z").z > 5) {
    ob2Place()
    print("bye")
    ob1.setAttribute("dynamic-body", "mass", 2)
     score++
    scoreText.setAttribute("text", "value", "score: " + score)
  }
  if(keyIsPressed && keyCode == LEFT_ARROW && player.getAttribute("position", "X").x > -gWidth || mouseIsPressed && mouseX < width/2 && player.getAttribute("position", "X").x > -gWidth) {
    player.setAttribute("position", {x: player.getAttribute("position", "X").x - 0.05, y: 1, z: 0});
  } 
  if(keyIsPressed && keyCode == RIGHT_ARROW && player.getAttribute("position", "X").x < gWidth || mouseIsPressed && mouseX > width/2 && player.getAttribute("position", "X").x < gWidth) {
    player.setAttribute("position", {x: player.getAttribute("position", "X").x + 0.05, y: 1, z: 0});
  }

  background("red");
  if(gameOver) {
    score = 0
  }
}
