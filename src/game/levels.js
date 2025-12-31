// Modular Level Configuration for Space Impact Vue
import * as E from './enemies.js';
import * as Env from './environment.js';
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
  { time: 2000, object: [new E.Triship(g, l, 15, 840, 50, false, 2, 1, "zigzag", 300, 780), new E.Triship(g, l, 15, 840, 300, false, 2, -1, "zigzag", 300, 780), new E.Triship(g, l, 15, 960, 50, false, 2, 1, "zigzag", 300, 780), new E.Triship(g, l, 15, 960, 300, true, 2, -1, "zigzag", 300, 780), new E.Triship(g, l, 15, 1080, 50, true, 2, 1, "zigzag", 300, 780), new E.Triship(g, l, 15, 1080, 300, false, 2, -1, "zigzag", 300, 780)] },
  { time: 8000, object: [new E.Saucer(g, l, 20, 840, 100, false, 2, 0.03, "wave", 50, 100), new E.Saucer(g, l, 20, 840, 340, false, 2, 0.03, "wave", 50, 340)] },
  { time: 9000, object: [new E.Saucer(g, l, 20, 840, 100, false, 2, 0.03, "wave", 50, 100), new E.Saucer(g, l, 20, 840, 340, true, 2, 0.03, "wave", 50, 340), new PowerUp(g, 840, 220, 3, 0, "linear")] },
  { time: 10000, object: [new E.Saucer(g, l, 20, 840, 100, true, 2, 0.03, "wave", 50, 100), new E.Saucer(g, l, 20, 840, 340, false, 2, 0.03, "wave", 50, 340)] },
  { time: 13000, object: [new E.Squid(g, l, 15, 840, 50, true, 2, 1, "zigzag", 250, 780), new E.Squid(g, l, 15, 1200, 130, true, 3, 0.07, "wave", 40, 130), new E.Squid(g, l, 15, 1200, 350, true, 2, 0.05, "wave", 40, 350), new E.Squid(g, l, 15, 1800, 240, true, 3, 0, "linear"), new E.Squid(g, l, 15, 2000, 120, true, 3, 0, "linear")] },
  { time: 21000, object: [new E.Squid(g, l, 15, 840, 240, false, 3, 0, "linear"), new E.Squid(g, l, 15, 940, 170, false, 3, 0, "linear"), new E.Squid(g, l, 15, 940, 310, false, 3, 0, "linear"), new E.Squid(g, l, 15, 1040, 100, false, 3, 0, "linear"), new E.Squid(g, l, 15, 1040, 380, false, 3, 0, "linear")] },
  { time: 24000, object: [new E.Squid(g, l, 15, 840, 240, false, 3, 0, "linear"), new E.Squid(g, l, 15, 940, 170, false, 3, 0, "linear"), new E.Squid(g, l, 15, 940, 310, false, 3, 0, "linear"), new E.Squid(g, l, 15, 1040, 100, false, 3, 0, "linear"), new E.Squid(g, l, 15, 1040, 380, false, 3, 0, "linear")] },
  { time: 28000, object: [new E.Shuttle(g, l, 25, 840, 250, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 960, 250, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 1080, 250, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 1200, 250, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 1320, 250, false, 4, 0, "linear")] },
  { time: 30000, object: [new E.Shuttle(g, l, 25, 840, 70, false, 3, 0, "linear"), new E.Shuttle(g, l, 25, 1040, 70, false, 3, 0, "linear"), new E.Shuttle(g, l, 25, 1240, 250, false, 3, 0, "linear"), new E.Shuttle(g, l, 25, 1440, 220, false, 3, 0, "linear"), new E.Shuttle(g, l, 25, 1640, 150, false, 3, 0, "linear"), new E.Shuttle(g, l, 25, 1840, 220, false, 3, 0, "linear")] },
  { time: 38000, object: [new E.Boss2(g, l)] }
];

