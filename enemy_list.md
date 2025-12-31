# Enemy List from game.js

## Standard Enemies
1. **Meteor**
   - Class: `Meteor` (Extends `Enemy`)
   - Dimensions: 100x50
   - Frames: 2 (Start: 0)
2. **Triship**
   - Class: `Triship` (Extends `Enemy`)
   - Dimensions: 60x70
   - Frames: 2 (Start: 2, Dark: +2)
3. **Squid**
   - Class: `Squid` (Extends `Enemy`)
   - Dimensions: 80x50
   - Frames: 1 (Start: 0, Dark: +1)
4. **Shuttle**
   - Class: `Shuttle` (Extends `Enemy`)
   - Dimensions: 90x50
   - Frames: 1 (Start: 2, Dark: +1)
5. **Saucer**
   - Class: `Saucer` (Extends `Enemy`)
   - Dimensions: 90x50
   - Frames: 1 (Start: 4, Dark: +1)
6. **Tadpole**
   - Class: `Tadpole` (Extends `Enemy`)
   - Dimensions: 90x50
   - Frames: 2 (Start: 0, Dark: +2)
7. **Kraken**
   - Class: `Kraken` (Extends `Enemy`)
   - Dimensions: 70x80
   - Frames: 1 (Start: 4, Dark: +1)
8. **Marble1**
   - Class: `Marble1` (Extends `Enemy`)
   - Dimensions: 50x50
   - Frames: 1 (Start: 0)
9. **Marble2**
   - Class: `Marble2` (Extends `Enemy`)
   - Dimensions: 50x40
   - Frames: 1 (Start: 1, Dark: +1)
10. **Marble3**
    - Class: `Marble3` (Extends `Enemy`)
    - Dimensions: 50x30
    - Frames: 1 (Start: 3, Dark: +1)
11. **Beetle**
    - Class: `Beetle` (Extends `Enemy`)
    - Dimensions: 80x50
    - Frames: 2 (Start: 0, Dark: +2)
12. **Rock**
    - Class: `Rock` (Extends `Enemy`)
    - Dimensions: 70x70
    - Frames: 1 (Start: 4)
13. **Flipper**
    - Class: `Flipper` (Extends `Enemy`)
    - Dimensions: 60x60
    - Frames: 2 (Start: 0, Dark: +2)
14. **Dragonfly**
    - Class: `Dragonfly` (Extends `Enemy`)
    - Dimensions: 100x50
    - Frames: 2 (Start: 0, Dark: +2)

## Projectiles / Hazards
1. **Torpedo**
   - Class: `Torpedo`
   - Spawns in Boss 8
   - Dimensions: 70x50
   - HP: 150
2. **EnemyMissile**
   - Class: `EnemyMissile`
   - Spawns in Boss 4
   - Dimensions: 50x30



## Bosses
1. **Boss1**
   - Dimensions: 200x230
   - HP: 200
2. **Boss2**
   - Dimensions: 230x210
   - HP: 200
3. **Boss3**
   - Dimensions: 220x200
   - HP: 300
4. **Boss4**
   - Dimensions: 150x250
   - HP: 250
5. **Boss5**
   - Dimensions: 190x210
   - HP: 350
6. **Boss6**
   - Dimensions: 200x190
   - HP: 350
7. **Boss7**
   - Dimensions: 300x250
   - HP: 300
8. **Boss8**
   - Dimensions: 380x380
   - HP: 250

## Levels Breakdown
- **Level 1**: Meteor, PowerUp, Triship, Squid, Shuttle, Boss1
- **Level 2**: Triship, Saucer, PowerUp, Squid, Shuttle, Boss2
- **Level 3**: Tadpole, Saucer, PowerUp, Squid, Marble1, Marble2, Marble3, Kraken, Boss3
- **Level 4**: Beetle, Shuttle, PowerUp, Rock, Triship, Boss4
- **Level 5**: Marble3, Kraken, PowerUp, Tadpole, Squid, Triship, Boss5
- **Level 6**: Triship, Squid, PowerUp, Beetle, Saucer, Marble2, Flipper, Dragonfly, Boss6
- **Level 7**: Kraken, Beetle, Triship, Shuttle, Boss7
- **Level 8**: Squid, Dragonfly, Triship, Boss8
