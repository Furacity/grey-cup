namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ready == true) {
        ready = false
        projectile = sprites.createProjectileFromSprite(img`
            . . 6 6 6 6 . . 
            . 6 d 4 4 4 6 . 
            6 1 b 1 1 4 d 6 
            c 1 b b 4 4 1 c 
            . c b b b d c . 
            . . c c c c . . 
            `, mySprite, 100, -100)
        projectile.ay = 100
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
        animation.runImageAnimation(
        projectile,
        [img`
            . . 6 6 6 6 . . 
            . 6 d 4 4 4 6 . 
            6 1 b 1 1 4 d 6 
            c 1 b b 4 4 1 c 
            . c b b b d c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 1 4 4 4 6 . 
            6 d 4 4 4 4 4 6 
            c b b 1 1 4 d c 
            . c b b 4 1 c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 d 4 4 4 6 . 
            6 d 4 4 4 4 d 6 
            c 1 b 4 4 4 d c 
            . c b 1 1 4 c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 d d 4 4 6 . 
            6 d 4 4 4 4 d 6 
            c b b 4 4 4 d c 
            . c b b 4 d c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 d 1 1 4 6 . 
            6 d 4 4 4 4 1 6 
            c b b 4 4 4 d c 
            . c b b 4 d c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 d 4 4 4 b . 
            . c b 1 1 4 4 b 
            . c b b 4 4 d b 
            . . c b b d 1 c 
            . . . c c b b . 
            `],
        500,
        true
        )
    }
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy()
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    ready = true
})
let projectile2: Sprite = null
let projectile: Sprite = null
let ready = false
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`field`)
let goalPost = sprites.create(img`
    .............cc.
    ............cbbc
    ............cbbc
    ...........bdcc.
    ...........bdbb.
    ..........bddc..
    ..........bdbb..
    .........bddc...
    .........bdbb...
    ........bddc....
    ........bdbb....
    .......bddc.....
    .......bdbb.....
    ......bddc......
    ......bdbb......
    .....bddc.......
    .....bdbb.......
    ....bddc........
    ....bdbb........
    ...bddc.........
    ...bdbb.........
    ..bddc..........
    ..bdbb..........
    .bddc...........
    .bdbb...........
    b1dc............
    b11c............
    b11c............
    b11c.........cc.
    b11c........cbbc
    b11c........cbbc
    b11c.......bdcc.
    b11c.......bdbb.
    b11c......bddc..
    b11bccc...bdbb..
    b11bbbbcccddc...
    b11bcccbccdbb...
    b11b..ccbddc....
    b11b...ccdbbc...
    b11b...bddcbc...
    b11b...bdbbcbc..
    b11b..bddc.fbc..
    b11b..bdbb.fbf..
    b11b.bddc..fcf..
    b11b.bdbb..fcf..
    b11bbddc...fcf..
    b11bbdbb...fcf..
    b11bddc...cfcfc.
    b11ddbb..cbfcfbc
    b1dddc...cdfffdc
    b1ddbb...cdcfcdc
    cdddc....cbdddbc
    cddbb....cbbbbbc
    cddc.....cbbbbbc
    cdbb.....cbbbbbc
    .cc......cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........8bbbbb8
    .........8bbbbb8
    .........6bbbbb6
    ..........6bbb6.
    ...........666..
    `, SpriteKind.Goal)
mySprite = sprites.create(assets.image`rider_player0`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
mySprite.setPosition(10, 60)
goalPost.setPosition(122, 36)
ready = true
info.startCountdown(15)
game.onUpdateInterval(500, function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`redblacks_player0`, -50, 0)
})
