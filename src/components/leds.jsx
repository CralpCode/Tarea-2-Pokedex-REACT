import './leds.css'

function Leds({number}) {
    return(
        <div className={colorNum(number)} id = "led-conf">
        </div>
    )
}

function colorNum(Num = 0) {
    if (Num === 1) {
        return "led-green"
    }
    if (Num === 2) {
        return "led-red"
    }
    if (Num === 3) {
        return "led-yellow"
    }
    if (Num === 4) {
        return "led-blue"
    }
}

export default Leds;