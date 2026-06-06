var i = 50;

for (let i = 0; i < 10; i++){
    console.log(`numero ${i}`);
}

console.log(i);

const semana = 'sexta';

console.log(semana);

const data = {
    ano: 2018,
    mes: 'janeiro',
}

data.ano = 2019;
data.mes = 'julho';
data.dia = 18;

console.log(data);


// Por qual motivo o código abaixo retorna com erros?

{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
