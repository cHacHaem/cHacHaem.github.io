    
    let vid;    
    let fer;
let pey;
let tri;
let jac;
let em;
let jay;
function preload() {
  fer = loadImage('IMG_20221216_090446 - Fernando Gallardo.jpg');
  pey = loadImage('Screenshot 2022-12-14 3.05.48 PM - Peyton Smith.png');
  tri = loadImage('Screenshot 2022-12-16 3.06.26 PM - Tristen Dabbs.png');
  jac = loadImage("Screenshot 2022-12-22 2.39.35 PM - Jackson Bivens.png");
  em = loadImage("New Piskel-1.png.png");
  jay = loadImage("Origami - Jhaylee Sumba.png");
  
  
}
  

    
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
  
  
  
  createCanvas(1350, 485);
  
  
}
function mousePressed() {
 
    let fs = fullscreen();
    fullscreen(!fs);
  
}

function draw() {
  



    background(20, 184, 50);
    drawHouse(200, 100, "PJA Library");
  drawHouse(500, 100, "Our Mural");
  drawHouse(800, 100, "Yae publishing");
  drawHouse(1100, 100, "Fernando and Dylan,s name tag and post-it shop")
  drawHouse(1100, 400, "orgimi")
  drawHouse(800, 400, "Custom Games")
  
    
  ellipse(spriteX, spriteY, 20, 20);
    rect(spriteX-15, spriteY+10, 30, 45);
    line(spriteX-15, spriteY+20, spriteX-30, spriteY+10);
    line(spriteX+16, spriteY+20, spriteX+30, spriteY+10);
    if(spriteY ) {
        
    
    }
  text(mouseX, 10, 20)
  text(mouseY, 50, 20)
  if(spriteY <= 203 && spriteY >= 35 && spriteX >= 200 && spriteX <= 350 ) {
    fill("rgb(0,255,219)")
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("purple")
    text("PJA Library:", 10, 90);
    textSize(40);
    text("book: $6", 10, 150);
    text("To buy stuff go to Peyton, Jasmine, or Amy", 10, 420)
    image(pey, 700, 30);
    
  }
  if(spriteY <= 203 && spriteY >= 35 && spriteX >= 500 && spriteX <= 650 ) {
    fill("rgb(101,0,255)")
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("purple")
    text("Our Mural", 10, 90);
    textSize(40);
    image(jay, 850, 30);
    text("We sell origami and drawings. The price depends on how hard the drawing is. The origami also depends on which one you want which is based on frogs. The more rare the frog the more you need to pay.", 10, 150, 980, 540);
    text("To buy stuff go to Jhaylee, Lesley, or Evie", 10, 420)
    
    
  }
  if(spriteY <= 203 && spriteY >= 35 && spriteX >= 800 && spriteX <= 950 ) {
    fill("rgb(255,151,0)")
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("purple")
    text("Yae publishing", 10, 90);
    textSize(40);
    text("Book: $5", 10, 150, 980, 540);
    text("To buy stuff go to Tristen", 10, 420)
    image(tri, 700, 30);
    
  }
  if(spriteY <= 203 && spriteY >= 35 && spriteX >= 1100 && spriteX <= 1250 ) {
    fill("rgb(255,151,0)")
    rect(10, 10, 1500-20, 800-20);
    textSize(60)
    fill("purple")
    text("Fernando and Dylan,s name tag and post-it shop", 10, 90);
    textSize(40);
    text("post-it oragami and name tags: $20", 10, 150, 920, 540);
    image(fer, 700, 120);
    text("To buy stuff go to Fernando, Dylan, or Zayna", 10, 420, 980)
    
    
    
  }
  if(spriteY <= 503 && spriteY >= 335 && spriteX >= 1100 && spriteX <= 1250 ) {
    fill("rgb(255,151,0)")
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("rgb(24,0,128)")
    text("Orgimi", 10, 90);
    textSize(40);
    text("everything depends on how hard the origami  was to make. example: swan: 15$ and somthing really hard: $25", 10, 150, 850, 540);
    text("To buy stuff go to Jordan, Jackson, or Elias", 10, 420, 980)
    image(jac, 800, 1)
    
    
  }
  if(spriteY <= 503 && spriteY >= 335 && spriteX >= 800 && spriteX <= 950 ) {
    fill("rgb(0,255,255)")
    rect(10, 10, 1500-20, 800-20);
    textSize(80)
    fill("rgb(255,43,18)")
    text("Custom Games", 10, 90);
    textSize(40);
    text("Each game is $30", 10, 150, 920, 540);
    text("To buy stuff go to Emory", 10, 420, 980)
    image(em, 579, 12);
    
    
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
