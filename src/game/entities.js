
export class Hitbox {
    constructor(game, x, y, width, height, offsetX, offsetY, immune) {
        this.game = game;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.x = x + this.offsetX;
        this.y = y + this.offsetY;
        this.width = width;
        this.height = height;
        this.immune = immune;
    }
    update(x, y) {
        this.x = x + this.offsetX;
        this.y = y + this.offsetY;
    }
    draw() {
        // ctx.fillStyle = "red";
        // if (this.immune) ctx.fillStyle = "blue";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export class Shield {
    constructor(game, player) {
        this.game = game;
        this.player = player;
        this.image = game.assets.mainSprites;
        this.x = this.player.x - 20;
        this.y = this.player.y - 20;
        this.width = 130;
        this.height = 110;
        this.spriteSize = 150;
        this.maxFrames = 2;
        this.frameXStart = 2;
        this.frameY = 0;
        this.frameX = this.frameXStart;
        this.spriteTimer = 0;
        this.spriteInterval = 150;
    }
    update(deltaTime) {
        this.frameXStart = this.game.isLevelDark ? 4 : 2;
        this.x = this.player.x - 20;
        this.y = this.player.y - 20;
        if (this.spriteTimer > this.spriteInterval) {
            this.frameX++;
            if (this.frameX - this.frameXStart >= this.maxFrames) this.frameX = this.frameXStart;
            this.spriteTimer = 0;
        } else this.spriteTimer += deltaTime;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, this.x, this.y, 130, 110);
    }
}

export class Player {
    constructor(game) {
        this.game = game;
        this.image = game.assets.mainSprites;
        this.width = 100;
        this.height = 70;
        this.x = 20;
        this.y = 220;
        this.speedX = 2.5;
        this.speedY = 3;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteSize = 150;
        this.hit = false;
        this.delete = false;
        this.hitbox = new Hitbox(game, this.x, this.y, this.width - 10, this.height - 20, 0, 10, false);
        this.shield = new Shield(game, this);
        this.shieldOn = true;
        this.shieldInterval = 4000;
        this.shieldTimer = 0;
    }
    update(deltaTime) {
        this.frameX = this.game.isLevelDark ? 1 : 0;
        if (this.shieldTimer <= this.shieldInterval) {
            this.shieldTimer += deltaTime;
            this.shield.update(deltaTime);
        } else this.shieldOn = false;
        this.hitbox.update(this.x, this.y);
        if (this.game.keys.ArrowLeft.pressed && this.x >= 0) this.x -= this.speedX;
        if (this.game.keys.ArrowRight.pressed && this.x <= this.game.mainCanvas.width - this.width) this.x += this.speedX;
        if (this.game.keys.ArrowUp.pressed && this.y >= 50) this.y -= this.speedY;
        if (this.game.keys.ArrowDown.pressed && this.y <= this.game.mainCanvas.height - this.height) this.y += this.speedY;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.width, this.height, this.x, this.y, this.width, this.height);
        if (this.shieldOn) this.shield.draw(ctx);
    }
}

