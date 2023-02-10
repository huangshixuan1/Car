function backbackback海道 () {
    pwm = 150
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
    } else if (receivedNumber == 2) {
        backbackback海道()
    } else if (receivedNumber == 4) {
        left旅遊啪啪造()
    } else if (receivedNumber == 6) {
        rightnow過年要破產()
    } else {
        stopstopyourdangerousthing()
    }
})
function left旅遊啪啪造 () {
    pwm += 30
    if (pwm >= 255) {
        pwm = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    pwm - 30
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
    pwm - 30
    )
}
function gogo宜得利 () {
    pwm = 150
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
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
let pwm = 0
radio.setGroup(200)
