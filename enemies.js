export class Enemy{
    constructor(game) {
        this.game = game
        this.width = 70
        this.height = 130
        this.x=Math.random()*(this.game.width-70)
        this.y = -this.height
        this.images = [car1,car2,car3,car4]
        this.image = this.images[Math.trunc(Math.random()*4)]
        this.shown = true
    }
    update() {
        this.y+=this.game.speed
        if(this.y>this.game.height+this.height*2)this.shown = false
    }
    draw(context){

        context.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}