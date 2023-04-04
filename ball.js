class Ball {
  constructor() {
    this.width = 70;
    this.height = 50;
    this.y = 210;
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
    // This event listener determines where the mouse coordinates are, designating a target and/or helping create a target angle
    window.addEventListener("mousemove", (event) => {
      // mousePos = { x: event.clientX, y: event.clientY };
      let mousePosx = event.clientX;
      let mousePosy = event.clientY;
      // console.log(event.clientX);
      console.log(mousePosx);
      console.log(mousePosy);
    });

    //This calculates the distance between the cursor and the balls current position
    let aimDistanceX = mousePosx - this.x;
    let aimDistanceY = mousePosy - this.y;
    let aimDistanceTotal = Math.sqrt((Math.pow(aimDistanceX,2)) + (Math.pow(aimDistanceY,2)));
    //This is the centerpoint calculations, used as a reference to help calculate the angle of the shot
    const centerPointx = 440;
    const centerPointy = 215;
    //This calculates the distance between the mouse coordinates and the centerpoint
    let mouseToCenterx = mousePosx - centerPointx;
    let mouseToCentery = mousePosy - centerPointy;
    let mouseToCenterTotal = Math.sqrt((Math.pow(mouseToCenterx,2)) + (Math.pow(mouseToCentery,2)));
    //This calculates the distance between the centerpoint and the current ball position
    let centerToBallx = centerPointx - this.x;
    let centerToBally = centerPointy - this.y;
    let centerToBallTotal = Math.sqrt((Math.pow(centerToBallx,2)) + (Math.pow(centerToBally,2)));
    //Law of cosines to determine the angle (We have three side lengths available) c2 = a2 + b2 − 2ab cos(C)
    let shootingAngleCOS = (Math.cos((Math.pow(mouseToCenterTotal,2)) + (Math.pow(centerToBallTotal,2)) - (Math.pow(aimDistanceTotal,2)) / (2*mouseToCenterTotal * centerToBallTotal)))
  }
}
