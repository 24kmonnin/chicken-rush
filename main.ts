controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -160
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`water`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`barn`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
let farmer = sprites.create(assets.image`farmer`, SpriteKind.Enemy)
mySprite = sprites.create(assets.image`chicken`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
farmer.setPosition(0, 0)
farmer.follow(mySprite, 50)
if (true) {
	
}
