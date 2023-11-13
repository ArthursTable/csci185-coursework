let x1 = 900;
let y1 = 600;
let x2= 900;
let y2 = 600;
let width = 50;
let speed = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    x1 += speed;
    y1 -= speed;
    x2 -= speed;
    y2 += speed;

    clear();
    noFill();
    circle(x1, y1, width);
    drawGrid(canvasWidth, canvasHeight);
    circle(x2, y2, width);
}
