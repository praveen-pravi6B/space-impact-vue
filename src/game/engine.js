import { Player, Explosion, Particle, UI, Projectile, Missile, Laser, Wall, PowerUp } from './entities.js';
import {
    getEnemiesLvl1, getEnemiesLvl2, getEnemiesLvl3, getEnemiesLvl4,
    getEnemiesLvl5, getEnemiesLvl6, getEnemiesLvl7, getEnemiesLvl8,
    bgArray2, bgArray3, bgArray4, bgArray5, bgArray6, bgArray7, bgArray8
} from './levels.js';
import {
    Background2, Background3, Background4, Background5, Background7, Background8
} from './environment.js';

class Level {
    constructor(game, number, isDark) {
        this.game = game;
        this.active = true;
        this.number = number;
        this.game.isLevelDark = isDark;
        this.player = new Player(game, this);
        this.ui = new UI(game);
        this.sourceEnemyArray = [];
        this.enemies = [];
        this.playerProjectiles = [];
        this.playerSpecial = [];
        this.enemyProjectiles = [];
        this.background = [];
        this.explosions = [];
        this.i = 0;
        this.levelTime = 0;
        this.flag = true;
        this.bgStop = false;
        this.levelComplete = false;

        this.init();
    }

    init() {
        const bg = this.game.bgCanvas;
        if (this.game.isLevelDark) bg.style.background = "#282828";
        else bg.style.background = "#aad69c";

        switch (this.number) {
            case 1: this.sourceEnemyArray = getEnemiesLvl1(this.game, this); break;
            case 2: this.sourceEnemyArray = getEnemiesLvl2(this.game, this);
                bgArray2.forEach((f, i) => this.background.push(new Background2(this.game, this, f, i))); break;
            case 3: this.sourceEnemyArray = getEnemiesLvl3(this.game, this);
                bgArray3.forEach((f, i) => this.background.push(new Background3(this.game, this, f, i))); break;
            case 4: this.sourceEnemyArray = getEnemiesLvl4(this.game, this);
                bgArray4.forEach((f, i) => this.background.push(new Background4(this.game, this, f, i))); break;
            case 5: this.sourceEnemyArray = getEnemiesLvl5(this.game, this);
                bgArray5.forEach((f, i) => this.background.push(new Background5(this.game, this, f, i))); break;
            case 6: this.sourceEnemyArray = getEnemiesLvl6(this.game, this);
                bgArray6.forEach((f, i) => this.background.push(new Background5(this.game, this, f, i))); break;
            case 7: this.sourceEnemyArray = getEnemiesLvl7(this.game, this);
                bgArray7.forEach((f, i) => this.background.push(new Background7(this.game, this, f, i))); break;
            case 8: this.sourceEnemyArray = getEnemiesLvl8(this.game, this);
                bgArray8.forEach((f, i) => this.background.push(new Background8(this.game, this, f, i))); break;
        }
    }