export const getEnemiesLvl3 = (g, l) => [
  { time: 2000, object: [new E.Tadpole(g, l, 15, 840, 50, true, 2, 1, "zigzag", 250, 750), new E.Tadpole(g, l, 15, 1020, 50, true, 2, 1, "zigzag", 250, 750), new E.Tadpole(g, l, 15, 1200, 50, true, 2, 1, "zigzag", 250, 750), new E.Tadpole(g, l, 15, 1380, 50, true, 2, 1, "zigzag", 250, 750), new E.Tadpole(g, l, 15, 1560, 50, true, 2, 1, "zigzag", 250, 750), new E.Tadpole(g, l, 15, 1740, 50, true, 2, 1, "zigzag", 250, 750), new E.Tadpole(g, l, 15, 1920, 50, true, 2, 1, "zigzag", 250, 750), new E.Tadpole(g, l, 15, 2100, 50, true, 2, 1, "zigzag", 250, 750), new E.Tadpole(g, l, 15, 2280, 50, true, 2, 1, "zigzag", 250, 750)] },
  { time: 16000, object: [new E.Saucer(g, l, 15, 840, 280, false, 4, 0, "linear"), new E.Saucer(g, l, 15, 1040, 280, false, 4, 0, "linear"), new E.Saucer(g, l, 15, 1240, 280, false, 4, 0, "linear"), new PowerUp(g, 1340, 280, 4, 0, "linear")] },
  { time: 22000, object: [new E.Squid(g, l, 20, 840, 180, false, 4, 0, "linear"), new E.Squid(g, l, 20, 1000, 120, false, 4, 0, "linear"), new E.Squid(g, l, 20, 1000, 240, false, 4, 0, "linear"), new E.Squid(g, l, 20, 1160, 60, false, 4, 0, "linear"), new E.Squid(g, l, 20, 1160, 300, false, 4, 0, "linear")] },
  { time: 26000, object: [new E.Squid(g, l, 20, 840, 180, false, 4, 0, "linear"), new E.Squid(g, l, 20, 1000, 120, false, 4, 0, "linear"), new E.Squid(g, l, 20, 1000, 240, false, 4, 0, "linear"), new E.Squid(g, l, 20, 1160, 60, false, 4, 0, "linear"), new E.Squid(g, l, 20, 1160, 300, false, 4, 0, "linear")] },
  { time: 30000, object: [new E.Marble1(g, l, 20, 840, 110, true, 3, 0.04, "wave", 50, 110)] },
  { time: 30300, object: [new E.Marble2(g, l, 20, 840, 110, true, 3, 0.04, "wave", 50, 110)] },
  { time: 30600, object: [new E.Marble3(g, l, 20, 840, 110, true, 3, 0.04, "wave", 50, 110), new E.Marble1(g, l, 20, 840, 270, true, 3, 0.04, "wave", 50, 270)] },
  { time: 30900, object: [new E.Marble2(g, l, 20, 840, 270, true, 3, 0.04, "wave", 50, 270)] },
  { time: 31200, object: [new E.Marble3(g, l, 20, 840, 270, true, 3, 0.04, "wave", 50, 270)] },
  { time: 33000, object: [new E.Kraken(g, l, 150, 840, 150, true, 3, 2, "mini1", 0, 480)] },
  { time: 51000, object: [new E.Boss3(g, l)] }
];

