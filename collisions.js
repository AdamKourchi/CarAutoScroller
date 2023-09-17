export class Collision{
    constructor(game,x,y) {
        this.game = game 
        this.marked = false
        this.image = document.getElementById("smoke")
        this.x = x
        this.y = y
        this.frameX = 0
        this.maxFrame= 4
        this.width = 200
        this.height = 179
        this.fps =15
        this.frameInterval = 1000/this.fps
        this.frameTimer = 0
    }

    draw(context){
        context.drawImage(this.image,this.frameX*this.width,0,this.width,this.height,this.x,this.y,this.width,this.height)
    }
    update(){
        this.y+=5

        if(this.frameTimer>this.frameInterval){
            this.frameX++  
            this.frameTimer=0
        }else {
            this.frameTimer += 16
        }
    }
}

