function imc(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

console.log(imc(85, 1.75));

function corFavorita(cor){
    if(cor === 'azul'){
        console.log('eu gosto');
    }else if(cor === 'verde'){
        console.log('eu gosto menos');
    } else {
        console.log('talve eu goste');
    }
}

corFavorita('vermelhor');

addEventListener('click', function(){
    console.log('clicou');
});


// Crie uma função para verificar se um valor é Truthy

function verdaeiro(dados){
    return !!dados;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado){
    return lado * 4;
}

console.log(perimetro(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    // nome = 'rafael';
    // sobrenome = 'ferreira';
    // return nome + sobrenome;

    //ou

    return `${nome} ${sobrenome}`;
}
    console.log(nomeCompleto('Rafael', 'Ferreira'));

// Crie uma função que verifica se um número é par

function epar(numero){
    let modulo = numero % 2;
    if(modulo === 0){
        return true;
        console.log('é par');
    } else {
        return false;
        console.log('é impar');
    }
}
console.log(epar(206));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(tipo){
    return typeof tipo;
}

console.log(tipoDado('rafael'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    console.log('Rafael');
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