export const getEnemiesLvl4 = (g, l) => [
  { time: 2000, object: [new E.Beetle(g, l, 15, 840, 50, true, 3, 1, "zigzag", 700, 800), new E.Beetle(g, l, 15, 990, 50, true, 3, 1, "zigzag", 700, 800), new E.Beetle(g, l, 15, 1140, 50, false, 3, 1, "zigzag", 700, 800), new E.Beetle(g, l, 15, 1290, 50, true, 3, 1, "zigzag", 700, 800), new E.Beetle(g, l, 15, 1440, 50, false, 3, 1, "zigzag", 700, 800)] },
  { time: 6000, object: [new E.Beetle(g, l, 15, 840, 50, true, 3, 2, "zigzag", 400, 700), new E.Beetle(g, l, 15, 990, 50, false, 3, 2, "zigzag", 400, 700), new E.Beetle(g, l, 15, 1140, 50, true, 3, 2, "zigzag", 400, 700), new E.Beetle(g, l, 15, 1290, 50, false, 3, 2, "zigzag", 400, 700), new E.Beetle(g, l, 15, 1440, 50, true, 3, 2, "zigzag", 400, 700)] },
  { time: 10000, object: [new E.Beetle(g, l, 15, 840, 270, true, 3, -2, "zigzag", 370, 700), new E.Beetle(g, l, 15, 990, 270, true, 3, -2, "zigzag", 370, 700), new E.Beetle(g, l, 15, 1140, 270, false, 3, -2, "zigzag", 370, 700), new E.Beetle(g, l, 15, 1290, 270, false, 3, -2, "zigzag", 370, 700), new E.Beetle(g, l, 15, 1440, 270, true, 3, -2, "zigzag", 370, 700)] },
  { time: 14500, object: [new E.Shuttle(g, l, 15, 840, 250, false, 3, 0, "linear")] },
  { time: 17500, object: [new E.Shuttle(g, l, 15, 840, 120, false, 3, 0, "linear"), new E.Shuttle(g, l, 15, 980, 120, false, 3, 0, "linear"), new E.Shuttle(g, l, 15, 1120, 120, false, 3, 0, "linear")] },
  { time: 20500, object: [new E.Shuttle(g, l, 25, 840, 250, false, 3, 0, "linear")] },
  { time: 24000, object: [new E.Shuttle(g, l, 15, 840, 180, false, 4, 0, "linear"), new E.Shuttle(g, l, 15, 980, 180, false, 4, 0, "linear"), new E.Shuttle(g, l, 15, 1120, 180, false, 4, 0, "linear")] },
  { time: 29300, object: [new PowerUp(g, 840, 180, 1.788, 0.07, "wave", 80, 180)] },
  { time: 36000, object: [new E.Rock(g, l, 80, 840, 130, false, 2, 0, "linear"), new E.Rock(g, l, 80, 1040, 180, false, 2, 0, "linear"), new E.Rock(g, l, 80, 1240, 240, false, 2, 0, "linear"), new E.Rock(g, l, 80, 1440, 90, false, 2, 0, "linear"), new E.Rock(g, l, 80, 1640, 250, false, 2, 0, "linear")] },
  { time: 50500, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 90, 190)] },
  { time: 51000, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 90, 190)] },
  { time: 51500, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 90, 190)] },
  { time: 52000, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 90, 190)] },
  { time: 52500, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 90, 190)] },
  { time: 53000, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 90, 190)] },
  { time: 53500, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 90, 190)] },
  { time: 54000, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 90, 190)] },
  { time: 54500, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 90, 190)] },
  { time: 58000, object: [new E.Triship(g, l, 20, 840, 50, true, 3, 3, "zigzag", 600, 800), new E.Triship(g, l, 20, 940, 50, true, 3, 3, "zigzag", 600, 800), new E.Triship(g, l, 20, 1160, 50, true, 3, 3, "zigzag", 600, 800), new E.Triship(g, l, 20, 1260, 50, true, 3, 3, "zigzag", 600, 800), new E.Triship(g, l, 20, 1480, 50, true, 3, 3, "zigzag", 600, 800), new E.Triship(g, l, 20, 1580, 50, true, 3, 3, "zigzag", 600, 800)] },
  { time: 66500, object: [new E.Boss4(g, l)] }
];

