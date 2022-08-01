leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(350,350);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

}

function modelLoaded(){
    console.log('Model got loaded!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log('results');
        leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX -rightWristX);
    console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);

    }
}


function draw(){
    background('grey');
    document.getElementById("word_size").innerHTML = "Width and height of the text will be = " + difference + "px";
    fill('red');
    stroke('black');
    text('akshaya',50,400);
}