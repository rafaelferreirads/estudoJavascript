
var possuiGraduacao = true;

if(possuiGraduacao){
    console.log('é verdade');
} else {
    console.log('é fake');
}

if ((5 - 15) && (5 + 5)){
    console.log('verdade');
} else {
    console.log('falso');
}

var corFavorita = 'verde';

switch (corFavorita) {
    case 'azul':
        console.log('ceu');
        break;
    case 'amarelo':
        console.log('sol');
        break;
    case 'verde':
        console.log('arvore');
        break;    
    default:
        console.log('feche');
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 19;
var idadeFilha = 9;

if(minhaIdade > idadeFilha){
    console.log('é maior')
}else if( minhaIdade === idadeFilha){
    console.log('é igual')
} else {
    console.log('é menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil >= china){
    console.log('quantidade do brasil maior')
} else {
    console.log('quantidade do brasil menor');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}