export const getEnemiesLvl5 = (g, l) => [
  { time: 2000, object: [new E.Marble3(g, l, 15, 840, 440, true, 2.8, -2, "zigzag", 300, 600), new E.Marble3(g, l, 15, 1000, 440, true, 2.8, -2, "zigzag", 300, 600), new E.Marble3(g, l, 15, 1160, 440, true, 2.8, -2, "zigzag", 300, 600), new E.Marble3(g, l, 15, 1320, 440, true, 2.8, -2, "zigzag", 300, 600), new E.Marble3(g, l, 15, 1480, 440, true, 2.8, -2, "zigzag", 300, 600)] },
  { time: 4000, object: [new E.Marble3(g, l, 15, 840, 410, false, 3.5, 0, "linear"), new E.Marble3(g, l, 15, 1000, 410, false, 3.5, 0, "linear"), new E.Marble3(g, l, 15, 1160, 410, false, 3.5, 0, "linear"), new E.Marble3(g, l, 15, 1320, 410, false, 3.5, 0, "linear"), new E.Marble3(g, l, 15, 1480, 410, false, 3.5, 0, "linear")] },
  { time: 9500, object: [new E.Kraken(g, l, 100, 840, 390, true, 2, -3, "zigzag", 500, 600)] },
  { time: 16000, object: [new PowerUp(g, 840, 300, 2, 0.07, "wave", 100, 300)] },
  { time: 21000, object: [new E.Tadpole(g, l, 15, 840, 320, true, 3, 0.07, "wave", 110, 320), new E.Tadpole(g, l, 15, 940, 320, true, 2, 0.05, "wave", 110, 320), new E.Tadpole(g, l, 15, 1040, 320, false, 2, 0.08, "wave", 110, 320), new E.Tadpole(g, l, 15, 1140, 320, false, 3, 0.03, "wave", 110, 320), new E.Tadpole(g, l, 15, 1240, 320, true, 3, 0.09, "wave", 110, 320), new E.Tadpole(g, l, 15, 1340, 320, false, 2, 0.04, "wave", 110, 320), new E.Tadpole(g, l, 15, 1440, 320, false, 3, 0.06, "wave", 110, 320), new E.Tadpole(g, l, 15, 1540, 320, true, 3, 0.03, "wave", 110, 320), new E.Tadpole(g, l, 15, 1640, 320, false, 3, 0.07, "wave", 110, 320)] },
  { time: 30000, object: [new E.Squid(g, l, 25, 840, 320, false, 4, 0, "linear"), new E.Squid(g, l, 25, 980, 230, false, 4, 0, "linear"), new E.Squid(g, l, 25, 980, 410, false, 4, 0, "linear")] },
  { time: 32000, object: [new E.Squid(g, l, 25, 840, 320, false, 4, 0, "linear"), new E.Squid(g, l, 25, 980, 230, false, 4, 0, "linear"), new E.Squid(g, l, 25, 980, 410, false, 4, 0, "linear")] },
  { time: 34000, object: [new E.Triship(g, l, 15, 840, 210, false, 2, 1, "zigzag", 225, 600), new E.Triship(g, l, 15, 840, 410, false, 2, -1, "zigzag", 225, 600), new E.Triship(g, l, 15, 1000, 210, false, 2, 1, "zigzag", 225, 600), new E.Triship(g, l, 15, 1000, 410, true, 2, -1, "zigzag", 225, 600), new E.Triship(g, l, 15, 1160, 210, true, 2, 1, "zigzag", 225, 600), new E.Triship(g, l, 15, 1160, 410, false, 2, -1, "zigzag", 225, 600), new E.Triship(g, l, 15, 1320, 210, false, 2, 1, "zigzag", 225, 600), new E.Triship(g, l, 15, 1320, 410, true, 2, -1, "zigzag", 225, 600), new E.Triship(g, l, 15, 1480, 210, true, 2, 1, "zigzag", 225, 600), new E.Triship(g, l, 15, 1480, 410, false, 2, -1, "zigzag", 225, 600)] },
  { time: 46000, object: [new E.Squid(g, l, 25, 840, 160, true, 3, 2, "zigzag", 400, 760), new E.Squid(g, l, 25, 980, 160, true, 3, 2, "zigzag", 400, 760), new E.Squid(g, l, 25, 1120, 160, true, 3, 2, "zigzag", 400, 760), new E.Squid(g, l, 25, 1260, 160, true, 3, 2, "zigzag", 400, 760), new E.Squid(g, l, 25, 1400, 160, true, 3, 2, "zigzag", 400, 760)] },
  { time: 53000, object: [new E.Squid(g, l, 15, 840, 430, true, 3, -2, "zigzag", 350, 650), new E.Squid(g, l, 15, 980, 430, true, 3, -2, "zigzag", 350, 650), new E.Squid(g, l, 15, 1120, 430, true, 3, -2, "zigzag", 350, 650), new E.Squid(g, l, 15, 1260, 430, true, 3, -2, "zigzag", 350, 650), new E.Squid(g, l, 15, 1400, 430, true, 3, -2, "zigzag", 350, 650)] },
  { time: 56000, object: [new E.Squid(g, l, 150, 840, 180, true, 1.8, -2, "mini2", 300, 450)] },
  { time: 75200, object: [new E.Boss5(g, l)] }
];

