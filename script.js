let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let temporizador = document.querySelector('.temporizador');
let time;

let segundos = 0;
let minutos = 0;

function comecar() {
    time = setInterval(()=> { timer()}, 10);
}

function parar() {
    clearInterval(time);
}

function resetar() {

    clearInterval(time);

    segundos = 0;
    minutos = 0;

    temporizador.innerHTML = "00:00"
}

function timer() {
    segundos++;

    if(segundos == 59) {
        segundos = 0;
        minutos++;
    }

    let txt = ((minutos < 10 ? '0' + minutos : minutos) + ":" + (segundos < 10 ? '0' + segundos : segundos));

    temporizador.innerHTML = txt;
}
