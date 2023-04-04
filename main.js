const game = new Game();
// Load game assets
function preload() {
  game.preload();
}
// Set up Game
function setup() {
  createCanvas(915, 470);
  angleMode(DEGREES);
}
//Draw the game
function draw() {
  clear();
  game.drawLevel();
  game.draw();
}
// Creating the function to hit the ball
document.addEventListener("keydown", moveBall);
function moveBall() {
  if (keyCode === ENTER) {
    game.newball.moveBall();
  }
  console.log(ENTER);
}
