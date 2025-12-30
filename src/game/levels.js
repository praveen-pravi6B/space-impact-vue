// Modular Level Configuration for Space Impact Vue
import * as E from './enemies.js';
import { PowerUp } from './entities.js';

export const bgArray2 = [0, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 0, 1, 1, 2];
export const bgArray3 = [0, 1, 2, 2, 1, 0, 2, 0, 1, 2, 1, 0, 2, 0, 2, 1, 0, 1, 2, 0, 1];
export const bgArray4 = [0, 1, 2, 2, 1, 0, 2, 0, 1, 2, 1, 0, 2, 0, 2, 1, 0, 1, 2, 2, 1, 0, 2, 0, 1, 0];
export const bgArray5 = [0, 1, 2, 2, 0, 2, 1, 1, 0, 1, 0, 0, 1, 1, 2, 1, 0, 1, 2, 2, 0, 2, 1, 1, 0, 1, 0, 0];
export const bgArray6 = [2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 2, 2, 1, 1, 0, 0, 1, 1];
export const bgArray7 = [0, 0, 0];
export const bgArray8 = [0];

export const getEnemiesLvl1 = (g, l) => [
  { time: 2000, object: [new E.Meteor(g, l, 10, 840, 80, false, 3.5, 0, "linear"), new E.Meteor(g, l, 10, 1040, 80, false, 3.5, 0, "linear"), new E.Meteor(g, l, 10, 1240, 80, false, 3.5, 0, "linear")] },
  { time: 5000, object: [new E.Meteor(g, l, 10, 840, 200, false, 3.5, 0, "linear"), new E.Meteor(g, l, 10, 1040, 200, false, 3.5, 0, "linear")] },
  { time: 8000, object: [new E.Meteor(g, l, 10, 840, 200, false, 2, 0, "linear"), new E.Meteor(g, l, 10, 1040, 200, false, 2, 0, "linear")] },
  { time: 12000, object: [new E.Meteor(g, l, 10, 840, 300, false, 3, 0, "linear"), new E.Meteor(g, l, 10, 1040, 300, false, 3, 0, "linear"), new E.Meteor(g, l, 10, 1240, 300, false, 3, 0, "linear")] },
  { time: 15000, object: [new E.Meteor(g, l, 25, 840, 80, false, 3, 0, "linear"), new PowerUp(g, 950, 70, 3, 0, "linear"), new E.Meteor(g, l, 25, 1120, 80, false, 3, 0, "linear")] },
  { time: 21000, object: [new E.Triship(g, l, 15, 840, 50, false, 2, 1.5, "zigzag", 300, 620), new E.Triship(g, l, 15, 960, 200, false, 2, 0.03, "wave", 120, 200), new E.Triship(g, l, 15, 1080, 50, false, 2, 1.5, "zigzag", 300, 620), new E.Triship(g, l, 15, 1200, 200, false, 2, 0.03, "wave", 120, 200), new E.Triship(g, l, 15, 1320, 50, false, 2, 1.5, "zigzag", 300, 620), new E.Triship(g, l, 15, 1440, 200, false, 2, 0.03, "wave", 120, 200)] },
  { time: 35500, object: [new E.Squid(g, l, 10, 840, 280, false, 3, 0, "linear")] },
  { time: 41000, object: [new E.Squid(g, l, 10, 840, 200, true, 2, 0.03, "wave", 120, 200)] },
  { time: 49000, object: [new E.Squid(g, l, 10, 840, 50, true, 3, 2, "zigzag", 300, 620), new E.Squid(g, l, 10, 1040, 50, true, 3, 2, "zigzag", 300, 620)] },
  { time: 57000, object: [new PowerUp(g, 840, 280, 3, 0, "linear")] },
  { time: 61000, object: [new E.Shuttle(g, l, 15, 840, 50, false, 3, 0, "linear"), new E.Shuttle(g, l, 15, 1000, 110, false, 2, 0, "linear")] },
  { time: 68000, object: [new E.Boss1(g, l)] }
];

