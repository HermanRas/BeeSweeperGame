let grid;
let w = 20;
let cols;
let rows;

function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (let index = 0; index < arr.length; index++) {
        arr[index] = new Array(rows);
    }
    return arr;
}

function setup() {
    createCanvas(200, 200);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i * w, j * w, w);
        }
    }
}

function mousePressed() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                grid[i][j].reveal();
            }
        }
    }
}

function draw() {
    background(255);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}