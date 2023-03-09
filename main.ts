basic.showIcon(IconNames.Angry)
basic.forever(function () {
    Tinybit.RGB_Car_Big2(255, 0, 0)
    basic.pause(150)
    Tinybit.RGB_Car_Big2(0, 0, 255)
    basic.pause(150)
})
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(150)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(150)
})
