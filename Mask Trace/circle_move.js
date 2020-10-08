let loop01 = {

x: 0,
y: 100,
h: 200,
w: 100,
color: 255,
transX: 300,
transY: 300,
xspeed: 1,
yspeed: 5,

}

let loop02 = {

x: 100,
y: 100,
h: 200,
w: 100,
color: 255,
transX: 10,
transY: 300,
xspeed: 1,
yspeed: 5,

}

class Loop {
constructor(incomingLoop){
this.incomingLoop = incomingLoop;
  }

 drawLoop() {

   push();
   stroke(255);
   strokeWeight(4);
   noFill();
   translate(this.incomingLoop.transX, this.incomingLoop.transY);
   ellipse(this.incomingLoop.x, this.incomingLoop.y, this.incomingLoop.h, this.incomingLoop.w);
   pop();

    }

  trackingLines(){

    push();
    stroke('yellow');
    translate(this.incomingLoop.transX, this.incomingLoop.transY);
    line(this.incomingLoop.x, -height, this.incomingLoop.x, height);
    line(-width, this.incomingLoop.y, width, this.incomingLoop.y);
    pop();

  }

  moveX() {
        if (this.incomingLoop.transX > width || this.incomingLoop.transX < 0){
        this.incomingLoop.xspeed = this.incomingLoop.xspeed *-1;
        }
        this.incomingLoop.transX = this.incomingLoop.transX + this.incomingLoop.xspeed;
        }

 moveY(){

        if (this.incomingLoop.transY > height || this.incomingLoop.transY < 0){
        this.incomingLoop.yspeed = this.incomingLoop.yspeed *-1;
      }

        this.incomingLoop.transY = this.incomingLoop.transY + this.incomingLoop.yspeed;
      }

}
