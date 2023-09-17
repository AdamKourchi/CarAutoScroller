export class Coin{
    constructor(game) {
        this.game = game
        this.x = (this.game.width/4)*(Math.random()< 0.5 ? 1 : 3)
        this.y = 0
        this.image= document.getElementById('coin')
        this.frameX= 0
        this.maxFrame=4
        this.width=16
        this.height=16
        this.fps=10
        this.timer=0
        this.timerInterval = 1000/this.fps
        this.marked = false
    }
    draw(context){
        context.drawImage(this.image,this.frameX*this.width,0,this.width,this.height,this.x,this.y,30,30)

    }
    update(){
        this.y+=this.game.speed
        if(this.y>this.game.height+this.height)this.marked=true

        if(this.frameX<this.maxFrame && this.timer>this.timerInterval){
            this.timer=0
            this.frameX++
        }else{
            this.timer+=16
        }
        if(this.frameX==this.maxFrame)this.frameX=0
    }
}