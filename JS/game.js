let grid;
let w = 20;
let cols;
let rows;
let totalBees = 10;
let score = 0;

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
            grid[i][j] = new Cell(i, j, w);
        }
    }

    //set all spots to available
    let beeSpotsAvailable = [];
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            beeSpotsAvailable.push([i, j]);
        }
    }

    //pick bee spots
    for (let index = 0; index < totalBees; index++) {
        let spotSelected = floor(random(beeSpotsAvailable.length));
        let spot = beeSpotsAvailable[spotSelected];
        let i = spot[0];
        let j = spot[1];
        //delete picked spot
        beeSpotsAvailable.splice(spot, 1);
        grid[i][j].bee = true;
    }


    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].countBees();
        }
    }
}

function gameOver() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].revealed = true;
        }
    }
    alert('YOUR SCORE = ' + score);
}

function mousePressed() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                grid[i][j].reveal();
                score++;
                if (grid[i][j].bee) {
                    gameOver();
                }
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