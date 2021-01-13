class Buttons{
    constructor(){
        this.feed = createButton('Feed The Doggo');
        this.refill = createButton('Restock Food');

        this.foodItems = new Food();

        this.foodItems.getFood();
    }
    
    feedButton(x,y){
        
        this.feed.position(x,y);
        
        this.feed.mousePressed(()=>{
            this.foodItems.useFood();

            timeH = hour();
            timeM = minute();

            if(timeH > 12){
                feedTime = timeH - 12 + ":" + timeM + "PM";
            } else if(timeH <= 12){
                feedTime = timeH + ":" + timeM + "PM";
            }

            this.foodItems.updateTime();

            dog.changeImage("dogH" , dogHI);
            isClicked = true;
        });
    }
    
    refillButton(x,y){
        
        this.refill.position(x,y);
        
        this.refill.mousePressed(()=>{
            this.foodItems.refillFood();
        });
    }
    
    display(){
        this.foodItems.display();

    }
}