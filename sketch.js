    
    var spriteY = 200;
var spriteX = 400;
var drawHouse = function(x, y, name) {
    fill(0, 4, 255);
    rect(x, y, 150, 100);
    triangle(x, y, x+75, y-65, x+150, y);
    
    fill(47, 255, 0);
    textSize(20);
    text(name, x, y+2, 150, 109);
    
};
function setup() {
  createCanvas(1000, 550);
}

function draw() {
  



    background(20, 184, 50);
    drawHouse(200, 200, "PJA Library");
  drawHouse(500, 200, "Our Mural");
  drawHouse(800, 200, "Yae publishing");
  
    
  ellipse(spriteX, spriteY, 20, 20);
    rect(spriteX-15, spriteY+10, 30, 45);
    line(spriteX-15, spriteY+20, spriteX-30, spriteY+10);
    line(spriteX+16, spriteY+20, spriteX+30, spriteY+10);
    if(spriteY ) {
        
    
    }
  text(mouseX, 10, 20)
  text(mouseY, 50, 20)
  if(spriteY <= 303 && spriteY >= 135 && spriteX >= 200 && spriteX <= 350 ) {
    fill("rgb(0,255,219)")
    rect(10, 10, 990, 540);
    textSize(80)
    fill("purple")
    text("PJA Library:", 10, 90);
    textSize(40);
    text("book: $6", 10, 150);
    text("To buy stuff go to Peyton, Jasmine, or Amy", 10, 420)
    
  }
  if(spriteY <= 303 && spriteY >= 135 && spriteX >= 500 && spriteX <= 650 ) {
    fill("rgb(101,0,255)")
    rect(10, 10, 990, 540);
    textSize(80)
    fill("purple")
    text("Our Mural", 10, 90);
    textSize(40);
    text("We sell origami and drawings. The price depends on how hard the drawing is. The origami also depends on which one you want which is based on frogs. The more rare the frog the more you need to pay.", 10, 150, 980, 540);
    text("To buy stuff go to Jhaylee, Lesley, or Evie", 10, 420)
    
  }
  if(spriteY <= 303 && spriteY >= 135 && spriteX >= 800 && spriteX <= 950 ) {
    fill("rgb(255,151,0)")
    rect(10, 10, 990, 540);
    textSize(80)
    fill("purple")
    text("Our Mural", 10, 90);
    textSize(40);
    text("", 10, 150, 980, 540);
    text("To buy stuff go to Tristen", 10, 420)
    
  }
    
    if(keyIsPressed) {
        
        //down
        if(keyCode === 40) {
            spriteY = spriteY+1;   
        }
        // left
        if(keyCode === 37) {
            spriteX = spriteX-1;   
        }
        // right
        if(keyCode === 39) {
            spriteX = spriteX+1;   
        }
        //up
        if(keyCode === 38) {
            spriteY = spriteY-1;   
        }
        
    
    
  
    
    
  }
    







    
}

