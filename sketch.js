var castleImage;
var lanternImage;
var lanternPositionX = [];
var lanternPositionY = [];
var lanternVelocityY = [];
var lanternCount = 60;

function preload() {
  // castleImage = loadImage('castle.png');
  lanternImage = loadImage('lantern.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < lanternCount; i++) {
    lanternPositionX[i] = random(width);
    lanternPositionY[i] = random(height);
    lanternVelocityY[i] = random(0.2, 0.7);
  }
}

function draw() {
  imageMode(CENTER);
  background(0);
  // image(castleImage, width/2, height/2, width, height);

  for (var i = 0; i < lanternCount; i++) {
    image(lanternImage, lanternPositionX[i], lanternPositionY[i], 80, 80);
    lanternPositionY[i] -= lanternVelocityY[i];
    if (lanternPositionY[i] < -40) {
      lanternPositionX[i] = random(width);
      lanternPositionY[i] = height + 40;
    }
  }
}