function Cell(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    if (random(1) < 0.5) {
        this.bee = true;
    } else {
        this.bee = false;
    }

    this.revealed = false;
}

Cell.prototype.show = function () {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if (this.revealed) {
        if (this.bee) {
            stroke(0);
            fill(127);
            ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
        } else {
            noStroke();
            fill(127);
            rect(this.x, this.y, this.w, this.w);
        }
    }
}

Cell.prototype.contains = function (x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function () {
    this.revealed = true;
}