function areaQuadrado (lados) {
    return lados;
    console.log('função ativa');
}

//areaQuadrado(2);
console.log(areaQuadrado(2));

function pi(){
    return 3.14;
}

var total = 5 * pi();

console.log(pi());

function imc (peso, altura){
    const imc = peso / (altura ** 2);
    //const img = peso / (altura * altura);
    return imc;
}

console.log(imc(86, 1.75));

function corFavorita(cor){
    if(cor === 'azul'){
        return 'ceu';
    }else if(cor === 'verde'){
        return 'mato';
    } else {
        return 'nenhum deles, nem verde nem vermelho';
    }
}

console.log(corFavorita('vermelho'));

addEventListener('click', function() {
    console.log('clicou');
});