    update(deltaTime) {
        if (!this.player.delete) this.player.update(deltaTime);
        this.playerProjectiles.forEach(p => p.update());
        this.playerProjectiles = this.playerProjectiles.filter(p => !p.delete);
        this.playerSpecial.forEach(s => s.update(deltaTime));
        this.playerSpecial = this.playerSpecial.filter(s => !s.delete);

        if (this.flag && this.i < this.sourceEnemyArray.length && this.levelTime > this.sourceEnemyArray[this.i].time) {
            this.swarm(this.sourceEnemyArray[this.i].object);
            this.i++;
            if (this.i >= this.sourceEnemyArray.length) { this.flag = false; this.bgStop = true; }
        }

        this.enemies.forEach(enemy => {
            enemy.update(deltaTime);
            this.playerProjectiles.concat(this.playerSpecial).forEach(p => {
                if (enemy.isBoss) {
                    enemy.hitbox.forEach(hb => {
                        if (this.game.checkCollision(hb, p)) {
                            if (p.damage) {
                                if (!p.hit) {
                                    if (!hb.immune) { enemy.hp -= p.damage; this.game.playerScore += p.damage; if (enemy.hp <= 0) this.bossDead(enemy); }
                                    p.hit = true;
                                }
                                if (p.specialType === "missile") p.delete = true;
                            } else {
                                p.delete = true;
                                if (!hb.immune) { enemy.hp -= 5; this.game.playerScore += 5; if (enemy.hp <= 0) this.bossDead(enemy); }
                            }
                        }
                    });
                } else if (this.game.checkCollision(p, enemy)) {
                    if (enemy.isPowerUp) { if (!p.damage) p.delete = true; }
                    else {
                        if (p.damage) { if (!enemy.hit || !p.hit) { enemy.hp -= p.damage; enemy.hit = true; p.hit = true; if (enemy.hp <= 0) this.enemyDead(enemy); } if (p.specialType === "missile") p.delete = true; }
                        else { p.delete = true; enemy.hp -= 10; if (enemy.hp <= 0) this.enemyDead(enemy); }
                    }
                }
            });

            if (enemy.isPowerUp) {
                if (this.game.checkCollision(enemy, this.player.hitbox)) {
                    enemy.delete = true;
                    if (enemy.powerup === "life") { if (this.game.lives < 7) this.game.lives++; else this.game.specialCount++; }
                    else if (this.game.specialAtttack === enemy.powerup) { if (enemy.powerup === "wall") this.game.specialCount++; else this.game.specialCount += 3; }
                    else { this.game.specialAtttack = enemy.powerup; this.game.specialCount = (enemy.powerup === "wall") ? 1 : 3; }
                }
            } else if (enemy.isBoss) {
                enemy.hitbox.forEach(hb => {
                    if (this.player.shieldOn && this.game.checkCollision(hb, this.player.shield)) { enemy.hp -= 1; this.game.playerScore += 1; if (enemy.hp <= 0) this.bossDead(enemy); }
                    else if (this.game.checkCollision(hb, this.player.hitbox) && !this.player.hit) { this.player.hit = true; this.explosions.push(new Explosion(this.game, this.player.x, this.player.y)); this.playerDead(); }
                });
            } else {
                if (this.player.shieldOn && this.game.checkCollision(this.player.shield, enemy)) { this.game.playerScore += enemy.score; this.explosions.push(new Explosion(this.game, enemy.x, enemy.y)); enemy.delete = true; }
                else if (this.game.checkCollision(enemy, this.player.hitbox) && !this.player.hit) { this.player.hit = true; this.explosions.push(new Explosion(this.game, this.player.x, this.player.y)); this.explosions.push(new Explosion(this.game, enemy.x, enemy.y)); enemy.delete = true; this.playerDead(); }
            }
        });
        this.enemies = this.enemies.filter(e => !e.delete);

        this.enemyProjectiles.forEach(p => {
            p.update();
            this.playerProjectiles.forEach(pp => { if (this.game.checkCollision(p, pp)) { this.explosions.push(new Explosion(this.game, pp.x, pp.y)); pp.delete = true; p.delete = true; } });
            this.playerSpecial.forEach(sp => { if (this.game.checkCollision(p, sp)) p.delete = true; });
            if (!this.player.shieldOn && this.game.checkCollision(this.player.hitbox, p) && !this.player.hit) { this.player.hit = true; p.delete = true; this.explosions.push(new Explosion(this.game, this.player.x, this.player.y)); this.playerDead(); }
            if (this.player.shieldOn && this.game.checkCollision(this.player.shield, p)) p.delete = true;
        });
        this.enemyProjectiles = this.enemyProjectiles.filter(p => !p.delete);

        this.explosions.forEach(e => e.update());
        this.explosions = this.explosions.filter(e => !e.delete);

        this.background.forEach(bg => {
            bg.update(deltaTime);
            bg.hitbox.forEach(hb => {
                if (this.game.checkCollision(this.player.hitbox, hb) && !this.player.hit) { this.player.hit = true; this.explosions.push(new Explosion(this.game, this.player.x, this.player.y)); this.playerDead(); }
                this.playerProjectiles.forEach(pp => { if (this.game.checkCollision(pp, hb)) pp.delete = true; });
            });
        });
        this.background = this.background.filter(bg => !bg.delete);

        if (this.levelComplete) {
            this.active = false;
            if (this.number != 5 && this.number != 6) { if (this.player.y <= 55) this.player.x += 5; else this.player.y -= 2; }
            else { if (this.player.y + this.player.height >= 400) this.player.x += 5; else this.player.y += 2; }
            if (this.player.x >= 840) { if (this.number === 8) this.game.gameOver = true; else this.game.nextLevel(this.number + 1, (this.number === 4 || this.number === 5)); }
        }

        this.levelTime += deltaTime;
    }

    draw(bgCtx, mainCtx) {
        this.ui.draw(bgCtx);
        this.background.forEach(bg => bg.draw(bgCtx));
        if (!this.player.delete) this.player.draw(mainCtx);
        this.playerProjectiles.forEach(p => p.draw(mainCtx));
        this.playerSpecial.forEach(s => s.draw(mainCtx));
        this.enemies.forEach(e => e.draw(mainCtx));
        this.enemyProjectiles.forEach(p => p.draw(mainCtx));
        this.explosions.forEach(e => e.draw(mainCtx));
    }

