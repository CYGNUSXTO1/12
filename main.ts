Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Green)
})
Mbit_IR.onPressEvent(RemoteButton.NUM8, function () {
    basic.showIcon(IconNames.Tortoise)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 33, 0)
    basic.pause(50)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM9, function () {
    basic.showIcon(IconNames.Heart)
})
Mbit_IR.onPressEvent(RemoteButton.NUM0, function () {
    basic.showIcon(IconNames.Yes)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 0, 70)
    basic.pause(50)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM7, function () {
    basic.pause(100)
    music.playTone(247, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.White)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Back, 35, 0)
    basic.pause(50)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 0, 71)
    basic.pause(50)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM3, function () {
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.NUM5, function () {
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.NUM2, function () {
    basic.pause(100)
    music.playTone(294, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
    music.ringTone(698)
    basic.pause(400)
    music.rest(music.beat(BeatFraction.Sixteenth))
})
Mbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.NUM6, function () {
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.Plus, function () {
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Pinkish)
})
Mbit_IR.onPressEvent(RemoteButton.NUM4, function () {
    basic.pause(100)
    music.playTone(349, music.beat(BeatFraction.Whole))
})
Mbit_IR.init(Pins.P8)
