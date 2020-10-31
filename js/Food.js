class Food{
    constructor(){
    this.foodStock=0
    this.Lastfed=0
    this.milkImg=loadImage("Milk.png")
    }
    getFedTime(lastFed){
    this.lastFed=lastFed
    }
    updateFoodStock(foodStock){
    this.foodStock=foodStock;
    }
    deductFood()
    { if(this.foodStock>0){
    this.foodStock=this.foodStock-1; }
    } 
    getFoodStock(){
    return this.foodStock; }
    display(){
    var x=80, y=100
    imageMode(CENTER);
    image(this.milkImg,720,220,70,70)
    if(this.foodStock!==0){
        for(var i=0;i<this.foodStock;i=i+20){
            if(i%10===0){
                x=80
                y=y+50
            }
            image(this.milkImg,x,y,50,50);
            x=x+30
        }
    }
    }
    
}