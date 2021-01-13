var dog, dogI, dogHI;
var database,food;
var foodLeft;
var buttons;
var printTime;
var timeH,timeM, feedTime;
var isClicked = false;
var timer = 200;

function preload(){
  dogI = loadImage("images/dogImg.png");
  dogHI = loadImage("images/dogImg1.png");
}

function setup() {  
	createCanvas(windowWidth,windowHeight - 5);
  
  database = firebase.database();

  dog = createSprite(width - 400,450);
  dog.addImage("dog",dogI);
  dog.scale = 0.4;
  
  dog.addImage("dogH",dogHI);

  food = database.ref('food');
  time = database.ref('lastFed');

  buttons = new Buttons();
}


function draw() {  
  background("lightblue");
  drawSprites();

  buttons.feedButton(displayWidth - 300,20);
  buttons.refillButton(displayWidth - 150,20);
  buttons.display();

  buttons.foodItems.getTime();

  fill("white");
  stroke("orange");
  strokeWeight(3);
  textSize(25);
  text("Last Feed : " + printTime,displayWidth/2 - 100,30);

  if(isClicked == true){
    timer -= 1;
  }
  if(timer <= 0){
    isClicked = false;
    timer = 200;
    dog.changeImage("dog",dogI)
  }
}


