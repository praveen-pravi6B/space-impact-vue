
import { Projectile, Explosion, Hitbox } from './entities.js';

export class Enemy {
  constructor(game, level, hp, x, y, shoots, speedX, speedY, movement, range, xbreak) {
    this.game = game;
    this.level = level;
    this.image = game.assets.mainSprites;
    this.x = x;
    this.y = y;
    this.spriteSize = 150;
    this.hp = hp;
    this.score = this.hp;
    this.shoots = shoots;
    this.speedX = speedX;
    this.speedY = speedY;
    this.movement = movement;
    this.range = range;
    this.xbreak = xbreak;
    this.delete = false;
    this.angle = 0;
    this.spriteTimer = 0;
    this.spriteInterval = Math.floor(Math.random() * 80) + 120;
    this.fireTimer = 0;
    this.fireInteval = Math.floor(Math.random() * 2000) + 1000;
    this.hit = false;
  }
  update(deltaTime) {
    if (this.spriteTimer > this.spriteInterval) {
      this.frameX++;
      if (this.frameX - this.frameXStart >= this.maxFrames) this.frameX = this.frameXStart;
      this.spriteTimer = 0;
    } else this.spriteTimer += deltaTime;

    if (this.shoots) {
      if (this.fireTimer > this.fireInteval) {
        this.level.enemyProjectiles.push(new Projectile(this.game, false, this));
        this.fireTimer = 0;
      } else this.fireTimer += deltaTime;
    }

    switch (this.movement) {
      case "wave":
        this.x -= this.speedX;
        this.y = this.xbreak + this.range * Math.sin(this.angle);
        this.angle += this.speedY;
        break;
      case "zigzag":
        this.x -= this.speedX;
        if (this.x < this.xbreak && this.x >= this.range) this.y += this.speedY;
        break;
      case "mini1":
      case "mini2":
        if (this.x > this.xbreak) this.x -= this.speedX;
        else {
          const limit = this.movement === "mini1" ? [70, 330] : [150, 430];
          if (this.y > limit[1] || this.y < limit[0]) this.speedY *= -1;
          this.y += this.speedY;
        }
        break;
      default:
        this.x -= this.speedX;
    }
    if (this.x + this.width < 0) this.delete = true;
  }
  draw(ctx) {
    ctx.drawImage(this.image, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.width, this.height, this.x, this.y, this.width, this.height);
  }
}

export class Meteor extends Enemy {
  constructor(...args) { super(...args); this.width = 100; this.height = 50; this.maxFrames = 2; this.frameXStart = 0; this.frameX = 0; this.frameY = 1; }
}

export class Triship extends Enemy {
  constructor(...args) { super(...args); this.width = 60; this.height = 70; this.maxFrames = 2; this.frameXStart = this.game.isLevelDark ? 4 : 2; this.frameX = this.frameXStart; this.frameY = 1; }
}

export class Squid extends Enemy {
  constructor(...args) { super(...args); this.width = 80; this.height = 50; this.maxFrames = 1; this.frameXStart = this.game.isLevelDark ? 1 : 0; this.frameX = this.frameXStart; this.frameY = 2; }
}

export class Shuttle extends Enemy {
  constructor(...args) { super(...args); this.width = 90; this.height = 50; this.maxFrames = 1; this.frameXStart = this.game.isLevelDark ? 3 : 2; this.frameX = this.frameXStart; this.frameY = 2; }
}

export class Saucer extends Enemy {
  constructor(...args) { super(...args); this.width = 90; this.height = 50; this.maxFrames = 1; this.frameXStart = this.game.isLevelDark ? 5 : 4; this.frameX = this.frameXStart; this.frameY = 2; }
}

export class Tadpole extends Enemy {
  constructor(...args) { super(...args); this.width = 90; this.height = 50; this.maxFrames = 2; this.frameXStart = this.game.isLevelDark ? 2 : 0; this.frameX = this.frameXStart; this.frameY = 3; }
}

export class Kraken extends Enemy {
  constructor(...args) { super(...args); this.width = 70; this.height = 80; this.maxFrames = 1; this.frameXStart = this.game.isLevelDark ? 5 : 4; this.frameX = this.frameXStart; this.frameY = 3; }
}

export class Marble1 extends Enemy {
  constructor(...args) { super(...args); this.width = 50; this.height = 50; this.maxFrames = 1; this.frameXStart = 0; this.frameX = 0; this.frameY = 4; }
}

