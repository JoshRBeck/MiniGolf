class Game {
  constructor() {
    // this.player = new player();
    // this.obstacles = [];
  }
  preload() {}
  // draw() {
  //   this.background.draw();
  //   this.player.new();
  // }
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
    line(800, 150, 800, 230);
    fill(255, 0, 0);
    triangle(800, 150, 830, 165, 800, 180);
    fill(194, 194, 163);
    circle(800, 230, 40);
    fill(0, 204, 0);
    rect(15, 20, 200, 430);
  }
}
// class player {
//   constructor() {
//     this.x = 0;
//     this.y = 0;
//   }
//
