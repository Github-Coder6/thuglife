lefteye_x = 0;
lefteye_y = 0;
chainpos_x = 0;
chainpos_y = 0;
tilakpos_x = 0;
tilakpos_y = 0;
function preload(){
    overlap= loadImage("specs.png");
    ovlap = loadImage("chain.png");
    olap = loadImage("tilak.png")
}
function setup(){
    canvas = createCanvas(500, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialised");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        lefteye_x = results[0].pose.leftEye.x -100;
        lefteye_y = results[0].pose.leftEye.y -55;
        chainpos_x = results[0].pose.leftShoulder.x -160;
        chainpos_y = results[0].pose.leftShoulder.y -50;
        tilakpos_x = results[0].pose.nose.x -40;
        tilakpos_y = results[0].pose.nose.y -95;
    }
}
function draw(){
    image(video, 0, 0, 500, 350);
    image(overlap, lefteye_x, lefteye_y, 140, 140);
    image(ovlap, chainpos_x, chainpos_y, 115, 115);
    image(olap, tilakpos_x, tilakpos_y, 75, 75);
}

function take_snapshot(){
    save("imTHUG.png");
}
