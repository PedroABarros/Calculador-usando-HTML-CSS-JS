function digitar(num) {

    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero + num;
}


function limpar() {

    document.getElementById('tela').innerHTML = "";
}


function voltar() {

    var tela = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = tela.substring(0, tela.length - 1);
}


function calcular() {

    var resultado = document.getElementById('tela').innerHTML;
    if (tela) {
        document.getElementById('tela').innerHTML = eval(resultado);
    }
}

function digitarNP() {
    var numero = document.getElementById('tela').innerHTML;
    if(tela){
        document.getElementById('tela').innerHTML = numero * -1;

    }

}