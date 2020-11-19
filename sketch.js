var Dog, database;


function setup(){
database = firebase.database();

console.log(database);
  //creatCanvas(500,500);


  DogImg1=loadImage("images/dogImg.png");
  DogImg2=loadImage("images/dogImg1.png");

  Dog = createSprite(250,250,10,10);
}

function draw(){
  background(46, 139, 87);


  textSize(25);
  fill("black");
  text("Food Remaining:",100,150);
  

  textSize(10);
  fill("black");
  text("Note: Press UP_ARROW key to feed Boxer",100,10);

  drawSprites();
}

//mom