export const getEnemiesLvl6 = (g, l) => [
  { time: 2000, object: [new E.Triship(g, l, 15, 840, 350, false, 6, 0, "linear"), new E.Triship(g, l, 15, 980, 300, false, 6, 0, "linear"), new E.Triship(g, l, 15, 1120, 250, false, 6, 0, "linear"), new E.Triship(g, l, 15, 1260, 200, false, 6, 0, "linear"), new E.Triship(g, l, 15, 1400, 150, false, 6, 0, "linear")] },
  { time: 4000, object: [new E.Squid(g, l, 15, 840, 220, true, 4, 2, "zigzag", 300, 700), new E.Squid(g, l, 15, 960, 220, true, 4, 2, "zigzag", 300, 700), new E.Squid(g, l, 15, 1080, 220, true, 4, 2, "zigzag", 300, 700), new E.Squid(g, l, 15, 1200, 220, true, 4, 2, "zigzag", 300, 700), new E.Squid(g, l, 15, 1320, 220, true, 4, 2, "zigzag", 300, 700)] },
  { time: 7500, object: [new E.Triship(g, l, 15, 840, 410, false, 5, 0, "linear"), new E.Triship(g, l, 15, 980, 360, false, 5, 0, "linear"), new E.Triship(g, l, 15, 1120, 310, false, 5, 0, "linear"), new E.Triship(g, l, 15, 1260, 260, false, 5, 0, "linear"), new E.Triship(g, l, 15, 1400, 210, false, 5, 0, "linear")] },
  { time: 10000, object: [new PowerUp(g, 840, 240, 4, 0, "linear")] },
  { time: 12000, object: [new E.Beetle(g, l, 15, 840, 350, true, 4, 0.04, "wave", 50, 350)] },
  { time: 12500, object: [new E.Beetle(g, l, 15, 840, 350, true, 4, 0.04, "wave", 50, 350)] },
  { time: 13000, object: [new E.Beetle(g, l, 15, 840, 350, true, 4, 0.04, "wave", 50, 350)] },
  { time: 13500, object: [new E.Beetle(g, l, 15, 840, 350, true, 4, 0.04, "wave", 50, 350)] },
  { time: 15000, object: [new E.Saucer(g, l, 20, 840, 210, true, 4, 0.05, "linear", 50, 100), new E.Saucer(g, l, 20, 840, 380, true, 4, 0.06, "wave", 50, 380), new PowerUp(g, 840, 270, 4, 0, "linear")] },
  { time: 15500, object: [new E.Saucer(g, l, 20, 840, 210, true, 4, 0.04, "linear", 50, 100), new E.Saucer(g, l, 20, 840, 380, true, 4, 0.06, "wave", 50, 380)] },
  { time: 16000, object: [new E.Saucer(g, l, 20, 840, 210, true, 4, 0.04, "linear", 50, 100), new E.Saucer(g, l, 20, 840, 380, true, 4, 0.06, "wave", 50, 380)] },
  { time: 20000, object: [new E.Triship(g, l, 15, 840, 210, false, 4, 4, "zigzag", 400, 600), new E.Triship(g, l, 15, 840, 410, false, 4, -4, "zigzag", 400, 600), new E.Triship(g, l, 15, 1000, 210, false, 4, 4, "zigzag", 400, 600), new E.Triship(g, l, 15, 1000, 410, true, 4, -4, "zigzag", 400, 600), new E.Triship(g, l, 15, 1160, 210, true, 4, 4, "zigzag", 400, 600), new E.Triship(g, l, 15, 1160, 410, false, 4, -4, "zigzag", 400, 600)] },
  { time: 22000, object: [new E.Beetle(g, l, 15, 840, 420, true, 3, 0, "linear")] },
  { time: 25000, object: [new E.Marble2(g, l, 15, 840, 320, true, 4, 0.06, "wave", 110, 320)] },
  { time: 25400, object: [new E.Marble2(g, l, 15, 840, 320, true, 4, 0.06, "wave", 110, 320)] },
  { time: 25800, object: [new E.Marble2(g, l, 15, 840, 320, true, 4, 0.06, "wave", 110, 320)] },
  { time: 26200, object: [new E.Marble2(g, l, 15, 840, 320, true, 4, 0.06, "wave", 110, 320)] },
  { time: 26600, object: [new E.Marble2(g, l, 15, 840, 320, true, 4, 0.06, "wave", 110, 320)] },
  { time: 27000, object: [new E.Marble2(g, l, 15, 840, 320, true, 4, 0.06, "wave", 110, 320)] },
  { time: 28000, object: [new E.Flipper(g, l, 25, 840, 320, true, 3, 0.06, "wave", 100, 320)] },
  { time: 28700, object: [new E.Flipper(g, l, 25, 840, 320, true, 3, 0.06, "wave", 100, 320)] },
  { time: 29400, object: [new E.Flipper(g, l, 25, 840, 320, true, 3, 0.06, "wave", 100, 320)] },
  { time: 30100, object: [new E.Flipper(g, l, 25, 840, 320, true, 3, 0.06, "wave", 100, 320)] },
  { time: 32300, object: [new E.Dragonfly(g, l, 15, 840, 210, true, 3.5, 3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 840, 430, true, 3.5, -3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1000, 210, true, 3.5, 3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1000, 430, true, 3.5, -3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1160, 210, true, 3.5, 3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1160, 430, true, 3.5, -3, "zigzag", 350, 600)] },
  { time: 37000, object: [new PowerUp(g, 840, 200, 4, 0, "linear")] },
  { time: 40000, object: [new E.Beetle(g, l, 15, 840, 200, true, 3, 0.07, "wave", 50, 200)] },
  { time: 43000, object: [new E.Squid(g, l, 15, 840, 210, true, 4, 2, "zigzag", 300, 700), new E.Squid(g, l, 15, 1140, 210, true, 4, 2, "zigzag", 300, 700)] },
  { time: 48000, object: [new E.Flipper(g, l, 10, 840, 300, true, 4, 0.06, "wave", 120, 300)] },
  { time: 48400, object: [new E.Flipper(g, l, 10, 840, 300, true, 4, 0.06, "wave", 120, 300)] },
  { time: 48800, object: [new E.Flipper(g, l, 10, 840, 300, true, 4, 0.06, "wave", 120, 300)] },
  { time: 49200, object: [new E.Flipper(g, l, 10, 840, 300, true, 4, 0.06, "wave", 120, 300)] },
  { time: 49600, object: [new E.Flipper(g, l, 10, 840, 300, true, 4, 0.06, "wave", 120, 300)] },
  { time: 51000, object: [new E.Dragonfly(g, l, 15, 840, 210, true, 3.5, 3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 840, 430, true, 3.5, -3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1000, 210, false, 3.5, 3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1000, 430, false, 3.5, -3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1160, 210, true, 3.5, 3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1160, 430, false, 3.5, -3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1320, 210, true, 3.5, 3, "zigzag", 350, 600), new E.Dragonfly(g, l, 15, 1320, 430, false, 3.5, -3, "zigzag", 350, 600)] },
  { time: 57000, object: [new E.Squid(g, l, 20, 840, 320, true, 5, 0.05, "wave", 110, 320)] },
  { time: 57500, object: [new E.Squid(g, l, 20, 840, 320, true, 5, 0.05, "wave", 110, 320)] },
  { time: 58000, object: [new E.Squid(g, l, 20, 840, 320, true, 5, 0.05, "wave", 110, 320)] },
  { time: 58500, object: [new E.Squid(g, l, 20, 840, 320, true, 5, 0.05, "wave", 110, 320)] },
  { time: 59000, object: [new E.Squid(g, l, 20, 840, 320, true, 5, 0.05, "wave", 110, 320)] },
  { time: 59500, object: [new E.Squid(g, l, 20, 840, 320, true, 5, 0.05, "wave", 110, 320)] },
  { time: 60000, object: [new E.Squid(g, l, 20, 840, 320, true, 5, 0.05, "wave", 110, 320)] },
  { time: 60500, object: [new E.Squid(g, l, 20, 840, 320, true, 5, 0.05, "wave", 110, 320)] },
  { time: 61000, object: [new E.Boss6(g, l)] },
  { time: 65000, object: [] }
];

