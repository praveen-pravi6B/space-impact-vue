

import { Hitbox } from './entities.js';


export class Background {
    constructor(game, level, frameX) { this.game = game; this.level = level; this.frameX = frameX; this.speed = 0; this.hitbox = []; }
    update(dt) { if (!this.level.bgStop) { this.speed = 0.105 * dt; this.x -= this.speed; } this.hitbox.forEach(hb => hb.update(this.x, this.y)); if (this.x + this.width < 0) this.delete = true; }
    draw(ctx) { ctx.drawImage(this.image, this.frameX * this.spriteSize, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height); }
}

export class Background2 extends Background { constructor(g, l, f, i) { super(g, l, f); this.image = g.assets.bgSprites1; this.spriteY = 0; this.spriteSize = 400; this.width = 320; this.height = [160, 80, 60][f]; this.x = 320 * i; this.y = 480 - this.height; this.delete = false; } }
export class Background3 extends Background {
    constructor(g, l, f, i) {
        super(g, l, f); this.image = g.assets.bgSprites1; this.spriteY = 200; this.spriteSize = 400; this.width = 320; this.x = 320 * i;
        if (f === 0) { this.height = 70; this.y = 410; this.hitbox.push(new Hitbox(g, this.x, this.y, 320, 60, 0, 10, false)); }
        else if (f === 1) { this.height = 80; this.y = 400; this.hitbox.push(new Hitbox(g, this.x, this.y, 320, 60, 0, 20, false)); }
        else if (f === 2) { this.height = 160; this.y = 320; this.hitbox.push(new Hitbox(g, this.x, this.y, 60, 60, 0, 100, false), new Hitbox(g, this.x, this.y, 30, 130, 60, 30, false), new Hitbox(g, this.x, this.y, 100, 150, 90, 10, false), new Hitbox(g, this.x, this.y, 60, 120, 230, 40, false)); }
    }
}
export class Background4 extends Background {
    constructor(g, l, f, i) {
        super(g, l, f); this.image = g.assets.bgSprites1; this.spriteY = 400; this.spriteSize = 400; this.width = 320; this.x = 320 * i;
        if (f === 0) { this.height = 70; this.y = 410; this.hitbox.push(new Hitbox(g, this.x, this.y, 320, 50, 0, 20, false)); }
        else if (f === 1) { this.height = 80; this.y = 400; this.hitbox.push(new Hitbox(g, this.x, this.y, 320, 60, 0, 20, false)); }
        else if (f === 2) { this.height = 160; this.y = 320; this.hitbox.push(new Hitbox(g, this.x, this.y, 320, 60, 0, 100, false), new Hitbox(g, this.x, this.y, 60, 150, 100, 10, false)); }
    }
}
export class Background5 extends Background { constructor(g, l, f, i) { super(g, l, f); this.image = g.assets.bgSprites1; this.spriteY = 600; this.spriteSize = 400; this.width = 320; this.x = 320 * i; this.y = 50; this.height = [170, 80, 50][f]; this.hitbox.push(new Hitbox(g, this.x, this.y, 280, this.height - 5, 20, 0, false)); } }
export class Background7 extends Background { constructor(g, l, f, i) { super(g, l, f); this.image = g.assets.bgSprites2; this.spriteY = 0; this.spriteSize = 400; this.width = 2800; this.height = 160; this.x = 2800 * i; this.y = 320; this.hitbox = [new Hitbox(g, this.x, 430, 2800, 50, 0, 110, false), new Hitbox(g, this.x, 320, 60, 150, 1880, 10, false), new Hitbox(g, this.x, 320, 60, 150, 2200, 10, false)]; } }
export class Background8 extends Background { constructor(g, l, f, i) { super(g, l, f); this.image = g.assets.bgSprites2; this.spriteY = 200; this.spriteSize = 400; this.width = 2800; this.height = 160; this.x = 2800 * i; this.y = 320; this.hitbox = [new Hitbox(g, this.x, 430, 2800, 50, 0, 110, false), new Hitbox(g, this.x, 320, 110, 100, 670, 60, false), new Hitbox(g, this.x, 320, 100, 150, 780, 10, false), new Hitbox(g, this.x, 320, 110, 100, 990, 60, false), new Hitbox(g, this.x, 320, 100, 150, 1100, 10, false), new Hitbox(g, this.x, 320, 110, 100, 1950, 60, false), new Hitbox(g, this.x, 320, 100, 150, 2060, 10, false)]; } }
