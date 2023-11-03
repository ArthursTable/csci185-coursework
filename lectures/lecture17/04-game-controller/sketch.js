let x = 100;
let y = 200;
let width = 50;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    // circle(x, y, width);
    drawCreature(x, y, fillColor, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down


    // controls direction:
    if (ev.code === 'ArrowUp') {
        y = y - 3;
    } else if (ev.code === 'ArrowDown') {
        y = y + 3;
    } else if (ev.code === 'ArrowLeft') {
        x = x - 3;
    } else if (ev.code === 'ArrowRight') {
        x = x + 3;
    } else if (ev.code === 'Space') {
        width = width + 4;
    } else if (ev.code === 'Escape') {
        width = width - 4;
    } else if (ev.code === 'KeyR') {
        fillColor = 'red';
    } else if (ev.code === 'KeyB') {
        fillColor = 'blue';
    } else if (ev.code === 'KeyW') {
        fillColor = 'white';
    }

    clear();
    // fill(fillColor);
    // circle(x, y, width);
    drawCreature(x, y, fillColor, width)
    drawGrid(canvasWidth, canvasHeight);
}

function drawCreature(x, y, color, size) {
    fill(color);
    // let size = 50;
    let eyeball = size/7.5
    circle(x, y, size);
    fill('white');
    circle(x-eyeball, y-eyeball, eyeball*2);
    circle(x+eyeball, y-eyeball, eyeball*2);
    fill('black');
    circle(x+eyeball, y-eyeball, eyeball);
    circle(x-eyeball, y-eyeball, eyeball);

}


// Add event listener on keydown
document.addEventListener("keydown", moveController);
