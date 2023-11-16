let mouse = document.querySelector("#mouse");
let ground = document.querySelector("#ground");
let mouseTrap = document.querySelector("#mouseTrap");
let mouseTrap1 = document.querySelector("#mouseTrap1");
let mouseTrap2 = document.querySelector("#mouseTrap2");
let mouseTrap3 = document.querySelector("#mouseTrap3");
function keyReleased() {
  if(keyCode == 13) {
    mouseTrap.setAttribute("dynamic-body", "mass", 0);
    mouseTrap1.setAttribute("dynamic-body", "mass", 0);
    mouseTrap2.setAttribute("dynamic-body", "mass", 0);
    mouseTrap3.setAttribute("dynamic-body", "mass", 0);
mouseTrap.setAttribute("position", {x: random(-24, 24), y: 0, z: random(-24, 24)});
    mouseTrap1.setAttribute("position", {x: random(-24, 24), y: 0, z: random(-24, 24)});
    mouseTrap2.setAttribute("position", {x: random(-24, 24), y: 0, z: random(-24, 24)});
    mouseTrap3.setAttribute("position", {x: random(-24, 24), y: 0, z: random(-24, 24)});
    setTimeout(() => { 
      console.log('World!');
    mouseTrap.setAttribute("dynamic-body", "mass", 2);
    mouseTrap1.setAttribute("dynamic-body", "mass", 2);
    mouseTrap2.setAttribute("dynamic-body", "mass", 2);
    mouseTrap3.setAttribute("dynamic-body", "mass", 2);
    }, 2000);
    setTimeout(() => {
      mouseTrap.emit("invis", null, false);
      mouseTrap1.emit("invis", null, false);
      mouseTrap2.emit("invis", null, false);
      mouseTrap3.emit("invis", null, false);
    }, 10000);
  }
}
mouse.addEventListener("collide", function (e) {
  console.log('Player has collided with body #' + e.detail.body.id);
});
function draw() {
  if(keyIsPressed && keyCode == UP_ARROW) {
    mouse.setAttribute("rotation", "y", -90);
    mouse.setAttribute("position", {z: mouse.getAttribute("position", "z").z-0.1, x: mouse.getAttribute("position", "x").x});
  }  
    if(keyIsPressed && keyCode == DOWN_ARROW) {
      mouse.setAttribute("rotation", "y", 90);
    mouse.setAttribute("position", {z: mouse.getAttribute("position", "z").z+0.1, x: mouse.getAttribute("position", "x").x});
  }  
  if(keyIsPressed && keyCode == LEFT_ARROW) {
    mouse.setAttribute("position", {x: mouse.getAttribute("position", "x").x-0.1, z: mouse.getAttribute("position", "z").z});
    mouse.setAttribute("rotation", "y", 0);
  }  
  if(keyIsPressed && keyCode == RIGHT_ARROW) {
    mouse.setAttribute("rotation", "y", -180);
    mouse.setAttribute("position", {x: mouse.getAttribute("position", "x").x+0.1, z: mouse.getAttribute("position", "z").z});
  }
}