export class Marble2 extends Enemy {
  constructor(...args) { super(...args); this.width = 50; this.height = 40; this.maxFrames = 1; this.frameXStart = this.game.isLevelDark ? 2 : 1; this.frameX = this.frameXStart; this.frameY = 4; }
}

export class Marble3 extends Enemy {
  constructor(...args) { super(...args); this.width = 50; this.height = 30; this.maxFrames = 1; this.frameXStart = this.game.isLevelDark ? 4 : 3; this.frameX = this.frameXStart; this.frameY = 4; }
}

export class Beetle extends Enemy {
  constructor(...args) { super(...args); this.width = 80; this.height = 50; this.maxFrames = 2; this.frameXStart = this.game.isLevelDark ? 2 : 0; this.frameX = this.frameXStart; this.frameY = 5; }
}

export class Rock extends Enemy {
  constructor(...args) { super(...args); this.width = 70; this.height = 70; this.maxFrames = 1; this.frameXStart = 4; this.frameX = 4; this.frameY = 5; }
}

export class Flipper extends Enemy {
  constructor(...args) { super(...args); this.width = 60; this.height = 60; this.maxFrames = 2; this.frameXStart = this.game.isLevelDark ? 2 : 0; this.frameX = this.frameXStart; this.frameY = 6; }
}

export class Dragonfly extends Enemy {
  constructor(...args) { super(...args); this.width = 100; this.height = 50; this.maxFrames = 2; this.frameXStart = this.game.isLevelDark ? 2 : 0; this.frameX = this.frameXStart; this.frameY = 7; }
}

export class EnemyMissile {
  constructor(game, level, boss) {
    this.game = game; this.level = level; this.boss = boss; this.x = boss.x; this.y = boss.y + boss.height * 0.5; this.width = 50; this.height = 30; this.target = level.player; this.speedX = 3; this.speedY = 0; this.delete = false;
  }
  update() {
    if (this.y >= this.target.y + this.target.height * 0.5) this.speedY = -3; else if (this.y + this.height * 0.5 <= this.target.y) this.speedY = 3; else this.speedY = 0;
    this.x -= this.speedX; this.y += this.speedY; if (this.x + this.width < 0) this.delete = true;
  }
  draw(ctx) { ctx.fillStyle = "#282828"; ctx.fillRect(this.x, this.y + 10, 10, 10); ctx.fillRect(this.x + 10, this.y, 20, 30); ctx.fillRect(this.x + 30, this.y + 10, 10, 10); ctx.fillRect(this.x + 40, this.y, 10, 30); }
}

export class Torpedo {
  constructor(game, x, y, offsetX, offsetY) {
    this.game = game; this.image = game.assets.mainSprites; this.offsetX = offsetX; this.offsetY = offsetY; this.width = 70; this.height = 50; this.x = x + offsetX; this.y = y + offsetY; this.delete = false; this.hp = 150; this.torpToggle = true;
  }
  update(x) { if (this.hp <= 0) this.x -= 7; else this.x = x + this.offsetX; if (this.x + this.width < 0) this.delete = true; }
  draw(ctx) { ctx.drawImage(this.image, 900, 300, 70, 50, this.x, this.y, 70, 50); }
}

