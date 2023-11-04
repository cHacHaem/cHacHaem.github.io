    ob1.setAttribute("position", {x: random(-2, 2), y: 12, z: -5})
    ob2.setAttribute("dynamic-body", "mass", 0)
    ob2.setAttribute("position", {x: random(-2, 2), y: 12, z: -7}) 
      score = 0
    gameOver = false
    } else {
      ob1.setAttribute("dynamic-body", "mass", 2)
    }
    ob1.setAttribute("dynamic-body", "mass", 0)
    ob1.setAttribute("position", {x: random(-2, 2), y: 12, z: -5})
    ob2.setAttribute("dynamic-body", "mass", 0)
    ob2.setAttribute("position", {x: random(-2, 2), y: 12, z: -7})
    print("r")
  }
  if(ob1.getAttribute("position", "z").z > 5) {
    ob1.setAttribute("dynamic-body", "mass", 0)
    ob1.setAttribute("position", {x: random(-2, 2), y: 12, z: -5})
    print("bye")
    ob2.setAttribute("dynamic-body", "mass", 2)
    score++
    scoreText.setAttribute("text", "value", "score: " + score)
  }
  if(ob2.getAttribute("position", "z").z > 5) {
    ob2.setAttribute("dynamic-body", "mass", 0)
    ob2.setAttribute("position", {x: random(-2, 2), y: 12, z: -7})
    print("bye")
    ob1.setAttribute("dynamic-body", "mass", 2)
     score++
    scoreText.setAttribute("text", "value", "score: " + score)
  }
  if(keyIsPressed && keyCode == LEFT_ARROW && player.getAttribute("position", "X").x > -2 || mouseIsPressed && mouseX < width/2 && player.getAttribute("position", "X").x > -2) {
    player.setAttribute("position", {x: player.getAttribute("position", "X").x - 0.05, y: 1, z: 0});
  } 
  if(keyIsPressed && keyCode == RIGHT_ARROW && player.getAttribute("position", "X").x < 2 || mouseIsPressed && mouseX > width/2 && player.getAttribute("position", "X").x < 2) {
    player.setAttribute("position", {x: player.getAttribute("position", "X").x + 0.05, y: 1, z: 0});
  }

  background("red");
  if(gameOver) {
    score = 0
  }
}
