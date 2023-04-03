const game = new Game();
// Load game assets
function preload() {
  game.preload();
}
// Set up Game
function setup() {
  createCanvas(910, 470);
}
//Draw the game
function draw() {
  // game.draw();
  game.drawLevel();
}