export class Projectile {
    constructor(game, isPlayer, object) {
        this.game = game;
        this.object = object;
        this.isPlayer = isPlayer;
        this.width = 20;
        this.height = 10;
        if (isPlayer) {
            this.x = this.object.x + this.object.width;
            this.y = this.object.y + this.object.height * 0.5 - this.height * 0.5;
            this.speed = 3;
        } else {
            this.x = this.object.x;
            this.y = this.object.y + this.object.height * 0.5 - this.height * 0.5;
            this.speed = -object.speedX - 1;
        }
        this.delete = false;
    }
    update() {
        this.x += this.speed;
        if (this.x >= this.game.mainCanvas.width || this.x < 0) this.delete = true;
    }
    draw(ctx) {
        ctx.fillStyle = this.game.isLevelDark ? "#aad69c" : "#282828";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export class Explosion {
    constructor(game, x, y) {
        this.game = game;
        this.image = game.assets.mainSprites;
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.spriteSize = 150;
        this.maxFrames = 5;
        this.frames = 1;
        this.staggeredFrames = 5;
        this.frameX = 0;
        this.frameY = this.game.isLevelDark ? 9 : 8;
        this.delete = false;
    }
    update() {
        if (this.frames % this.staggeredFrames === 0) {
            this.frameX++;
            this.frames = 1;
        } else this.frames++;
        if (this.frameX >= this.maxFrames) this.delete = true;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}

export class Missile {
    constructor(game, level) {
        this.game = game;
        this.image = game.assets.mainSprites;
        this.spriteX = 900;
        this.spriteY = game.isLevelDark ? 150 : 0;
        this.level = level;
        this.width = 50;
        this.height = 30;
        this.x = this.level.player.x + this.level.player.width;
        this.y = this.level.player.y + this.level.player.height * 0.5 - this.height * 0.5;
        this.targetSet = false;
        this.target = null;
        this.speedX = 3;
        this.speedY = 0;
        this.delete = false;
        this.damage = 50;
        this.specialType = "missile";
        this.hit = false;
    }
    update() {
        if (!this.targetSet) {
            this.level.enemies.forEach(enemy => {
                if (enemy.x > this.x + 40 && !this.targetSet) {
                    this.target = enemy;
                    this.targetSet = true;
                    this.speedX = 4;
                }
            });
        }
        if (this.target != null) {
            if (this.target.delete || this.target.x + this.target.width < this.x) {
                this.targetSet = false;
                this.speedX = 3;
            }
            if (this.y >= this.target.y + this.target.height * 0.5) this.speedY = -5;
            else if (this.y + this.height * 0.5 <= this.target.y) this.speedY = 5;
            else this.speedY = 0;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x >= 840) this.delete = true;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}

export class Laser {
    constructor(game, level) {
        this.game = game;
        this.level = level;
        this.x = this.level.player.x + this.level.player.width;
        this.y = this.level.player.y + this.level.player.height * 0.5 - 5;
        this.width = 600;
        this.height = 10;
        this.duration = 500;
        this.timer = 0;
        this.delete = false;
        this.hit = false;
        this.damage = 100;
        this.specialType = "laser";
    }
    update(deltaTime) {
        if (this.timer < this.duration) {
            this.timer += deltaTime;
        } else this.delete = true;
    }
    draw(ctx) {
        ctx.fillStyle = this.game.isLevelDark ? "#aad69c" : "#282828";
        ctx.fillRect(this.x, this.y - 10, 10, 10);
        ctx.fillRect(this.x, this.y + 10, 10, 10);
        ctx.fillRect(this.x + 10, this.y, this.width, this.height);
    }
}

export class Wall {
    constructor(game, level) {
        this.game = game;
        this.level = level;
        this.x = this.level.player.x + this.level.player.width;
        this.y = 50;
        this.width = 10;
        this.height = 430;
        this.speed = 4;
        this.hit = false;
        this.delete = false;
        this.damage = 100;
        this.specialType = "wall";
    }
    update() {
        this.x += this.speed;
        if (this.x > 840) this.delete = true;
    }
    draw(ctx) {
        ctx.fillStyle = this.game.isLevelDark ? "#aad69c" : "#282828";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export class PowerUp {
    constructor(game, x, y, speedX, speedY, movement, range, xbreak) {
        this.game = game; this.image = game.assets.mainSprites; this.isPowerUp = true; this.width = 80; this.height = 70; this.x = x; this.y = y; this.spriteSize = 150; this.maxFrames = 2; this.frameXStart = 4; this.frameY = game.isLevelDark ? 7 : 6; this.frameX = 4; this.delete = false; this.speedX = speedX; this.speedY = speedY; this.movement = movement; this.range = range; this.xbreak = xbreak; this.angle = 0; this.spriteTimer = 0; this.spriteInterval = 300; this.hit = false;
        const r = Math.random(); if (r < 0.25) this.powerup = "life"; else if (r < 0.5) this.powerup = "missile"; else if (r < 0.75) this.powerup = "laser"; else this.powerup = "wall";
    }
    update(dt) {
        if (this.spriteTimer > this.spriteInterval) { this.frameX++; if (this.frameX - 4 >= this.maxFrames) this.frameX = 4; this.spriteTimer = 0; } else this.spriteTimer += dt;
        if (this.movement === "wave") { this.x -= this.speedX; this.y = this.xbreak + this.range * Math.sin(this.angle); this.angle += this.speedY; } else this.x -= this.speedX;
        if (this.x + this.width < 0) this.delete = true;
    }
    draw(ctx) { ctx.drawImage(this.image, this.frameX * 150, this.frameY * 150, 80, 70, this.x, this.y, 80, 70); }
}

export class Particle {
    constructor(game) {
        this.game = game; this.initialX = Math.floor(Math.random() * 440) + 200; this.initialY = Math.floor(Math.random() * 280) + 100; this.x = this.initialX; this.y = this.initialY; this.speedX = Math.abs(420 - this.x) * 0.0025; this.speedY = Math.random() * 0.3; if (this.initialX <= 420) this.speedX *= -1; if (this.initialY <= 240) this.speedY *= -1; this.radius = Math.random() * 2; this.color = "white"; this.opacity = 0.001; this.increase = Math.random() * 0.01 + 0.001;
    }
    update() { this.x += this.speedX; this.y += this.speedY; this.opacity += this.increase; if (this.x < 0 || this.x > 840 || this.y < 0 || this.y > 480) { this.x = this.initialX; this.y = this.initialY; this.opacity = 0.001; } }
    draw(ctx) { ctx.save(); ctx.globalAlpha = this.opacity; ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fillStyle = "white"; ctx.fill(); ctx.restore(); }
}

export class UI {
    constructor(game) { this.game = game; this.image = game.assets.mainSprites; }
    draw(ctx) {
        const heartY = this.game.isLevelDark ? 4 : 3;
        for (let i = 0; i < this.game.lives; i++) ctx.drawImage(this.image, 900, heartY * 150, 50, 40, i * 55 + 5, 5, 50, 40);
        let sy = 0; if (this.game.specialAtttack === "laser") sy = 5; else if (this.game.specialAtttack === "wall") sy = 7; if (this.game.isLevelDark) sy++;
        ctx.drawImage(this.image, 900, sy * 150, 50, 40, 400, 10, 50, 40);
        ctx.save(); ctx.fillStyle = this.game.isLevelDark ? "#aad69c" : "#282828"; ctx.font = "bold 52px Silkscreen"; ctx.fillText(this.game.specialCount.toString().padStart(2, "0"), 460, 45); ctx.fillText(this.game.playerScore.toString().padStart(5, "0"), 600, 45); ctx.restore();
    }
}
