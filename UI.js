export class UI {
    constructor(game) {
        this.game = game
        this.fontsize = 30
        this.fontfamilly = 'Helvetica'
        this.fontColor = 'red'

    }
    draw(context) {
        context.font = this.fontsize + 'px ' + this.fontfamilly
        context.textAlign = 'left'
        context.fillStyle = this.fontColor
        //score
        context.fillText('Score: ' + this.game.score, 30, 40)
        //timer
        context.font = this.fontsize * 0.8 + 'px ' + this.fontfamilly
        context.fillText('Time: ' + (this.game.time*0.001).toFixed(1), 30, 70)
        context.fillText('Lives: ' + this.game.lives, 30, 100)


        if (this.game.gameover && this.game.lives>0) {
            context.fillStyle = 'black'

            context.textAlign = 'center'
            context.font = this.fontsize * 2 + 'px ' + this.fontfamilly
            context.fillText('Game Over', this.game.width * 0.5, this.game.height * 0.5 - 20)
            context.font = this.fontsize * 0.7 + 'px ' + this.fontfamilly
            context.fillText('Score: '+this.game.score, this.game.width * 0.5, this.game.height * 0.5 + 20)
        }else if(this.game.gameover && this.game.lives===0){
            context.fillStyle = 'black'
            context.textAlign = 'center'
            context.font = this.fontsize * 2 + 'px ' + this.fontfamilly
            context.fillText('Loser', this.game.width * 0.5, this.game.height * 0.5 - 20)
            context.font = this.fontsize * 0.7 + 'px ' + this.fontfamilly
            context.fillText('Try Again!', this.game.width * 0.5, this.game.height * 0.5 + 20)

        }
    }
}