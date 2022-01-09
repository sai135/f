img = "";
status1="";
function preload(){
  img = loadImage("desk.jfif");
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
  fill("#003cff");
  text("Desk", 45, 102);
  noFill();
  stroke("#003cff");
  rect(40, 90, 560, 305 );
  fill("#003cff");
  text("Laptop", 120, 60);
  noFill();
  stroke("#003cff");
  rect(115, 45, 200, 100 );
}