export class InputHandler {
    constructor(game) {
        this.game = game
        this.key = []

        window.addEventListener('keydown', (e) => {
            if ((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight'
            ) && (this.key.indexOf(e.key) === -1)) {
                this.key.push(e.key)
            }else if (e.key === 'd') this.game.debugMode = !this.game.debugMode
    
        })
        window.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight'
            ) {
                this.key.splice(this.key.indexOf(e.key), 1)
            }
        })
    
    }
    }
    

