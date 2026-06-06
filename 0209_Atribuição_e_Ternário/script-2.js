let numero = 20;
let numero2 = 10;
numero += 10; //numero = numero + 10;
numero += numero2; // numero = numero + numero2;

console.log(numero, numero, numero2);

let idade = 20;
let naoPossuiDiabetes = true;

let podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? true : false;

console.log(podeBeber);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;

console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'dar credito' : 'não dar credito';
console.log(darCredito);

