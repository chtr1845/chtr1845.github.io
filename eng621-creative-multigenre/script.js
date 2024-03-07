function setup() {
    let canvas = createCanvas(400, 400, WEBGL);
    canvas.parent('canvas-container');
    normalMaterial();
    camera(0, 0, 210*sqrt(3), 0, 0, 0, 0, 1, 0);
    perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(3));
}

function make_box(x, y, z) {
    translate(x, y, z);
    box(70);
}

function draw() {
    background(127);
    orbitControl(1, 1, 1, {freeRotation: true});
    rotateY(QUARTER_PI);
    rotate(-QUARTER_PI, createVector(1, 0, 1));
    make_box(0, 70, 0);
    make_box(70, 0, 0);
    make_box(0, -70, 0);
    make_box(-70, 0, 0);
    make_box(0, 0, -70);
    make_box(0, 70, 0);
    make_box(70, -70, 0);
}