    swarm(array) { array.forEach(o => this.enemies.push(o)); }
    enemyDead(enemy) { this.explosions.push(new Explosion(this.game, enemy.x, enemy.y)); this.game.playerScore += enemy.score; enemy.delete = true; }
    bossDead(enemy) { this.game.playerScore += enemy.score; for (let i = 0; i < 3; i++) this.explosions.push(new Explosion(this.game, Math.random() * enemy.width + enemy.x, Math.random() * enemy.height + enemy.y)); this.levelComplete = true; enemy.delete = true; }
    playerDead() {
        this.player.delete = true; this.game.lives--;
        if (this.game.lives > 0) setTimeout(() => { this.player = new Player(this.game); }, 500);
        else setTimeout(() => { this.game.gameOver = true; }, 500);
    }
}

export class SpaceImpactGame {
    constructor(canvasMain, canvasBg, buttons) {
        this.mainCanvas = canvasMain;
        this.bgCanvas = canvasBg;
        this.mainCtx = canvasMain.getContext('2d');
        this.bgCtx = canvasBg.getContext('2d');
        this.buttons = buttons;

        this.mainCanvas.width = 840;
        this.mainCanvas.height = 480;
        this.bgCanvas.width = 840;
        this.bgCanvas.height = 480;

        this.assets = {
            mainSprites: new Image(),
            bossSprites: new Image(),
            bgSprites1: new Image(),
            bgSprites2: new Image(),
            logo: new Image()
        };

        this.keys = {
            ArrowLeft: { pressed: false },
            ArrowRight: { pressed: false },
            ArrowUp: { pressed: false },
            ArrowDown: { pressed: false },
            space: { pressed: false },
            x: { pressed: false }
        };

        this.gameOver = false;
        this.gamePause = false;
        this.isLevelDark = true;
        this.specialAtttack = "missile";
        this.specialCount = 3;
        this.lives = 4;
        this.playerScore = 0;
        this.isMainScreen = true;
        this.lastTime = 0;
        this.particles = [];
        for (let i = 0; i < 100; i++) this.particles.push(new Particle(this));

        this.init();
    }

    async init() {
        this.assets.mainSprites.src = "/img/gameSprites.png";
        this.assets.bossSprites.src = "/img/bossSprites.png";
        this.assets.bgSprites1.src = "/img/bgSprites1.png";
        this.assets.bgSprites2.src = "/img/bgSprites2.png";
        this.assets.logo.src = "/img/logo.png";

        await Promise.all([
            new Promise(r => this.assets.mainSprites.onload = r),
            new Promise(r => this.assets.bossSprites.onload = r),
            new Promise(r => this.assets.bgSprites1.onload = r),
            new Promise(r => this.assets.bgSprites2.onload = r),
            new Promise(r => this.assets.logo.onload = r)
        ]);

        this.currentLevel = new Level(this, 1, true);
        this.setupInput();
        this.animate(0);
    }

