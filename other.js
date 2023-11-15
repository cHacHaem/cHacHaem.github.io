let mouse = document.querySelector("#mouse");
let ground = document.querySelector("#ground");
let mouseTrap = document.querySelector("#mouseTrap");
let mouseTrap1 = document.querySelector("#mouseTrap1");
let mouseTrap2 = document.querySelector("#mouseTrap2");
let mouseTrap3 = document.querySelector("#mouseTrap3");
console.log("Hello, world!");
function keyReleased() {
  if(keyCode == 13) {
mouseTrap.setAttribute("position", {x: random(-25, 25), y: 0, z: random(-25, 25)});
    mouseTrap1.setAttribute("position", {x: random(-25, 25), y: 0, z: random(-25, 25)});
    mouseTrap2.setAttribute("position", {x: random(-25, 25), y: 0, z: random(-25, 25)});
    mouseTrap3.setAttribute("position", {x: random(-25, 25), y: 0, z: random(-25, 25)});
  }
}
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
