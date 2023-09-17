export class Player {
    constructor(game) {
        this.game = game
        this.width = 70
        this.height = 130
        this.x = this.game.width / 2
        this.y = this.game.height
        this.image = document.getElementById("car")
        this.angle = 0
    }
    update(input) {
        //vertical

        if (input.includes('ArrowRight')) {
            this.x += this.game.speed
            if (this.angle < 0.45) this.angle += 0.03

        } else if (this.angle > 0) {
            this.angle -= 0.03
            if (this.angle < 0.001) this.angle = 0;
        }

        if (input.includes('ArrowLeft')) {
            this.x -= this.game.speed
            if (this.angle > -0.45) this.angle -= 0.03
        } else if (this.angle < 0) this.angle += 0.03


        //horizontal
        if (input.includes('ArrowUp')) this.y -= this.game.speed
        else if (input.includes('ArrowDown')) this.y += this.game.speed
        //borders
        if (this.x < 0 + this.width / 2) this.x = 0 + this.width / 2
        if (this.x > this.game.width - this.width / 2) this.x = this.game.width - this.width / 2
        if (this.y < 0 + this.height / 2) this.y = 0 + this.height / 2
        if (this.y > this.game.height - this.height / 2) this.y = this.game.height - this.height / 2

    }
    draw(context) {
        context.save()
        context.translate(this.x, this.y)
        context.rotate(this.angle)
        context.drawImage(this.image, 0 - this.width / 2, 0 - this.height / 2, this.width, this.height)
        context.restore()


    }

   

}