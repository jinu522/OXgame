input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
