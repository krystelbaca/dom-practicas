// inicializando nuestro contador
let count = 0

let value = document.getElementById('contador')
const btnIncrement = document.getElementsByClassName('.increment')


function increment() {
    value = count++
    document.getElementById('contador').innerHTML = value
}