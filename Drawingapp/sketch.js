/*
Taffe brush_ER edit 12/7/2019

Notes:ss
keyIsPressed 'c' = crayon
keyIsPressed 's' = spraybrush
keyIsPressed 'e' = eraser
keyIsPressed 'a' = color change for croyon
keyIsPressed 'q' = pencil 

*/
//======SETUP++++++++++++++++


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#F7F5EE'); //cream color
  cursor('cat.jpg')

  frame();

  brushColor = color(75,75,75);
  fill(255);
  noStroke();
  rect(95, 10, width - 105, height - 20)


  //....brush icons---see brush icons.js for code
  
  clearIcon();
  pencilIcon();
  colorIcon();
  eraserIcon();
  clearButton();
  pencilButton();
}

//======DRAW++++++++++++++++

function draw() {

  //....brushes---see brushes.js for code
  pencilBrush();
  sprayBrush();
  pencil();
  eraserBrush();
  sprayIcon();
  colorChange();
  clearAll();
  
  
  //clearall();

}

//+++++++++++++++++++++

function frame() {
  noFill();
  strokeWeight(0.5);
  rect(0, 0, windowWidth, windowHeight);
  rect(5, 5, windowWidth - 10, windowHeight - 10);
  strokeWeight(0.5);
  fill("#AE8686")
}

