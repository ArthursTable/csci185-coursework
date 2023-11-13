const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#797B84", "#FDF5BF", "#FFD5FF", "#23C9FF", "#F56960"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}




// // anything that you want to animate goes in this function:  
function draw() {
    clear();
    frameRate(10);

    let counter = 0;

    while (counter < 250) {
    const i = randomInt(0,4)

    fill(colors[i]);

    // draw a random circle:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(5, 30);
    circle(x, y, size);
    counter += 1
    }
}


 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

