var canvas;
var backgroundImage,car1_image,car2_image,trackImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_image = loadImage("./assets/car1.png");
  car2_image = loadImage("./assets/car2.png");
  trackImage = loadImage("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}

function draw() {
  background(backgroundImage);
  game.play();
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
