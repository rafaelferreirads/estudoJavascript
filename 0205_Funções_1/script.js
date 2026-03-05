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

function terceiraIdade(idade){
    if (typeof idade !== 'number'){
        console.log('Retorne sua idade');
    } else if ( idade >= 60){
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade(65));

var totalPaises = 193;

function faltaVisitar(paisesVisitados){
    //var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} paises`;
}
console.log(faltaVisitar(55));

var profissao = 'programador';

function dados(){
    var nome = 'rafael';
    var idade = 3;
    function outrosDados(){
        var endereco = ' minas';
        var idade = 7;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados();
}

console.log(dados());
//outrosDados();


// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
