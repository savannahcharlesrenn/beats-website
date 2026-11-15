let beat, analyzer;

// Load sound file before canvas loads so it is ready
function preload() {
    beat = loadSound('beat.mp3');
}

function setup() {
    let myCanvas = createCanvas(600, 400);
    myCanvas.parent('myContainer');

    // Create a new Amplitude analyzer
    analyzer = new p5.Amplitude();
    analyzer.setInput(beat);
}

function mousePressed() {
    if (beat.isPlaying()) {
        beat.stop();
    } else {
        beat.loop();
    }
}



function draw() {

    // Soft cream background
    background(250, 235, 230);

    // Get the music volume
    let rms = analyzer.getLevel();

    // Make the circle grow with the music
    let circleSize = map(rms, 0, 0.25, 50, 250, true);

    // Main circle
    fill(220, 130, 160);
    noStroke();
    ellipse(width / 2, height / 2, circleSize, circleSize);

    // Smaller circle inside
    fill(255, 190, 130);
    ellipse(width / 2, height / 2, circleSize * 0.45, circleSize * 0.45);
}
