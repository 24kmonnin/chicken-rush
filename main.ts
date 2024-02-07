controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
    	
    }
    mySprite.vy = -160
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
let farmer = sprites.create(assets.image`farmer`, SpriteKind.Player)
mySprite = sprites.create(assets.image`chicken`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
farmer.follow(mySprite, 50)
