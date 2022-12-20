    
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
  
    
  ellipse(spriteX, spriteY, 20, 20);
    rect(spriteX-15, spriteY+10, 30, 45);
    line(spriteX-15, spriteY+20, spriteX-30, spriteY+10);
    line(spriteX+16, spriteY+20, spriteX+30, spriteY+10);
    if(spriteY ) {
        
    
    }
  
  if(spriteY <= 303 && spriteY >= 135 && spriteX >= 200 && spriteX <= 350 ) {
    fill("rgb(0,255,219)")
    rect(10, 10, 990, 540);
    textSize(80)
    fill("purple")
    text("PJA Library:", 10, 90);
    textSize(40);
    text("book: $6", 10, 150);
    
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

