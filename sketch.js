var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;
var feed,add
var fedTime,lastFed
var foodObj
//Create variables here

function preload()
{
	dogImg=loadImage("images/dogImg.png");
   dogImg1=loadImage("images/dogImg1.png");

}

function setup() {
	database=firebase.database();
  createCanvas(500,500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodObj=new Food()
  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)
  addFood=createButton("Add food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  textSize(20); 
  
}


function draw() {  

  background(46,139,87);
  foodObj.display()
 fedTime=database.ref('feedTime')
fedTime.on("value",function(data){
  lastFed=data.val()
})


  drawSprites();
  fill(255,255,254);
  stroke("black");
 // text("Food remaining : "+foodS,170,200);
  textSize(13);
  if(lastFed>=12){
    text("LAST FEED:"+lastFed%12+"PM",350,30)
  }
  else if(lastFed===0){
    text("LAST FEED:12 AM",350,30)
  }
  
else{
  text("LAST FEED:"+lastFed+"AM",350,30)
}}
function readStock(data){
  foodS=data.val()
  foodObj.updateFoodStock(foodS)
}

//Function to write values in DB

function feedDog(){
  dog.addImage(DogImg1)
  foodObj.updateFoodStock(foodObj.getfoodStock()-1)
  database.ref('/').update({
    food:foodObj.getfoodStock(),
    feedTime:hour
  })

}
function addFoods(){
  foodS=foodS+1
  database.ref('/').update({
    food:foodS
  })

}

