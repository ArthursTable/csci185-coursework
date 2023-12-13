const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
// start width = 50, end width = 400
let c = { 
    x: 500,
    w: 50,
    color: "#066F13"
}
let c2 = { 
    x: 800,
    w: 50,
    color: "hotpink"
}
let c3 = {
    x: 1100,
    w: 50,
    color: "darkblue"
}
const y = canvasHeight / 2;
let score = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mouseClicked() {
    var c2_intersection = inside_circle(c2.x, y, c2.w);
    var c_intersection = inside_circle(c.x, y, c.w);
    var c3_intersection = inside_circle(c3.x, y, c3.w);
    if (c_intersection && c2_intersection && c3_intersection) {
        score += 60;
        c.w = 50;
        c.x = randomInt(0, canvasWidth);
        c2.w = 50;
        c2.x = randomInt(0, canvasWidth);
        c3.w = 50;
        c3.x = randomInt(0, canvasWidth);
    }
    else if (c2_intersection) {
        score += 10;
        c2.w = 50;
        c2.x = randomInt(0, canvasWidth);
    }
    else if (c_intersection) {
        score += 10;
        c.w = 50;
        c.x = randomInt(0, canvasWidth);
    }
    else if (c3_intersection) {
        score += 10;
        c3.w = 50;
        c3.x = randomInt(0, canvasWidth);
    }
}

function inside_circle(cx, cy, w) {
    // found info to help me here: https://stackoverflow.com/questions/2212604/javascript-check-mouse-clicked-inside-the-circle-or-polygon
    var r = w / 2;
    var dx = mouseX - cx;
    var dy = mouseY - cy;
    var intersection = dx*dx + dy*dy <= r*r;
    return intersection;
}

function createBackground() {
    fill("#363636");
    rect(0, y, canvasWidth, y);
    fill("#222021")
    rect(0, 0, canvasWidth, y)
}

function draw() {
    template = `Score: ${score}`;
    clear();
    createBackground();
    frameRate(10);
    if (c.w < 400) {
        fill(c.color);
        circle(c.x, y, c.w);
        c.w += 5;
    } else {
        score -= 5;
        c.w = 50;
        c.x = randomInt(0, canvasWidth);
    }

    if (c2.w < 300) {
        fill(c2.color);
        circle(c2.x, y, c2.w);
        c2.w += 5;
    } else {
        score -= 5;
        c2.w = 50;
        c2.x = randomInt(0, canvasWidth);
    }

    if (c3.w < 600) {
        fill(c3.color);
        circle(c3.x, y, c3.w);
        c3.w += 5;
    } else {
        score -= 5;
        c3.w = 50;
        c3.x = randomInt(0, canvasWidth);
    }
    document.querySelector('#score').innerHTML = template
}