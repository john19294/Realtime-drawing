function setup(){
canvas=createCanvas(500,500)
canvas.position(600,150)
video=createCapture(VIDEO)
video.position(20,20)
video.size(550,720)
posenet=ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotPoses)
}
function draw(){
background("#4272f5")
fill("#42f578")
stroke("#ffffff")
square(noseX,noseY,difference)
document.getElementById("update_label").innerHTML=difference+"px"
}
function modelLoaded(){
    console.log("pose net is loaded")
}
function gotPoses(results){
if(results.length>0)
{console.log(results)}
noseX=results[0].pose.nose.x
nosey=results[0].pose.nose.y
console.log("noseX="+noseX+"noseY="+noseY)
rightwristX=results[0].pose.rightWrist.x
leftwristX=results[0].pose.leftWrist.x
difference=floor(leftwristX-rightwristX)
console.log("leftWristX="+leftwristX+"rightWristX="+rightwristX+"difference="+difference)
}








noseX=0
noseY=0
rightwristX=0
leftwristX=0
difference=0