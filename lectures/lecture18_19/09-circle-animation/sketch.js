const circleData = [
    {x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: "blue"},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: "teal"},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: "pink"},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: "purple"},
    {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: "violet"},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: "red"}
];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// initialize variables outside of the function:
let x = 0;
let y = 0;
let d = 50;
let speedX = 3;
let speedY = 2;

// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
function draw() {
    // clear();

    let count = 0;
    while (count < circleData.length) {
    fill(circleData[count].color);
    circle(circleData[count].x, circleData[count].y, circleData[count].d);
    if (x < canvasWidth) {
        
    count += 1
}
    }

    drawGrid(canvasWidth, canvasHeight);
}
