//+++++++++++++++++++++BRUSH ICONS+++++++++++++++++++++++++++++++

function clearIcon() {
  fill('#DFB0B8');
  noStroke();
  rect(15, 100, 65, 40, 20, 15, 10, 5);
  fill('#A26771');
  textSize(12);
  strokeWeight(2)
  textFont('ZCOOL KuaiLe');
  text("ERASOR", 21.5, 125);
}

function pencilIcon() {
  fill('#463B3D');
  rect(20, 170, 11, 35, 30);
  fill('#574A4C');
  rect(31, 170, 11, 35, 30);
  fill('#756467');
  rect(42, 170, 11, 35, 30);
  fill('#897679');
  rect(53, 170, 11, 35, 30);
  fill('#9A9497');
  rect(64, 170, 11, 35, 30);
  fill('#FCF2F7');
  textSize(11);
  strokeWeight(2)
  textFont('ZCOOL KuaiLe');
  text("CRAYON", 24, 191);
}

function colorIcon() {
  beginShape();
  fill('#F5CA89');
  noStroke();
  ellipse(48, 255, 55, 45);
  fill('#F7F5EE')
  ellipse(55, 259, 13, 10);
  fill('#F7F5EE')
  ellipse(60, 277, 25, 15);
  fill('#72A665')
  ellipse(32, 259, 12, 10);
  fill('#9CB5D5')
  ellipse(36, 246, 12, 10);
  fill('#EF8197')
  ellipse(52, 242.5, 12, 10);
  fill('#605576');
  textSize(11);
  strokeWeight(2)
  textFont('ZCOOL KuaiLe');
  text("COLOR", 28, 275);
}

function sprayIcon() {
  fill('#F7F5EE');
  noStroke();
  rect(25,344,50,12);
  beginShape();
  fill('#9ED0E9');
  noStroke();
  vertex(47,298)
  vertex(36,320)
  vertex(58,320)
  endShape();
  ellipse(47,329,27,27);
  fill(255);
  ellipse(55,330,5,8);
  fill('#4484A4');
  textSize(11);
  strokeWeight(2.5)
  textFont('ZCOOL KuaiLe');
  text("SPRAY", 27, 353);
}  
  
  
function eraserIcon() {
  fill("#B2A586");
  textSize(10);
  strokeWeight(0.5)
  textFont('ZCOOL KuaiLe');
  text("Q = Pencil",20,windowHeight - 100);
  text("E = Eraser", 20, windowHeight - 80);
  text("C = Crayon", 20, windowHeight - 60);
  text("S = Spray", 20, windowHeight - 40);
  text("A = Crayon Color", 9, windowHeight -20);
}

function clearButton() {
  fill("#9C805B");
  ellipse(47,51,27,27);
  fill(255);
  ellipse(45,50,25,25);
  fill("#9C805B");
  triangle(50,50,42,46,42,54);
}

function  pencilButton() {
  fill("#A6CBAA");
  stroke("#747A74");
  strokeWeight(0.3);
  beginShape();
  vertex(26,370);
  vertex(60,390);
  vertex(54,399);
  vertex(21,379);
  vertex(20.5,378);
  vertex(20,377);
  vertex(19.5,376.5);
  vertex(19.5,376);
  vertex(19,375);
  vertex(19.5,374);
  vertex(19.5,373);
  vertex(20,373);
  vertex(20.5,372);
  vertex(22,371);
  vertex(23,371);
  vertex(24,370.6);
  vertex(25,370);
  endShape();
  line(22,371,58,393);
  line(20.5,375,55,395.5);
  line(66,400,75,400);
  fill("#E6D0B6");
  strokeWeight(0.4);
  triangle(60,390,66,400,54,399);
  fill('#F7F5EE');
  noStroke();
  rect(25,344,50,12);
  fill('#747A74');
  textSize(11);
  strokeWeight(2.5)
  textFont('ZCOOL KuaiLe');
  text("PENCIL", 27, 410);

}
  
  
  
  