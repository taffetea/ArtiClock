function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  noStroke();
  fill('#DFB0B8')
  rect(0, 0, windowWidth / 2, windowHeight / 2, 0);
  fill('#999C78');
  rect(windowWidth / 4, windowHeight / 4, windowWidth / 12, windowHeight / 16, 0);

  noStroke();
  fill('#456449')
  rect(0, windowHeight / 2, windowWidth / 2, windowHeight / 2, 0);
  fill('#999C78');
  rect(windowWidth / 4, windowHeight * 0.75 - windowHeight / 16, windowWidth / 12, windowHeight / 16, 0);

  noStroke();
  fill('#8A8387')
  rect(windowWidth / 2, 0, windowWidth / 2, windowHeight / 2, 0);
  fill('#999C78');
  rect(windowWidth * 0.75 - windowWidth / 12, windowHeight / 4, windowWidth / 12, windowHeight / 16, 0);

  noStroke();
  fill('#FCFC60')
  rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2, 0);
  fill('#999C78');
  rect(windowWidth * 0.75 - windowWidth / 12, windowHeight * 0.75 - windowHeight / 16, windowWidth / 12, windowHeight / 16, 0);

  if (mouseIsPressed) {
    fill('#999C78')
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 16, 0);
    fill('#999C78')
    rect(windowWidth / 4, windowHeight * 0.75 - windowHeight / 16, windowWidth / 2, windowHeight / 16, 0);
    fill('#999C78')
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 12, windowHeight / 2, 0);
    fill('#999C78')
    rect(windowWidth * 0.75 - windowWidth / 12, windowHeight / 4, windowWidth / 12, windowHeight / 2, 0);

    let hr = hour();
    let mn = minute();
    let sc = second();

    fill(255);
    textSize(90);
    text(hr + ":" + mn + ":" + sc, windowWidth / 2.57, windowHeight / 1.85);

  }

  fill(255);
  textSize(12);
  textFont('ZCOOL KuaiLe');
  text("Click to See", 12, height - 15);

}