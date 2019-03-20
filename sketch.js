let backgroundImage;
let lanternImage;
let lanternCount = 60;
const lanterns = [];


let file = document.getElementById('file');
let result = document.getElementById('result');

if (window.File && window.FileReader && window.FileList && window.Blob) {
  const loadLocalImage = (e) => {
    let fileData = e.target.files[0];
    console.log(fileData);

    if (!fileData.type.match('image.*')) {
      alert('please select image file.');
      return;
    }

    let reader = new FileReader();
    reader.onload = () => {
      let img = document.createElement('img');
      img.src = reader.result;
      result.appendChild(img);
      backgroundImage = loadImage(reader.result);
    };
    reader.readAsDataURL(fileData);
  };
  file.addEventListener('change', loadLocalImage, false);
} else {
  file.style.display = 'none';
  alert('This Browser does not support File API.');
}

class Lantern {
  positionX = 0;
  positionY = 0;
  velocityY = 0;
}

function preload() {
  // castleImage = loadImage('castle.png');
  lanternImage = loadImage('lantern.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < lanternCount; i++) {
    const lantern = new Lantern();
    lantern.positionX = random(width);
    lantern.positionY = random(height);
    lantern.velocityY = random(0.2, 0.7);
    lanterns.push(lantern);
  }
}

function draw() {
  imageMode(CENTER);
  background(0);
  
  if (backgroundImage) {
    image(backgroundImage, width/2, height/2, width, height);
  }

  for (let i = 0; i < lanternCount; i++) {
    image(lanternImage, lanterns[i].positionX, lanterns[i].positionY, 80, 80);
    lanterns[i].positionY -= lanterns[i].velocityY;
    if (lanterns[i].positionY < -40) {
      lanterns[i].positionX = random(width);
      lanterns[i].positionY = height + 40;
    }
  }
}