export const getEnemiesLvl2 = (g, l) => [
  { time: 2000, object: [new E.Triship(g, l, 15, 840, 50, false, 2, 1, "zigzag", 300, 780), new E.Triship(g, l, 15, 840, 300, false, 2, -1, "zigzag", 300, 780)] },
  { time: 8000, object: [new E.Saucer(g, l, 20, 840, 100, false, 2, 0.03, "wave", 50, 100), new E.Saucer(g, l, 20, 840, 340, false, 2, 0.03, "wave", 50, 340)] },
  { time: 9000, object: [new PowerUp(g, 840, 220, 3, 0, "linear")] },
  { time: 13000, object: [new E.Squid(g, l, 15, 840, 50, true, 2, 1, "zigzag", 250, 780), new E.Squid(g, l, 15, 1200, 130, true, 3, 0.07, "wave", 40, 130)] },
  { time: 21000, object: [new E.Squid(g, l, 15, 840, 240, false, 3, 0, "linear"), new E.Squid(g, l, 15, 940, 170, false, 3, 0, "linear")] },
  { time: 38000, object: [new E.Boss2(g, l)] }
];

export const getEnemiesLvl3 = (g, l) => [
  { time: 2000, object: [new E.Tadpole(g, l, 15, 840, 50, true, 2, 1, "zigzag", 250, 750), new E.Tadpole(g, l, 1020, 50, true, 2, 1, "zigzag", 250, 750)] },
  { time: 8000, object: [new E.Squid(g, l, 15, 840, 200, false, 3.5, 0, "linear"), new E.Squid(g, l, 15, 1040, 300, false, 3.5, 0, "linear")] },
  { time: 16000, object: [new E.Saucer(g, l, 15, 840, 280, false, 4, 0, "linear"), new PowerUp(g, 1340, 280, 4, 0, "linear")] },
  { time: 24000, object: [new E.Triship(g, l, 15, 840, 100, true, 3, 0.05, "wave", 50, 100), new E.Triship(g, l, 15, 960, 400, true, 3, 0.05, "wave", 50, 400)] },
  { time: 33000, object: [new E.Kraken(g, l, 150, 840, 150, true, 3, 2, "mini1", 0, 480)] },
  { time: 42000, object: [new E.Saucer(g, l, 20, 840, 50, true, 4, 1.5, "zigzag", 300, 600), new PowerUp(g, 1000, 50, 4, 0, "linear")] },
  { time: 51000, object: [new E.Boss3(g, l)] }
];

export const getEnemiesLvl4 = (g, l) => [
  { time: 2000, object: [new E.Beetle(g, l, 15, 840, 50, true, 3, 1, "zigzag", 700, 800)] },
  { time: 8000, object: [new E.Shuttle(g, l, 15, 840, 200, false, 5, 0, "linear"), new E.Shuttle(g, l, 15, 940, 100, false, 5, 0, "linear"), new E.Shuttle(g, l, 15, 1040, 300, false, 5, 0, "linear")] },
  { time: 14500, object: [new E.Shuttle(g, l, 15, 840, 250, false, 3, 0, "linear"), new PowerUp(g, 940, 250, 3, 0, "linear")] },
  { time: 22000, object: [new E.Beetle(g, l, 20, 840, 100, true, 4, 0.04, "wave", 100, 100), new E.Beetle(g, l, 20, 1040, 350, true, 4, 0.04, "wave", 100, 350)] },
  { time: 32000, object: [new E.Tadpole(g, l, 20, 840, 50, true, 3, 2, "zigzag", 300, 700), new E.Tadpole(g, l, 1000, 400, true, 3, -2, "zigzag", 300, 700)] },
  { time: 42000, object: [new E.Saucer(g, l, 25, 840, 240, true, 4, 0, "linear"), new E.Saucer(g, l, 25, 1040, 240, true, 4, 0, "linear")] },
  { time: 52000, object: [new PowerUp(g, 840, 100, 3, 0, "linear"), new E.Beetle(g, l, 30, 940, 100, true, 3, 0, "linear")] },
  { time: 66500, object: [new E.Boss4(g, l)] }
];

