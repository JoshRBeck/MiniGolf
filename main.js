const game = new Game();
// Load game assets
function preload() {
  game.preload();
}
// Set up Game
function setup() {
  createCanvas(1000, 1000);
  canvas.parent("canvas");
}
//Draw the game
function draw() {
  game.draw();
  game.drawLevel();
}