export class Boss {
  constructor(game, level) {
    this.game = game; this.level = level; this.image = game.assets.bossSprites; this.isBoss = true; this.spriteTimer = 0; this.spriteInterval = 200; this.fireTimer = 0; this.spriteSize = 400; this.frameX = 0; this.maxFrames = 2; this.speedX = 2; this.speedY = 1.5; this.supportEnemies = []; this.chargeType = 0; this.xMin = 20; this.charge = false; this.retreat = false; this.chargeTimer = 0; this.chargeInterval = 9000; this.support = false; this.delete = false;
  }
  update(deltaTime) {
    if (this.spriteTimer > this.spriteInterval) { this.frameX++; if (this.frameX >= this.maxFrames) this.frameX = 0; this.spriteTimer = 0; } else this.spriteTimer += deltaTime;
    if (this.fireTimer > this.fireInteval) { this.level.enemyProjectiles.push(new Projectile(this.game, false, this)); this.fireTimer = 0; } else this.fireTimer += deltaTime;
    if (!this.charge && !this.retreat) { if (this.x > this.xbreak + 1) this.x -= this.speedX; else if (this.x < this.xbreak - 1) this.x += this.speedX; else { if (this.y + this.height >= this.yMax || this.y <= this.yMin) this.speedY *= -1; this.y += this.speedY; } }
    if (this.chargeTimer > this.chargeInterval) { switch (this.chargeType) { case 1: this.charge = true; break; case 2: this.retreat = true; break; } this.chargeTimer = 0; } else this.chargeTimer += deltaTime;
    if (this.retreat) this.retreatMovement(); if (this.charge) this.chargeMovement();
    this.hitbox.forEach(hb => hb.update(this.x, this.y));
    if (this.support) {
      if (this.supportTimer >= this.supportInterval) { this.supportGen(); this.supportTimer = 0; } else this.supportTimer += deltaTime;
      this.supportEnemies.forEach((e, i) => {
        this.level.playerProjectiles.concat(this.level.playerSpecial).forEach(p => {
          if (this.game.checkCollision(p, e)) {
            if (p.damage) { e.delete = true; this.level.explosions.push(new Explosion(this.game, e.x, e.y)); if (p.specialType === "missile") p.delete = true; }
            else { e.hp -= 10; if (e.hp <= 0) e.delete = true; p.delete = true; }
          }
        });
        if (this.level.player.shieldOn && this.game.checkCollision(this.level.player.shield, e)) { e.delete = true; this.level.explosions.push(new Explosion(this.game, e.x, e.y)); }
        else if (this.game.checkCollision(this.level.player, e) && !this.level.player.hit) { this.level.player.hit = true; this.level.explosions.push(new Explosion(this.game, e.x, e.y)); e.delete = true; this.level.playerDead(); }
        e.update(deltaTime); if (e.delete) this.supportEnemies.splice(i, 1);
      });
    }
  }
  chargeMovement() { if (this.x > this.xMin) this.x -= 4; else this.charge = false; }
  retreatMovement() { if (this.x <= 840) this.x += 2; else { this.retreat = false; this.charge = true; this.y = this.chargeY; } }
  draw(ctx) { ctx.drawImage(this.image, this.frameX * this.spriteSize, this.frameY * this.spriteSize, 400, 400, this.x, this.y, this.width, this.height); if (this.support) this.supportEnemies.forEach(e => e.draw(ctx)); }
}

