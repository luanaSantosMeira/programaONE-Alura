var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela(){
    pincel.clearRect(0, 0, 600, 400);
}

var x = 20;

function atualizaTela() {
    limpaTela();
    desenhaCirculo(x, 20, 10);
    x++;
}

setInterval(atualizaTela, 10);