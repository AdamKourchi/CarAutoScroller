import { Player } from './player.js'
import { InputHandler } from './input.js'
import { Background } from './background.js'
import { Enemy } from './enemies.js'
import { Collision } from './collisions.js'
import { UI } from './UI.js'
import { Coin } from './coins.js'
window.addEventListener('load', function () {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = 600
        canvas.height = 660

        class Game {
                constructor(width, height) {
                        this.width = width
                        this.height = height
                        this.background = new Background(this)
                        this.player = new Player(this)
                        this.input = new InputHandler(this)
                        this.ui = new UI(this)
                        this.enemies = []
                        this.enemyTimer = 0
                        this.coinTimer = 0
                        this.coinInterval = 1000
                        this.debugMode = false
                        this.collision = []
                        this.coin = []
                        this.time = 0
                        this.gameover = false
                        //Difficulty Tweaks Baby
                        this.maxtime = 100000
                        this.enemyinterval = 1000
                        this.score = 0
                        this.lives = 3
                        this.speed = 7

                }
                update() {
                        this.time += 16
                        if (this.time > this.maxtime || this.lives === 0) this.gameover = true
                        this.background.update()
                        this.player.update(this.input.key)
                        //Update Enemy
                        if (this.enemyTimer > this.enemyinterval) {
                                this.addenemy()
                                this.enemyTimer = 0
                        } else {
                                this.enemyTimer += 16
                        }
                        for (this.enemy of this.enemies) {
                                this.enemy.update()
                        }
                        //Update Coin
                        if (this.coinTimer > this.coinInterval) {
                                this.addCoin()
                                this.coinTimer = 0
                        } else {
                                this.coinTimer += 16
                        }
                        this.coin.forEach(coin => {
                                coin.update()
                        });

                        this.checkColision()

                        this.collision.forEach(collision => {
                                collision.update()

                        });
                        if (this.collision.length > 10) this.collision.splice(this.collision[5], 10)
                }
                draw(context) {
                        this.background.draw(context)
                        this.player.draw(context)
                        //Draw Coin
                        this.coin.forEach(coin => {
                                coin.draw(context)
                        });
                        //Draw Enemy
                        this.enemies.forEach(enemy => {
                                enemy.draw(context)

                        });
                        //Delete Marked Cars
                        for (this.enemy of this.enemies) {
                                if (!this.enemy.shown) this.enemies.splice(this.enemies.indexOf(this.enemy), 1)
                        }
                        //Delete Marked Coins
                        this.coin.forEach(coin => {
                                if (this.coin.marked) this.coin.splice(this.coin.indexOf(this.coin), 1)

                                
                        });
                        //Smoke
                        this.collision.forEach(collision => {
                                collision.draw(context)

                        });
                        this.ui.draw(context)
                        //Debug Mode
                        if (this.debugMode) {
                                context.strokeStyle = 'red';
                                context.lineWidth = 5;
                                context.strokeRect(this.player.x - this.player.width / 2, this.player.y - this.player.height / 2, this.player.width, this.player.height)
                                this.enemies.forEach(enemy => { context.strokeRect(enemy.x, enemy.y, enemy.width, enemy.height) });
                                this.coin.forEach(coin => { context.strokeRect(coin.x, coin.y, 30, 30) });


                        }
                }
                addenemy() {
                        this.enemies.push(new Enemy(this))
                }
                addCoin() {
                        this.coin.push(new Coin(this))
                        console.log(this.coin);
                }
                checkColision() {
                        this.enemies.forEach(enemy => {
                                if (this.player.x - this.player.width / 2 > enemy.x + enemy.width ||
                                        this.player.x - this.player.width / 2 + this.player.width < enemy.x ||
                                        this.player.y - this.player.height / 2 > enemy.y + enemy.height ||
                                        this.player.y - this.player.height / 2 + this.player.height < enemy.y) {
                                        return false
                                } else {
                                        this.collision.push(new Collision(this, enemy.x, enemy.y))
                                        this.enemies.splice(this.enemies.indexOf(enemy), 1)
                                        this.lives--
                                        this.score-=10
                                }
                        });
                        this.coin.forEach(coin => {
                                if (this.player.x - this.player.width/2 > coin.x + 30 ||
                                this.player.x - this.player.width/2 + this.player.width < coin.x ||
                                this.player.y - this.player.height/2  > coin.y + 30 ||
                                this.player.y - this.player.height/2  + this.player.height < coin.y) {
                                return false
                        } else {
                                this.coin.splice(this.coin.indexOf(coin), 1)
                                this.score++
                        }
                        });
                }
        }
        const game = new Game(canvas.width, canvas.height)
        function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                game.update()
                game.draw(ctx)
                if (!game.gameover) requestAnimationFrame(animate)
        }
        animate()
})