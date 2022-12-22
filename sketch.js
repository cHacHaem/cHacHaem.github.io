    
    var spriteY = 400;
var spriteX = 1000;
var drawHouse = function(x, y, name) {
    fill(0, 4, 255);
    rect(x, y, 150, 100);
    triangle(x, y, x+75, y-65, x+150, y);
    
    fill(47, 255, 0);
    textSize(20);
    text(name, x, y+2, 150, 109);
    
};
function setup() {
  createCanvas(1350, 700);
}
function mousePressed() {
 
    let fs = fullscreen();
    fullscreen(!fs);
  
}

function draw() {
  



    background(20, 184, 50);
    drawHouse(200, 200, "PJA Library");
  drawHouse(500, 200, "Our Mural");
  drawHouse(800, 200, "Yae publishing");
  drawHouse(1100, 200, "Fernando and Dylan,s name tag and post-it shop")
  drawHouse(1100, 500, "origami")
  drawHouse(800, 500, "Custom Games")
  
    
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
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("purple")
    text("PJA Library:", 10, 90);
    textSize(40);
    text("book: $6", 10, 150);
    text("To buy stuff go to Peyton, Jasmine, or Amy", 10, 420)
    
  }
  if(spriteY <= 303 && spriteY >= 135 && spriteX >= 500 && spriteX <= 650 ) {
    fill("rgb(101,0,255)")
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("purple")
    text("Our Mural", 10, 90);
    textSize(40);
    text("We sell origami and drawings. The price depends on how hard the drawing is. The origami also depends on which one you want which is based on frogs. The more rare the frog the more you need to pay.", 10, 150, 980, 540);
    text("To buy stuff go to Jhaylee, Lesley, or Evie", 10, 420)
    
  }
  if(spriteY <= 303 && spriteY >= 135 && spriteX >= 800 && spriteX <= 950 ) {
    fill("rgb(255,151,0)")
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("purple")
    text("Yae publishing", 10, 90);
    textSize(40);
    text("", 10, 150, 980, 540);
    text("To buy stuff go to Tristen", 10, 420)
    
  }
  if(spriteY <= 303 && spriteY >= 135 && spriteX >= 1100 && spriteX <= 1250 ) {
    fill("rgb(255,151,0)")
    rect(10, 10, 1500-20, 800-20);
    textSize(70)
    fill("purple")
    text("Fernando and Dylan,s name tag and post-it shop", 10, 90);
    textSize(40);
    text("post-it oragami and name tags: $20", 10, 150, 920, 540);
    text("To buy stuff go to Fernando or Dylan", 10, 420, 980)
    
    
  }
  if(spriteY <= 603 && spriteY >= 435 && spriteX >= 1100 && spriteX <= 1250 ) {
    fill("rgb(255,151,0)")
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("rgb(24,0,128)")
    text("Origami", 10, 90);
    textSize(40);
    text("everything depends on how hard the origami  was to make. example: swan: 15$ and somthing really hard: $25", 10, 150, 920, 540);
    text("To buy stuff go to Jordan, Jackson, or Elias", 10, 420, 980)
    
    
  }
  if(spriteY <= 603 && spriteY >= 435 && spriteX >= 800 && spriteX <= 950 ) {
    fill("rgb(0,255,255)")
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("rgb(255,43,18)")
    text("Custom Games", 10, 90);
    textSize(40);
    text("Each game is $50", 10, 150, 920, 540);
    text("To buy stuff go to Emory", 10, 420, 980)
    
    
  }
    
    if(keyIsPressed) {
        
        //down
        if(keyCode === 40) {
            spriteY = spriteY+3;   
        }
        // left
        if(keyCode === 37) {
            spriteX = spriteX-3;   
        }
        // right
        if(keyCode === 39) {
            spriteX = spriteX+3;   
        }
        //up
        if(keyCode === 38) {
            spriteY = spriteY-3;   
        }
        
    
    
  
    
    
  }
    







    
}

