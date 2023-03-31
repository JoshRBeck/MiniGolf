class Game {
  constructor() {
    this.player = new player();
    this.obstacles = [];
  }

  preload() {}
  draw() {
    this.background.draw();
    this.player.new();
  }
  drawLevel() {
    background(220);
    line(100, 300, 100, 600);
    line(90, 290, 910, 290);
    line(100, 300, 900, 300);
    line(910,290,910,610)
    line(900, 300, 900, 600)
    line(910,610,90,610)
    line(100, 600, 900, 600);
    line(90,610,90,290)
}
