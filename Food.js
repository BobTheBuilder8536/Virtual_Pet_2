class Food{
    constructor(){
        this.foodLeft;
        this.lastFed;
        
        this.image = loadImage("images/Milk.png");
    }

    getFood(){
        food.on("value",(data)=>{
            this.foodLeft = data.val();
        });
    }

    useFood(){
        this.foodLeft -= 1;
    }

    refillFood(){
        this.foodLeft += 1;
    }
    
    getTime(){
        time.on("value",(data)=>{
            printTime = data.val();
        })
    }

    updateTime(){
        database.ref('/').update({
            lastFed : feedTime
        })
    }

    display(){
        var xPos = 200;
        for(var i = 0;i <= this.foodLeft; i++){
            if(i < 10){
                image(this.image,xPos,300,120,120);
                xPos += 70;
            } else if(i == 10){
                xPos = 200
            }else if(i >= 10){
                image(this.image,xPos,450,120,120);
                xPos += 70;
            }
        }
        
        if(this.foodLeft > 20){
            this.foodLeft = 20;
        }
        if(this.foodLeft){
            database.ref('/').update({
                food: this.foodLeft
            });
        }
    }
}