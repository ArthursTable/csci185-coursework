const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
// start width = 50, end width = 400
let c = { 
    x: 500,
    w: 50,
    color: "#066F13"
}
const y = canvasWidth / 2
let score = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function createBackground() {
//     fill("darkgray");
//     rect(0, canvasHeight/5, canvasWidth, canvasHeight/5);
// }

function draw() {
    clear();
    frameRate(10);
    if (c.w < 400) {
        fill(c.color);
        circle(c.x, 400, c.w);
         c.w += 5;
    } else {
        clear();
        score -= 5;
        c.w = 50
        console.log(score);
    }
    
}