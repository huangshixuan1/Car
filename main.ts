function backbackback海道 () {
    pwm = 250
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    100
    )
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        gogo宜得利()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        backbackback海道()
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (receivedNumber == 4) {
        left旅遊啪啪造()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (receivedNumber == 6) {
        rightnow過年要破產()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (receivedNumber == 0) {
        stopstopyourdangerousthing()
        basic.clearScreen()
    } else if (receivedNumber == 9) {
        開9右邊()
    } else if (receivedNumber == 7) {
        關7左邊()
    }
})
function 開9右邊 () {
    pins.servoWritePin(AnalogPin.P7, 180)
}
function left旅遊啪啪造 () {
    pwm += 30
    if (pwm >= 255) {
        pwm = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    pwm - 50
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    pwm
    )
}
function stopstopyourdangerousthing () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
function 關7左邊 () {
    pins.servoWritePin(AnalogPin.P7, 0)
}
function rightnow過年要破產 () {
    pwm += 30
    if (pwm >= 255) {
        pwm = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    pwm
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    pwm - 50
    )
}
function gogo宜得利 () {
    pwm = 250
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    100
    )
}
let pwm = 0
radio.setGroup(171)
