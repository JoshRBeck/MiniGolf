class Game {
  constructor() {
    this.ballImage;
    this.newball = new Ball();
  }
  preload() {
    this.newball.preload();
  }
  draw() {
    this.newball.draw();
  
  }
  drawLevel() {
    clear();
    background(0, 102, 0);
    strokeWeight(4);
    line(10, 15, 900, 15);
    line(15, 20, 895, 20);
    line(10, 15, 10, 455);
    line(15, 20, 15, 450);
    line(15, 450, 895, 450);
    line(10, 455, 900, 455);
    line(900, 455, 900, 15);
    line(895, 450, 895, 20);
    line(800, 120, 800, 220);
    fill(255, 0, 0);
    triangle(800, 120, 850, 145, 800, 170);
    fill(194, 194, 163);
    circle(800, 230, 40);
    fill(0, 204, 0);
    rect(15, 20, 200, 430);
  }
}