export const getEnemiesLvl7 = (g, l) => [
  { time: 2000, object: [new E.Kraken(g, l, 25, 840, 100, true, 3, 0.05, "wave", 40, 100), new E.Kraken(g, l, 25, 840, 320, true, 5, 0.06, "wave", 40, 320)] },
  { time: 2500, object: [new E.Kraken(g, l, 25, 900, 100, true, 3, 0.05, "wave", 40, 100), new E.Kraken(g, l, 25, 840, 320, true, 5, 0.06, "wave", 40, 320)] },
  { time: 6000, object: [new E.Kraken(g, l, 25, 840, 150, true, 5, 0.06, "wave", 40, 150), new E.Kraken(g, l, 25, 840, 320, true, 3, 0.05, "wave", 40, 320)] },
  { time: 6500, object: [new E.Kraken(g, l, 25, 840, 150, true, 5, 0.06, "wave", 40, 150), new E.Kraken(g, l, 25, 900, 320, true, 3, 0.05, "wave", 40, 320)] },
  { time: 9000, object: [new E.Kraken(g, l, 25, 840, 100, true, 5, 0.06, "wave", 40, 100), new E.Kraken(g, l, 25, 840, 300, true, 3, -3, "zigzag", 400, 650), new E.Kraken(g, l, 25, 980, 300, true, 3, -3, "zigzag", 400, 650)] },
  { time: 9500, object: [new E.Kraken(g, l, 25, 840, 100, true, 5, 0.06, "wave", 40, 100)] },
  { time: 13000, object: [new E.Beetle(g, l, 15, 840, 180, true, 6, 0, "linear"), new E.Beetle(g, l, 15, 980, 180, true, 6, 0, "linear"), new E.Beetle(g, l, 15, 1120, 180, true, 6, 0, "linear"), new E.Beetle(g, l, 15, 1260, 180, true, 6, 0, "linear")] },
  { time: 15000, object: [new E.Beetle(g, l, 15, 840, 310, true, 6, 0, "linear"), new E.Beetle(g, l, 15, 980, 310, true, 6, 0, "linear"), new E.Beetle(g, l, 15, 1120, 310, true, 6, 0, "linear"), new E.Beetle(g, l, 15, 1260, 310, true, 6, 0, "linear")] },
  { time: 16000, object: [new E.Beetle(g, l, 15, 840, 50, true, 5, 4, "zigzag", 300, 600), new E.Beetle(g, l, 15, 980, 50, true, 5, 4, "zigzag", 300, 600), new E.Beetle(g, l, 15, 1120, 50, true, 5, 4, "zigzag", 300, 600), new E.Beetle(g, l, 15, 1260, 50, true, 5, 4, "zigzag", 300, 600), new E.Beetle(g, l, 15, 1400, 50, true, 5, 4, "zigzag", 300, 600)] },
  { time: 18500, object: [new E.Beetle(g, l, 15, 840, 180, true, 5, 0, "linear"), new E.Beetle(g, l, 15, 980, 180, true, 5, 0, "linear"), new E.Beetle(g, l, 15, 1120, 180, true, 5, 0, "linear"), new E.Beetle(g, l, 15, 1260, 180, true, 5, 0, "linear")] },
  { time: 20500, object: [new E.Triship(g, l, 25, 840, 50, true, 2, 1.5, "zigzag", 450, 800), new E.Triship(g, l, 25, 980, 50, true, 2, 1.5, "zigzag", 450, 800), new E.Triship(g, l, 25, 1120, 50, true, 2, 1.5, "zigzag", 450, 800), new E.Triship(g, l, 25, 1260, 50, true, 2, 1.5, "zigzag", 450, 800), new E.Triship(g, l, 25, 1400, 50, true, 2, 1.5, "zigzag", 450, 800), new E.Triship(g, l, 25, 1540, 50, true, 2, 1.5, "zigzag", 450, 800)] },
  { time: 22000, object: [new E.Triship(g, l, 25, 840, 300, true, 4, -4, "zigzag", 350, 600), new E.Triship(g, l, 25, 980, 300, true, 4, -4, "zigzag", 350, 600), new E.Triship(g, l, 25, 1120, 300, true, 4, -4, "zigzag", 350, 600), new E.Triship(g, l, 25, 1260, 300, true, 4, -4, "zigzag", 350, 600), new E.Triship(g, l, 25, 1400, 300, true, 4, -4, "zigzag", 350, 600), new E.Triship(g, l, 25, 1540, 300, true, 4, -4, "zigzag", 350, 600)] },
  { time: 30500, object: [new E.Shuttle(g, l, 25, 1120, 50, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 980, 120, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 840, 190, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 980, 260, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 1120, 330, false, 4, 0, "linear")] },
  { time: 35000, object: [new E.Shuttle(g, l, 25, 1120, 50, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 980, 120, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 840, 190, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 980, 260, false, 4, 0, "linear"), new E.Shuttle(g, l, 25, 1120, 330, false, 4, 0, "linear")] },
  { time: 40000, object: [new E.Beetle(g, l, 15, 840, 100, true, 4, 0.06, "wave", 50, 100), new E.Beetle(g, l, 25, 840, 170, true, 4, 0.06, "wave", 50, 170)] },
  { time: 40700, object: [new E.Beetle(g, l, 15, 840, 100, true, 4, 0.06, "wave", 50, 100), new E.Beetle(g, l, 25, 840, 170, true, 4, 0.06, "wave", 50, 170)] },
  { time: 41400, object: [new E.Beetle(g, l, 15, 840, 100, true, 4, 0.06, "wave", 50, 100), new E.Beetle(g, l, 25, 840, 170, true, 4, 0.06, "wave", 50, 170)] },
  { time: 42100, object: [new E.Beetle(g, l, 15, 840, 100, true, 4, 0.06, "wave", 50, 100), new E.Beetle(g, l, 25, 840, 170, true, 4, 0.06, "wave", 50, 170)] },
  { time: 42800, object: [new E.Beetle(g, l, 15, 840, 100, true, 4, 0.06, "wave", 50, 100), new E.Beetle(g, l, 25, 840, 170, true, 4, 0.06, "wave", 50, 170)] },
  { time: 44000, object: [new E.Beetle(g, l, 15, 840, 170, true, 4, 0.06, "wave", 50, 170), new E.Beetle(g, l, 25, 840, 240, true, 4, 0.06, "wave", 50, 240)] },
  { time: 44500, object: [new E.Beetle(g, l, 15, 840, 170, true, 4, 0.06, "wave", 50, 170), new E.Beetle(g, l, 25, 840, 240, true, 4, 0.06, "wave", 50, 240)] },
  { time: 45000, object: [new E.Beetle(g, l, 15, 840, 170, true, 4, 0.06, "wave", 50, 170), new E.Beetle(g, l, 25, 840, 240, true, 4, 0.06, "wave", 50, 240)] },
  { time: 45500, object: [new E.Beetle(g, l, 15, 840, 170, true, 4, 0.06, "wave", 50, 170), new E.Beetle(g, l, 25, 840, 240, true, 4, 0.06, "wave", 50, 240)] },
  { time: 46000, object: [new E.Beetle(g, l, 15, 840, 170, true, 4, 0.06, "wave", 50, 170), new E.Beetle(g, l, 25, 840, 240, true, 4, 0.06, "wave", 50, 240)] },
  { time: 52000, object: [new E.Boss7(g, l)] }
];