export const getEnemiesLvl5 = (g, l) => [
  { time: 2000, object: [new E.Marble3(g, l, 15, 840, 440, true, 2.8, -2, "zigzag", 300, 600)] },
  { time: 10000, object: [new E.Marble2(g, l, 10, 840, 50, false, 4, 0, "linear"), new E.Marble2(g, l, 10, 940, 100, false, 4, 0, "linear"), new E.Marble2(g, l, 10, 1040, 150, false, 4, 0, "linear")] },
  { time: 18000, object: [new E.Marble2(g, l, 15, 840, 300, true, 3, 0.05, "wave", 60, 300), new PowerUp(g, 1000, 300, 3, 0, "linear")] },
  { time: 28000, object: [new E.Shuttle(g, l, 25, 840, 100, true, 5, 0, "linear"), new E.Shuttle(g, l, 25, 940, 200, true, 5, 0, "linear"), new E.Shuttle(g, l, 25, 1040, 300, true, 5, 0, "linear")] },
  { time: 40000, object: [new E.Marble3(g, l, 20, 840, 50, true, 4, 2, "zigzag", 400, 800), new E.Marble3(g, l, 20, 1000, 400, true, 4, -2, "zigzag", 400, 800)] },
  { time: 56000, object: [new E.Squid(g, l, 150, 840, 180, true, 1.8, -2, "mini2", 300, 450)] },
  { time: 65000, object: [new PowerUp(g, 840, 240, 3, 0, "linear")] },
  { time: 75200, object: [new E.Boss5(g, l)] }
];

export const getEnemiesLvl6 = (g, l) => [
  { time: 2000, object: [new E.Triship(g, l, 15, 840, 350, false, 6, 0, "linear"), new E.Triship(g, l, 15, 1040, 150, false, 6, 0, "linear")] },
  { time: 12000, object: [new E.Flipper(g, l, 30, 840, 50, true, 4, 2, "zigzag", 400, 800), new PowerUp(g, 1000, 50, 4, 0, "linear")] },
  { time: 25000, object: [new E.Dragonfly(g, l, 40, 840, 200, true, 3, 0.03, "wave", 100, 200), new E.Dragonfly(g, l, 40, 1140, 300, true, 3, 0.03, "wave", 100, 300)] },
  { time: 38000, object: [new E.Rock(g, l, 100, 840, 100, false, 2, 0, "linear"), new E.Rock(g, l, 100, 1140, 400, false, 2, 0, "linear")] },
  { time: 50000, object: [new E.Triship(g, l, 20, 840, 240, true, 7, 0, "linear"), new PowerUp(g, 840, 50, 3, 0, "linear")] },
  { time: 61000, object: [new E.Boss6(g, l)] }
];

export const getEnemiesLvl7 = (g, l) => [
  { time: 2000, object: [new E.Kraken(g, l, 25, 840, 100, true, 3, 0.05, "wave", 40, 100), new E.Kraken(g, l, 25, 1040, 380, true, 3, 0.05, "wave", 40, 380)] },
  { time: 15000, object: [new E.Beetle(g, l, 40, 840, 50, true, 4, 2.5, "zigzag", 300, 700), new E.Beetle(g, l, 40, 1040, 430, true, 4, -2.5, "zigzag", 300, 700)] },
  { time: 28000, object: [new E.Saucer(g, l, 50, 840, 240, true, 5, 0, "linear"), new PowerUp(g, 1000, 240, 5, 0, "linear")] },
  { time: 40000, object: [new E.Tadpole(g, l, 30, 840, 100, true, 4, 0.04, "wave", 80, 100), new E.Tadpole(g, l, 30, 1140, 350, true, 4, 0.04, "wave", 80, 350)] },
  { time: 52000, object: [new E.Boss7(g, l)] }
];

export const getEnemiesLvl8 = (g, l) => [
  { time: 2000, object: [new E.Squid(g, l, 70, 840, 70, false, 3, 0, "linear"), new E.Squid(g, l, 70, 1040, 370, false, 3, 0, "linear")] },
  { time: 10000, object: [new E.Triship(g, l, 40, 840, 240, true, 5, 0, "linear"), new PowerUp(g, 1000, 240, 5, 0, "linear")] },
  { time: 20000, object: [new E.Kraken(g, l, 60, 840, 50, true, 4, 3, "zigzag", 400, 800), new E.Kraken(g, l, 60, 1100, 400, true, 4, -3, "zigzag", 400, 800)] },
  { time: 32000, object: [new E.Saucer(g, l, 80, 840, 150, true, 4, 0.03, "wave", 150, 150), new E.Saucer(g, l, 80, 1140, 150, true, 4, 0.03, "wave", 150, 150)] },
  { time: 45000, object: [new E.Boss8(g, l)] }
];
