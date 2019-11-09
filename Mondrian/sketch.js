function setup() {
  createCanvas(500,500);
  strokeWeight(8);
  mySound.setVolume(0.3);
  mySound.loop(-2);
}

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('clockticking3.mp3');
 
}


function draw() {
  
  Mondrian ();
  //background(0);
  let hr = hour();
  let mn = minute();
  let sc = second();

  angleMode(DEGREES);
  translate(189, 189);
  rotate (-90);
  strokeWeight(3);
  stroke(color(255, 255, 255));
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 230, 230, 0, secondAngle);

  //minute angel rotation

  stroke("#455297");
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 210, 210, 0, minuteAngle);

  //hour angel rotation 

  stroke("#EED517");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 190, 190, 0, hourAngle);

  //inside second line movement 

  push();
  rotate(secondAngle);
  stroke('#black');
  line(0, 0, 70, 0);
  pop();

  //inside minute line movement 

  push();
  rotate(minuteAngle);
  stroke("#455297");
  line(0, 0, 60, 0);
  pop();

  //inside hour line movement 

  push();
  rotate(hourAngle);
  stroke("#EED517");
  line(0, 0, 40, 0);
  pop();

  //center point 

  stroke(300);
  point(0, 0);
}

function Mondrian() {
  push();
  stroke(0);
  strokeWeight(6);
  fill("#D43B26");
  rect(60, 60, 260, 260);

  fill("#EED517");
  rect(320, 60, 134, 120);

  fill("#FFF");
  rect(0, 0, 200, 60);

  fill("#FFF");
  rect(200, 0, 120, 60);

  fill("#EED517");
  rect(320, 0, 134, 60);

  fill("#FFF");
  rect(454, 0, 134, 60);

  fill("#FFF");
  rect(0, 60, 60, 120);

  fill("#FFF");
  rect(0, 180, 60, 380);

  fill("#EED517");
  rect(0, 380, 60, 120);

  fill("#FFF");
  rect(320, 180, 68, 140);

  fill("#FFF");
  rect(388, 180, 66, 140);

  fill("#FFF");
  rect(453, 60, 60, 380);

  fill("#D43B26");
  rect(453, 380, 60, 120);

  fill("#455297");
  rect(320, 380, 134, 120);

  fill("black");
  rect(60, 320, 130, 60);

  fill("#FFF");
  rect(190, 320, 130, 60);

  fill("black");
  rect(60, 380, 130, 60);

  fill("#FFF");
  rect(190, 380, 130, 60);

  fill("FFF");
  rect(60, 440, 130, 60);

  fill("black");
  rect(190, 440, 130, 60);

  fill("black")
  rect(500, 0, 500, 500);
  pop();
  
  stroke(255);
}