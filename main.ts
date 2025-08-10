let Volumen = 0
let Temperatura = 0
basic.forever(function () {
    Volumen = 150
    if (Volumen == 150) {
        basic.showString("T")
        basic.clearScreen()
        basic.showNumber(Temperatura)
    } else {
        if (Temperatura > 60) {
            basic.showIcon(IconNames.Skull)
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.Yes)
        }
    }
    if (Volumen < 150) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.showNumber(Volumen)
    Temperatura = 50
    basic.showString("V")
    basic.clearScreen()
    basic.showNumber(Volumen)
})
