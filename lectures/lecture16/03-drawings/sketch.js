function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    // fill("teal")
    // circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/rect
    // fill('hotpink')
    // rect(30, 20, 55, 55);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve'

    // drawRectangle('10', '20', 'blue');
    // drawRectangle('30', '40', 'teal');
    // drawRectangle('50', '60', 'green');
    // drawRectangle('70', '80', 'pink');

    drawCreature(300, 300, 'teal', 50);
    drawCreature(500, 100, 'hotpink', 300);
    drawCreature(450, 500, 'green', 200);

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawRectangle(x, y, color) {
    fill(color);
    rect(x, y, 50, 50, 20);
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