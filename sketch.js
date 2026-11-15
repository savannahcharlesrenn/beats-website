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

    // Clear the canvas before drawing again
    background(255);

    // Get the average amplitude
    let rms = analyzer.getLevel();

    fill(127);
    stroke(0);

    // Draw a circle that changes size with the music
    ellipse(width / 2, height / 2, 10 + rms * 500, 10 + rms * 500);
}
