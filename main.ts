radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        lopen()
    }
    if (receivedNumber == 20) {
        zwaaien()
    }
    if (receivedNumber == 30) {
        stampen()
    }
    if (receivedNumber == 40) {
        links()
    }
    if (receivedNumber == 60) {
        jump()
    }
})
function links () {
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(250)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(250)
    }
}
input.onButtonPressed(Button.A, function () {
    zwaaien()
})
function stampen () {
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        pins.servoWritePin(AnalogPin.P2, 125)
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
    }
}
input.onButtonPressed(Button.AB, function () {
    stampen()
})
input.onButtonPressed(Button.B, function () {
    lopen()
})
function jump () {
    for (let index = 0; index < 4; index++) {
        strip.showRainbow(1, 360)
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(1000)
        strip.showRainbow(1, 360)
        pins.servoWritePin(AnalogPin.P1, 145)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(1000)
    }
}
function lopen () {
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        pins.servoWritePin(AnalogPin.P1, 100)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        pins.servoWritePin(AnalogPin.P1, 45)
        pins.servoWritePin(AnalogPin.P2, 45)
        basic.pause(1000)
    }
}
function zwaaien () {
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(500)
    }
}
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB_RGB)
strip.showRainbow(1, 360)
strip.show()
basic.showIcon(IconNames.Heart)
pins.servoWritePin(AnalogPin.P1, 145)
pins.servoWritePin(AnalogPin.P2, 0)
