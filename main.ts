function derivative (x: number) {
    h = 1e-8
    return (functionDef(x + h) - functionDef(x)) / h
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cameraY += gridSpacing
    renderGraph()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scale += scale * 1.25 / 25
    renderGraph()
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    cameraY += gridSpacing
    renderGraph()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scale += 0 - scale * 1.25 / 25
    renderGraph()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    cameraX += gridSpacing
    renderGraph()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cameraX += 0 - gridSpacing
    renderGraph()
})
function functionDef (x: number) {
    return Math.sin(x)
   // return 0- Math.abs()
  // return Math.pow(Math.E,(0- Math.pow(x,2))) * (Math.cos(10*x))
    // return Math.sqrt(Math.cos(Math.sin(Math.tan(x)) + (1 / (1- Math.pow(Math.E,x))))) / (x - 6)
   // return Math.pow(Math.E, Math.sin(x)) - Math.cos(4 * x) + Math.sin(x / 10)
   // return Math.tan(x * Math.sin(Math.pow(x,2))) * Math.cos(Math.pow(x,3))
}
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    scale += scale * 1.25 / 25
    renderGraph()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cameraX += gridSpacing
    renderGraph()
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    cameraY += 0 - gridSpacing
    renderGraph()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cameraY += 0 - gridSpacing
    renderGraph()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    scale += 0 - scale * 1.25 / 25
    renderGraph()
})
function renderGraph () {
    for (let x = 0; x <= 480; x++) {
        for (let y = 0; y <= 360; y++) {
            picture.setPixel(x, y, 15)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
        console.log(scale)
    }
    // let gridSpacing = 50 / scale
    gridSpacing = 10 ** Math.round(Math.log(50 / scale) / Math.LN10)
    startX = Math.floor((cameraX - 240 / scale) / gridSpacing) * gridSpacing
    for (let gx = 0; gx <= cameraX + 240 / scale - startX; gx += gridSpacing) {
        let screenX = Math.round(240 + (gx + startX - cameraX) * scale)
        if (gridSpacing >= 1) {
            zoomRatio = 1
        } else if (gridSpacing < 1 && gridSpacing != 0.000001) {
            zoomRatio = 1 / (10 * (gridSpacing))
        } else if (gridSpacing === 0.000001) {
            zoomRatio = 100000
        }
        let myTextSprite = fancyText.create("abc")
   /*     if ((gridSpacing * (gx + startX)) === 0){

            fancyText.setText(myTextSprite, "0")
           /* let myTextSprite = fancyText.create("0") */

            fancyText.setText(myTextSprite,(Math.round(((gx + startX) * (10 * zoomRatio))) / (10 * zoomRatio)).toString())
        
        myTextSprite.setPosition(screenX, 185 + cameraY * scale)
        myTextSprite.setKind(SpriteKind.Enemy)
        if (screenX >= 0 && screenX <= 480) {
            for (let y2 = 0; y2 <= 360; y2 += 5) {
                picture.setPixel(screenX, y2, 4)
            
        }
    }
    }
startY = Math.floor((cameraY - 180 / scale) / gridSpacing) * gridSpacing
    for (let gy = 0; gy <= (cameraY + 180 / scale) - startY; gy += gridSpacing) {
        let screenY = Math.round(180 - (gy + startY - cameraY) * scale)

        if (screenY >= 0 && screenY <= 360) {
            for (let x2 = 0; x2 <= 480; x2 += 5) {
                picture.setPixel(x2, screenY, 4)
            }
        }
    }
picture.drawLine(0, 180 + cameraY * scale, 480, 180 + cameraY * scale, 7)
    picture.drawLine(240 - cameraX * scale, 0, 240 - cameraX * scale, 360, 7)
    for (let x22 = 0; x22 <= 480; x22++) {
        Xx = cameraX + (x22 - 240) / scale
        Yeee = functionDef(Xx)
        Yy = 180 - (Yeee - cameraY) * scale
        for (let y22 = 0; y22 <= Math.min(360, Yy + 1) - Math.max(0, Yy - 1); y22++) {
            ytrue = y22 + Math.max(0, Yy - 0.75)
            if (Math.abs(ytrue - Yy) <= 2) {
                picture.setPixel(x22, ytrue, 9)
            }
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    cameraX += 0 - gridSpacing
    renderGraph()
})
let ytrue = 0
let Yy = 0
let Yeee = 0
let Xx = 0
let h = 0
let startY = 0
let startX = 0
let gridSpacing = 0
let scale = 0
let picture: Image = null
let cameraY = 0
let cameraX = 0
let zoomRatio = 0
scale = 20
gridSpacing = 10 ** Math.round(Math.log(50 / scale) / Math.LN10)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 480
    export const ARCADE_SCREEN_HEIGHT = 360
}
picture = image.create(480, 360)
let mySprite = sprites.create(picture, SpriteKind.Player)
renderGraph()
