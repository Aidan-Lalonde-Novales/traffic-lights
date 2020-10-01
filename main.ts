// Created by Aidan L-N
// Created Oct 1st 2020
// 
// Code that displays the traffic lights on button A pressed.
input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(1000)
    strip.clear()
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(1000)
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
    strip.clear()
    basic.showIcon(IconNames.Happy)
})
// Created By Aidan L-N
// Created Oct 1st 2020
// 
// Code that sets up the neopixel so that pressing A will start traffic lights.
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