export const getEnemiesLvl8 = (g, l) => [
  { time: 2000, object: [new E.Squid(g, l, 70, 840, 70, false, 3, 0, "linear"), new E.Squid(g, l, 70, 840, 170, false, 3, 0, "linear"), new E.Squid(g, l, 70, 840, 270, false, 3, 0, "linear")] },
  { time: 4000, object: [new E.Dragonfly(g, l, 25, 840, 50, true, 2, 2, "zigzag", 350, 600), new E.Dragonfly(g, l, 25, 940, 200, true, 2, 0.04, "wave", 130, 180), new E.Dragonfly(g, l, 25, 1040, 50, true, 2, 2, "zigzag", 350, 600), new E.Dragonfly(g, l, 25, 1140, 200, true, 2, 0.06, "wave", 130, 180), new E.Dragonfly(g, l, 25, 1240, 50, true, 2, 2, "zigzag", 350, 600), new E.Dragonfly(g, l, 25, 1340, 200, true, 2, 0.03, "wave", 130, 180), new E.Dragonfly(g, l, 25, 1440, 50, true, 2, 2, "zigzag", 350, 600), new E.Dragonfly(g, l, 25, 1540, 200, true, 2, 0.05, "wave", 130, 180)] },
  { time: 12050, object: [new E.Boss8(g, l)] },
  { time: 15700, object: [] }
];
