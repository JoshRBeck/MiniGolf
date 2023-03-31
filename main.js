const game = new game();

// Load game assets
function preload() {
  game.preload();
}

// Set up Game

function setup() {
  createCanvas(1000, 1000);
}

//Draw the game
function draw() {
  game.draw();
  game.drawLevel();
}
