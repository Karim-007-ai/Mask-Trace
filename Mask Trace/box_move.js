
let box01 = {
color: 'skyblue',
rectX: 0,
rectY: 0,
rectWidth: 200,
rectHeight: 100,
transX: 200,
transY: 100,
speedX: 2.5,
speedY: 2.5,

}

let box02 = {
rectX: 0,
rectY: 0,
color: 'lightblue',
rectWidth: 200,
rectHeight: 25,
transX: 200,
transY: 25,
speedX: 2,
speedY: 2,

}

let box03 = {
rectX: 0,
rectY: 0,
color: 'lightblue',
rectWidth: 200,
rectHeight: 25,
transX: 200,
transY: 25,
speedX: 1.5,
speedY: 1.5,

}

let box04 = {
rectX: 0,
rectY: 0,
color: 'lightblue',
rectWidth: 200,
rectHeight: 25,
transX: 200,
transY: 25,
speedX: 1,
speedY: 1,

}

let box05 = {
rectX: 0,
rectY: 0,
color: 'lightblue',
rectWidth: 200,
rectHeight: 25,
transX: 200,
transY: 25,
speedX: .5,
speedY: .5,

}

class MovedBox {
constructor (incomingBox) {
  this.incomingBox = incomingBox;
}

 moveBox() {
  push();
  if (this.incomingBox.transX > width || this.incomingBox.transX < 0) {
    this.incomingBox.speedX = this.incomingBox.speedX*-1;
  }
  this.incomingBox.transX = this.incomingBox.transX + this.incomingBox.speedX;
  if (this.incomingBox.transY > width || this.incomingBox.transY < 0) {
    this.incomingBox.speedY = this.incomingBox.speedY*-1;
  }
  this.incomingBox.transY = this.incomingBox.transY + this.incomingBox.speedY;
  translate(this.incomingBox.transX, this.incomingBox.transY);

  stroke(255);
  strokeWeight(2)
  fill(this.incomingBox.color);
  rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight);
  pop();
}

  trackingLines() {
  stroke(255);
  strokeWeight(1.5)
  line(this.incomingBox.transX, 0,this.incomingBox.transX, height)
  line(0, this.incomingBox.transY, height, this.incomingBox.transY)
}
}
