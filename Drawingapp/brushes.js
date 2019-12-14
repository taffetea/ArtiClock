//++++++++++BRUSHES+++++++++++

//croyon
function pencilBrush() {

  if ((mouseX > 105) && (mouseX < windowWidth - 40) && (mouseY > 20) && (mouseY < windowHeight - 20)) {
    if (key === 'c') {
      stroke(brushColor);
      strokeWeight(2);

      line(mouseX, mouseY, mouseX + 5, mouseY);
      line(mouseX, mouseY - 2, mouseX + 2, mouseY + 2);
    }
  }
}



//spray brush 
function sprayBrush() {
  var brushSize = 40;
  var redColor = 0;
  var greenColor = 0;
  var blueColor = 0;
  var lastX, lastY;
  //added boundary of white canvas to this parameter
  if ((mouseX > 105) && (mouseX < windowWidth - 40) && (mouseY > 20) && (mouseY < windowHeight - 20)) {
    if (key === 's') {
      for (var i = 0; i < brushSize; i += 1) {
        var thisX = mouseX + random(-i, i);
        var thisY = mouseY + random(-i, i);
        noStroke();
        fill(redColor, greenColor, blueColor, 5);
        beginShape();
        vertex(mouseX, mouseY);
        bezierVertex(lastX, lastY, thisX, thisY, thisX, thisY);
        bezierVertex(mouseX, mouseY, mouseX, mouseY, mouseX, mouseY);
        lastX = thisX;
        lastY = thisY;
        endShape();
      }
    }
  }
}


//eraser brush
function eraserBrush() {
    if ((mouseX > 105) && (mouseX < windowWidth - 40) && (mouseY > 20) && (mouseY < windowHeight - 20)) {
  if (key === 'e') {
    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
  }
}
}


//color change
function colorChange() {
  if ((mouseX > 105) && (mouseX < windowWidth - 40) && (mouseY > 20) && (mouseY < windowHeight - 20)) {
    if (key === 'a') {
      brushColor = color(random(255), random(255), random(255));
    }
  }
}


//clear all
function clearAll () {
if ((mouseX > 30) && (mouseX < 60) && (mouseY > 35) && (mouseY < 65)) {
    if (mouseIsPressed == true) {
      fill(255);
      rect(95, 10, width - 105, height - 20);
    }
  }
}


//pencil
function pencil() {
if ((mouseX > 105) && (mouseX < windowWidth - 40) && (mouseY > 20) && (mouseY < windowHeight - 20)) {
    if (key === 'q') {
      stroke(brushColor);
      strokeWeight(1);
      line(mouseX, mouseY, pmouseX, pmouseY);
    } 
  }
}