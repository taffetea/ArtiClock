function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  mySound.setVolume(0.1);
  mySound.loop(-5);
}

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('windbell.mp3');
 
}

function draw() {
  
  var r = map(mouseY, 0, 242, 241, 240);
  var g = map(mouseY, 0, 240, 238, 242);
  var b = map(mouseY, 0, 223, 225, 228);
  background(r, g, b);
  
//rectangle underlying
  push();
  noStroke();
  rotate(-30);
  fill(95,122,92,95);
  rect(-150,800,1600,350);
  pop();
  
  
//Circles
  fill(246, 241, 82, 120);
  stroke('#978F92');
  strokeWeight(1.5);
  ellipse(windowWidth / 2.2, 150, -mouseY / 2.5);
  //top yellow
  
  fill(95,122,92,95);
  stroke('#464E45');
  strokeWeight(5.5);
  ellipse(500,80,85);
  //topleft green small
  
  stroke('#464E45');
  strokeWeight(5.5);
  var r2 = map(mouseY, 0, 291, 228, 232);
  var g2 = map(mouseY, 0, 85, 75, 95);
  var b2 = map(mouseY, 0, 31, 30, 38);
  fill(r2, g2, b2);
  //red changing color topleft
  ellipse(355,170,100);
  //topleft dark orange 
  
  fill(172, 164, 168, 90);
  stroke('#978F92');
  strokeWeight(1.75);
  ellipse(windowWidth / 2, 250, mouseX / 2.75);
  //center grey

  fill(246, 241, 82, 100);
  stroke('#978F92');
  strokeWeight(1.75);
  ellipse(930, 565, mouseX / 3);
  //bottom yellow
  
  fill('#4E493C');
  noStroke();
  ellipse(1000,580,75);
  //black inside
  
  stroke(0)
  strokeWeight(3.5)
  var r1 = map(mouseY, 0, 219, 220, 232);
  var g1 = map(mouseY, 0, 95, 90, 87);
  var b1 = map(mouseY, 0, 132, 140, 135);
  fill(r1, g1, b1, 70);
  ellipse(1000, 175, mouseY/-3);
  //pink large  
  
  //fill(162,77,77,185);
  stroke(0);
  strokeWeight(2);
  var r3 = map(mouseY, 0, 162, 165,160);
  var g3 = map(mouseY, 0, 70, 68, 70);
  var b3 = map(mouseY, 0, 67, 63, 65);
  fill(r3, g3, b3, 175);
  ellipse(950, 350, 200);
  //red small
  
  fill('#393429')
  noStroke();
  ellipse(1060,400,100)
  //black right
  
  fill(95,122,92,85);
  stroke('#464E45');
  strokeWeight(2.5);
  ellipse(860,195,175);
  //green small
  
  fill(246, 241, 82, 120);
  stroke('#464E45');
  strokeWeight(6);
  ellipse(380,500,mouseY/-2.5);
  //yellow left
  
  fill('#3C382E');
  noStroke();
  ellipse(255,530,65);
  //black small
  
  fill(247,151,5,175);
  stroke('#3C382E');
  strokeWeight(7);
  ellipse(800,275,125);
  //orange small
  
  fill('#3C382E');
  noStroke();
  ellipse(800,275,45);
  //black inside
  
  fill(172, 164, 168, 130);
  stroke('#7A7476');
  strokeWeight(1.85);
  ellipse(1250, 675, mouseX / 3.75);
  //right grey
  
  fill(138,89,148,195);
  stroke('#3C382E');
  strokeWeight(5.75);
  ellipse(105, 425, mouseX / 7.75);
  //left purple
  
  fill('#3C382E');
  noStroke();
  ellipse(200,275,25);
  //black small left
  
  fill(232,107,24,175);
  stroke('#3C382E');
  strokeWeight(1.5);
  ellipse(225,325,30);
  //small orange left
  
  fill(232,107,24,75);
  stroke('#3C382E');
  strokeWeight(1.5);
  ellipse(1225,125,30);
  //small orange right
  
    
  fill('#3C382E');
  noStroke();
  ellipse(1290,175,20);
  //black small right
  
  fill('#F6BC47');
  stroke('#3C382E');
  strokeWeight(1.25);
  ellipse(180,505,37);
  //small light orange left
  
  fill(138,89,148,105);
  stroke('#3C382E');
  strokeWeight(5.75);
  ellipse(1350, 300, mouseX / 9.75);
  //right purple
  
  
//Horizontal Lines  
  strokeWeight(1.25);
  stroke('#544E42')//light stroke
  line(100,85,1380,525);
  strokeWeight(1.15);
  stroke('#544E42')
  line(120,65,1380,525);
  strokeWeight(5.5);
  stroke('#3C382E');//dark stroke
  line(0,125,1800,650)
  strokeWeight(3.5);
  stroke('#3C382E');
  line(300,15,1800,550)
  strokeWeight(3);
  stroke('#3C382E');
  var x = map (mouseX,0,1100,1050,1000);
  line(650,20,x,220)//movable line1
  strokeWeight(1.25);
  stroke('#544E42')//light stroke
  line(70,530,1350,655);
  strokeWeight(1.25);
  stroke('#544E42')
  line(50,560,1400,682);
  strokeWeight(1.45);
  stroke('#373329')
  var y = map (mouseY,0,600,650,600);
  line(20,y,1500,705);
  
  
//Vertical Lines
  strokeWeight(4);
  stroke('#3C382E')
  line(120,30,250,325);
  strokeWeight(5);
  stroke('#3C382E')
  line(180,50,145,355);
  strokeWeight(3.25);
  stroke('#3C382E')
  line(1440,300,1330,475);
  strokeWeight(3.75);
  stroke('#3C382E')
  line(1370,290,1300,455);
  strokeWeight(1.45);
  stroke('#373329')
  line(70,480,190,720);
  strokeWeight(1.45);
  stroke('#373329')
  line(110,485,225,722);
  strokeWeight(1.45);
  stroke('#373329')
  line(145,490,260,725);
  strokeWeight(2.75);
  stroke('#524D41');
  line(440,0,120,730);
  strokeWeight(1.05);
  stroke('#373329');
  line(370,0,420,900);
  strokeWeight(3.25);
  stroke('#3C382E')
  line(570,0,435,900);
  strokeWeight(1.05);
  stroke('#373329');
  line(860,0,550,900);
  strokeWeight(1.25);
  stroke('#373329');
  line(800,0,530,900);
  strokeWeight(3.25);
  stroke('#3C382E');
  line(1150,30,750,720);
  strokeWeight(1.5);
  stroke('#373329');
  line(1000,20,1230,600);
  
}