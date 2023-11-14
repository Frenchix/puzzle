const { createCanvas, loadImage  } = require("canvas");
const { Image } = require("canvas");
const fs = require("fs");

// Dimensions for the image
const width = 1920;
const height = 1280;

// Instantiate the canvas object
const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");

const imagePosition = {
    w: 400,
    h: 88,
    x: 400,
      // Calculate the Y of the image based on the number of
      // lines in the title.
      y: 100,
  };

var img = new Image;
img.onload = function() {
    context.drawImage(img, 0, 0);
}
img.src = 'gragas.jpeg';

//clipping code
var img1 = new Image;
img1.onload = function() {
    context.drawImage(img1, 0, 0);
}
img1 = 'gragas.jpeg';

//clip
// context.globalCompositeOperation = 'source-in';
// context.drawImage(img1, 0, 0);
// context.drawImage(img, 0, 0);
// context.globalCompositeOperation='source-over';

// Fill the rectangle with purple
context.fillStyle = "#fff";
context.fillRect(0, 0, width, height);

// Write the image to file
// const buffer = canvas.toBuffer("image/png");
// fs.writeFileSync("./image.png", buffer);

loadImage("gragas.jpeg").then((image) => {
    const { w, h, x, y } = imagePosition;
    context.drawImage(image, x, y, w, h);
  
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./image.png", buffer);
  });

