function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let x = 0
    let y = 0;
    let w = 50;
    while (y <= 600) {
        circle(100, y, w);
        circle(x, 150, w);
        x += 5;
        y += 5;
        w += 1;

        
    }

    drawGrid(canvasWidth, canvasHeight);
}
