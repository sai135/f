img = "";
status1="";
function preload(){
  img = loadImage("tvac.jpg");
}
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded() {
  console.log("Model Loaded!");
  status1=true;
  objectDetector.detect(img, gotResult)
}
function gotResult(error, results) {
  if (error) {
 console.error(error);
  }
  console.log(results);
}
function draw() {
  image(img, 0, 0, 640, 420);
  fill("#1d821a");
  text("TV", 250, 200);
  noFill();
  stroke("#1d821a");
  rect(250, 180, 260, 150 );
  fill("#1d821a");
  text("AC", 250, 20);
  noFill();
  stroke("#1d821a");
  rect(250, 5, 270, 120 );
}