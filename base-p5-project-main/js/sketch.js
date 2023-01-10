
    let x = 0;
    let y = 0;
    let theta = 0;
    let inc = 0.05;
    let offset = 0; //the amount offset from begining of wave
    let amplitude;
    let frequency;
    let maxAngle;

    function setup() {
        amplitude = windowHeight/8;
        frequency = windowWidth/8;
        maxAngle = (windowWidth/frequency) * TWO_PI;
        createCanvas(windowWidth, windowHeight);
        noStroke();
        
    }

function draw() {
    background(0);
    while(theta < maxAngle + offset){
        
         //sine wave 3
         y = sin(theta-1) * amplitude;
         fill(255, 255, 255);
         ellipse(x, y + height/2, 16);
        //sine wave 2
         y = sin(theta-0.5) * amplitude;
         fill(255, 0, 255);
         ellipse(x, y + height/2, 16);
        //sine wave
        y = sin(theta) * amplitude;
        fill(255, 0, 0);
        ellipse(x, y + height/2, 16);
        //cosine wave
        y = cos(theta) * amplitude;
        fill(0, 0, 255);
        ellipse(x, y + height/2, 16);

        theta += 0.2;
        x = ((theta - offset ) / maxAngle) * windowWidth;  
    }
    offset += inc;
    theta = offset;
}

