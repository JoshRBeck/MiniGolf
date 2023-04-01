const game = new Game();
// Load game assets
function preload() {
  game.preload();
}
// Set up Game
function setup() {
  createCanvas(920, 460);
}
//Draw the game
function draw() {
  // game.draw();
  game.drawLevel();
}
