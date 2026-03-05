var idades = 3e10;
var total = 10 + 5 + 10;
var divs = 200 /5;
var modulo = 321 % 3;

console.log(idades, total, divs, modulo);

var somas = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(somas);

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN
var numero = 'carro' / 2;
var numero2 = 'carro';

console.log(numero, +numero2);

// Somar a string '200' com o número 50 e retornar 250

var somar = +'200' + 50;
console.log(somar);

// Incremente o número 5 e retorne o seu valor incrementado

var nus = 7;
console.log(++nus);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(pesoPorDois);

//resolução

var numero = +'80' /2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

console.log(peso);
