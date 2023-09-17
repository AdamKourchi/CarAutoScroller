export class Background{
    constructor(game){
        this.game = game
        this.width = 1667
        this.height = 1573
        this.image = road
        this.x = 0
        this.y =0
    }
    update(){
        if(this.y>this.game.height){this.y=0}
        else this.y+= this.game.speed

    }
    draw(context){
        context.drawImage(this.image,this.x,this.y,this.game.width,this.game.height)
        context.drawImage(this.image,this.x,this.y-this.game.height,this.game.width,this.game.height)
        context.drawImage(this.image,this.x,this.y-this.game.height*2,this.game.width,this.game.height)



    }
}