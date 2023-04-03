class Ball {
  constructor() {
    this.width = 70;
    this.height = 50;
    this.y = 230;
    this.x = 120;
  }
  preload() {
    this.ballImage = loadImage("./Assets/GolfBallEdited.png");
  }
  draw() {
    image(this.ballImage, this.x, this.y, this.width, this.height);
  }
  // Function to move the ball across the course
  moveBall() {
    this.y += 10;
    this.x += 10;
  }
}
