var pessoa = {
    nome: 'rafael',
    idade: 3,
    profissao: 'programador',
    possuiFaculdade: true,
}

pessoa.nome;
pessoa.profissao;

console.log(pessoa.nome, pessoa.profissao);

var quadrado = {
    lados: 4,

    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    },

    //ou

    area2(lado){
        return lado * lado;
    },
    perimetro2(lado){
        return this.lados * lado;
    },
}

console.log(quadrado.lados, quadrado.area(4), quadrado.perimetro(5), quadrado.area2(5));

console.log(Math.random(), Math.PI);



// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const dados = {
    nome: 'rafael',
    sobrenome: 'ferreira',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

console.log(dados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
 valor(){
    return this.preco * 3;
 },
}

//ou

carro.preco = 3000;

console.log(carro.valor(), carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'preto',
    cor: 'preto',
    idade: 10,
    latir(pessoa ='mulher'){
        if (pessoa === 'homem'){
            return 'latir';
        } else {
           return 'mudo';
        }
    }
}

console.log(cachorro.latir('homem'));