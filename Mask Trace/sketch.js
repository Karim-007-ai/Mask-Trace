let boxes = [box01, box02, box03, box04, box05];
let boxPosition = [];


let loops = [loop01, loop02]
let loopPosition = [];

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < boxes.length; i++) {
  boxPosition[i] = new MovedBox(boxes[i]);
 }

 for (let i = 0; i < loops.length; i++){
 loopPosition[i] = new Loop(loops[i]);
}

}

function draw() {
  background(0);
  rectMode(CENTER);

  for (i = 0; i < boxes.length; i++) {
  boxPosition[i].moveBox();
  boxPosition[i].trackingLines();
 }

 for (i = 0; i < loops.length; i++){

   push();
   loopPosition[i].drawLoop();
   loopPosition[i].trackingLines();
   loopPosition[i].moveX();
   loopPosition[i].moveY();
   pop();

 }

}