export class Boss1 extends Boss { constructor(g, l) { super(g, l); this.width = 200; this.height = 230; this.x = 840; this.y = 120; this.hitbox = [new Hitbox(g, this.x, this.y, 150, 200, 50, 0, false)]; this.xbreak = 550; this.hp = 200; this.score = 100; this.frameY = 0; this.yMin = 50; this.yMax = 480; this.fireInteval = 1500; } }
export class Boss2 extends Boss { constructor(g, l) { super(g, l); this.width = 230; this.height = 210; this.x = 840; this.y = 120; this.hitbox = [new Hitbox(g, this.x, this.y, 180, 200, 50, 0, false)]; this.xbreak = 550; this.hp = 200; this.score = 100; this.frameY = 1; this.yMin = 50; this.yMax = 480; this.fireInteval = 1500; } }
export class Boss3 extends Boss { constructor(g, l) { super(g, l); this.width = 220; this.height = 200; this.x = 840; this.y = 120; this.hitbox = [new Hitbox(g, this.x, this.y, 210, 190, 10, 10, false)]; this.xbreak = 500; this.hp = 300; this.score = 100; this.frameY = 2; this.yMin = 50; this.yMax = 340; this.fireInteval = 1500; this.chargeType = 1; } }
export class Boss4 extends Boss {
  constructor(g, l) { super(g, l); this.width = 150; this.height = 250; this.x = 840; this.y = 120; this.hitbox = [new Hitbox(g, this.x, this.y, 150, 70, 0, 0, false), new Hitbox(g, this.x, this.y, 100, 140, 50, 70, false)]; this.xbreak = 550; this.hp = 250; this.score = 100; this.frameY = 3; this.yMin = 50; this.yMax = 450; this.fireInteval = 1500; this.support = true; this.supportTimer = 0; this.supportInterval = 3000; }
  supportGen() { this.level.enemyProjectiles.push(new EnemyMissile(this.game, this.level, this)); }
}
export class Boss5 extends Boss {
  constructor(g, l) { super(g, l); this.width = 190; this.height = 210; this.x = 840; this.y = 220; this.hitbox = [new Hitbox(g, this.x, this.y, 180, 200, 10, 10, false)]; this.xbreak = 500; this.hp = 350; this.score = 100; this.frameY = 4; this.yMin = 210; this.yMax = 480; this.fireInteval = 1500; this.chargeType = 1; this.support = true; this.supportTimer = 0; this.supportInterval = 4000; }
  supportGen() { this.supportEnemies.push(new Beetle(this.game, this.level, 20, this.x, this.y + Math.random() * (this.height - 50), false, 3, 0, "linear", 0, 0)); }
}
export class Boss6 extends Boss {
  constructor(g, l) { super(g, l); this.width = 200; this.height = 190; this.x = 840; this.y = 220; this.hitbox = [new Hitbox(g, this.x, this.y, 170, 190, 30, 0, false)]; this.xbreak = 500; this.hp = 350; this.score = 100; this.frameY = 5; this.yMin = 140; this.yMax = 480; this.fireInteval = 1500; this.speedX = 3; this.chargeY = 270; this.chargeInterval = 12000; this.chargeType = 2; this.support = true; this.supportTimer = 0; this.supportInterval = 4000; }
  supportGen() { this.supportEnemies.push(new Tadpole(this.game, this.level, 20, this.x, this.y + Math.random() * (this.height - 50), false, 3, 0, "linear", 0, 0)); }
}
export class Boss7 extends Boss {
  constructor(g, l) { super(g, l); this.width = 300; this.height = 250; this.x = 840; this.y = 120; this.hitbox = [new Hitbox(g, this.x, this.y, 280, 120, 20, 10, false), new Hitbox(g, this.x, this.y, 220, 230, 80, 10, false), new Hitbox(g, this.x, this.y, 300, 50, 0, 200, false)]; this.xbreak = 550; this.hp = 300; this.score = 100; this.frameY = 6; this.yMin = 50; this.yMax = 400; this.fireInteval = 1500; this.chargeY = 60; this.chargeInterval = 12000; this.chargeType = 2; this.support = true; this.supportTimer = 0; this.supportInterval = 4000; }
  supportGen() { this.supportEnemies.push(new Flipper(this.game, this.level, 20, this.x, this.y + Math.random() * (this.height - 60), false, 3, 0, "linear", 0, 0)); }
}
export class Boss8 extends Boss {
  constructor(g, l) { super(g, l); this.width = 380; this.height = 380; this.x = 840; this.y = 50; this.hitbox = [new Hitbox(g, this.x, this.y, 360, 120, 20, 10, true), new Hitbox(g, this.x, this.y, 100, 60, 100, 130, true), new Hitbox(g, this.x, this.y, 100, 60, 100, 220, true), new Hitbox(g, this.x, this.y, 90, 100, 210, 150, false)]; this.xbreak = 460; this.hp = 250; this.score = 100; this.frameY = 7; this.fireTimer = 0; this.fireInteval = 3000; this.torpedoes = [new Torpedo(g, this.x, this.y, 50, 150), new Torpedo(g, this.x, this.y, 30, 220)]; this.retreat = false; this.retreatTimer = 0; this.retreatInterval = 6000; this.retreatFire = false; }
  update(dt) {
    super.update(dt);
    this.torpedoes.forEach((torp, i) => {
      this.level.playerProjectiles.concat(this.level.playerSpecial).forEach(p => { if (this.game.checkCollision(p, torp)) { if (p.damage) { if (!p.hit) { p.hit = true; if (p.specialType === "missile") { p.delete = true; torp.hp -= 30; } else torp.hp -= 50; } } else { torp.hp -= 5; p.delete = true; } } });
      torp.update(this.x); if (torp.delete) this.torpedoes.splice(i, 1);
    });
    if (this.fireTimer >= this.fireInteval && !this.retreat) { this.supportEnemies.push(new Triship(this.game, this.level, 30, this.x, 240, false, 3, 0, "linear", 0, 0)); this.fireTimer = 0; }
    if (this.torpedoes.length === 0) {
      if (this.retreatTimer > this.retreatInterval && !this.retreat) { this.retreat = true; this.retreatTimer = 0; }
      if (this.retreat && this.x <= 840) this.x += 2;
      else if (!this.retreatFire && this.retreat) { [60, 120, 180, 240].forEach(y => { this.supportEnemies.push(new Dragonfly(this.game, this.level, 40, 1040, y, false, 4, 0, "linear", 0, 0)); this.supportEnemies.push(new Dragonfly(this.game, this.level, 40, 1150, y, false, 4, 0, "linear", 0, 0)); }); this.retreatFire = true; }
      if (this.retreat && this.retreatTimer > this.retreatInterval) { this.retreat = false; this.retreatFire = false; this.retreatTimer = 0; }
      this.retreatTimer += dt;
    }
  }
  draw(ctx) { super.draw(ctx); this.torpedoes.forEach(torp => torp.draw(ctx)); }
}