    setupInput() {
        window.addEventListener("keydown", (e) => {
            if (this.gameOver || !this.currentLevel.active || this.gamePause) return;
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "x", "X"].includes(e.key)) e.preventDefault();
            if (e.key === "ArrowLeft") this.keys.ArrowLeft.pressed = true;
            if (e.key === "ArrowRight") this.keys.ArrowRight.pressed = true;
            if (e.key === "ArrowUp") this.keys.ArrowUp.pressed = true;
            if (e.key === "ArrowDown") this.keys.ArrowDown.pressed = true;
            if (e.key === " ") { if (!this.keys.space.pressed) { this.currentLevel.playerProjectiles.push(new Projectile(this, true, this.currentLevel.player)); this.keys.space.pressed = true; } }
            if (e.key.toLowerCase() === "x") { if (!this.keys.x.pressed && this.specialCount > 0) { let sp; switch (this.specialAtttack) { case "missile": sp = new Missile(this, this.currentLevel); break; case "laser": sp = new Laser(this, this.currentLevel); break; case "wall": sp = new Wall(this, this.currentLevel); break; } this.currentLevel.playerSpecial.push(sp); this.specialCount--; this.keys.x.pressed = true; } }
        });
        window.addEventListener("keyup", (e) => {
            if (e.key === "ArrowLeft") this.keys.ArrowLeft.pressed = false;
            if (e.key === "ArrowRight") this.keys.ArrowRight.pressed = false;
            if (e.key === "ArrowUp") this.keys.ArrowUp.pressed = false;
            if (e.key === "ArrowDown") this.keys.ArrowDown.pressed = false;
            if (e.key === " ") this.keys.space.pressed = false;
            if (e.key.toLowerCase() === "x") this.keys.x.pressed = false;
        });

        // Pointer events for onscreen buttons
        const setupBtn = (id, key) => {
            const btn = document.getElementById(id);
            if (!btn) return;
            btn.addEventListener("pointerdown", () => { if (!this.gameOver && !this.gamePause) this.keys[key].pressed = true; });
            btn.addEventListener("pointerup", () => this.keys[key].pressed = false);
            btn.addEventListener("pointerout", () => this.keys[key].pressed = false);
        };
        setupBtn("button-left", "ArrowLeft");
        setupBtn("button-right", "ArrowRight");
        setupBtn("button-up", "ArrowUp");
        setupBtn("button-down", "ArrowDown");

        const fireBtn = document.getElementById("button-fire");
        if (fireBtn) fireBtn.addEventListener("pointerdown", () => { if (!this.gameOver && !this.gamePause && !this.keys.space.pressed) { this.currentLevel.playerProjectiles.push(new Projectile(this, true, this.currentLevel.player)); this.keys.space.pressed = true; } });
        if (fireBtn) fireBtn.addEventListener("pointerup", () => this.keys.space.pressed = false);

        const xBtn = document.getElementById("button-x");
        if (xBtn) xBtn.addEventListener("pointerdown", () => { if (!this.gameOver && !this.gamePause && !this.keys.x.pressed && this.specialCount > 0) { let sp; switch (this.specialAtttack) { case "missile": sp = new Missile(this, this.currentLevel); break; case "laser": sp = new Laser(this, this.currentLevel); break; case "wall": sp = new Wall(this, this.currentLevel); break; } this.currentLevel.playerSpecial.push(sp); this.specialCount--; this.keys.x.pressed = true; } });
        if (xBtn) xBtn.addEventListener("pointerup", () => this.keys.x.pressed = false);
    }

    animate(timestamp) {
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        if (this.isMainScreen) this.drawMainScreen();
        else if (!this.gamePause && !this.gameOver) {
            this.mainCtx.clearRect(0, 0, 840, 480);
            this.bgCtx.clearRect(0, 0, 840, 480);
            this.currentLevel.update(deltaTime);
            this.currentLevel.draw(this.bgCtx, this.mainCtx);
        } else if (this.gamePause) {
            this.mainCtx.save();
            this.mainCtx.fillStyle = "red";
            this.mainCtx.textAlign = "center";
            this.mainCtx.font = "bold 60px Silkscreen";
            this.mainCtx.fillText("|| Game Paused", 420, 260);
            this.mainCtx.restore();
        }

        if (this.gameOver) {
            this.mainCtx.clearRect(0, 0, 840, 480);
            this.bgCtx.clearRect(0, 0, 840, 480);
            this.bgCanvas.style.background = "#282828";
            this.particles.forEach(p => { p.update(); p.draw(this.bgCtx); });
            this.mainCtx.save();
            this.mainCtx.fillStyle = "#aad69c";
            this.mainCtx.font = "bold 60px Silkscreen";
            this.mainCtx.textAlign = "center";
            if (this.lives > 0) {
                this.mainCtx.fillText("You Win!", 420, 150);
                this.mainCtx.fillText("High Score: " + this.playerScore.toString().padStart(5, "0"), 420, 250);
            } else {
                this.mainCtx.fillText("Game Over!", 420, 120);
                this.mainCtx.fillText("Score: " + this.playerScore.toString().padStart(5, "0"), 420, 220);
                this.mainCtx.font = "bold 50px Silkscreen"
                this.mainCtx.fillText("Better Luck Next Time", 420, 320);
            }
            this.mainCtx.restore();
            const exit = document.getElementById("exit");
            if (exit) exit.style.display = "block";
            const pause = document.getElementById("pause-button");
            if (pause) pause.style.visibility = "hidden";
        }

        requestAnimationFrame((t) => this.animate(t));
    }

    drawMainScreen() {
        this.mainCtx.clearRect(0, 0, 840, 480);
        this.bgCtx.clearRect(0, 0, 840, 480);
        this.bgCanvas.style.background = "#282828";
        this.particles.forEach(p => { p.update(); p.draw(this.bgCtx); });
        this.mainCtx.drawImage(this.assets.logo, 0, 0, 1190, 430, 100, 100, 640, 245);
    }

    start() { this.isMainScreen = false; document.getElementById("play").style.display = "none"; document.getElementById("pause-button").style.visibility = "visible"; }
    nextLevel(num, isDark) { this.currentLevel = new Level(this, num, isDark); }
    checkCollision(r1, r2) { return (r1.x < r2.x + r2.width && r1.x + r1.width > r2.x && r1.y < r2.y + r2.height && r1.height + r1.y > r2.y); }
}
