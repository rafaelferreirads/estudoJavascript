let pessoa = {
    nome: 'rafael',
    idade: 39
}

console.log(pessoa);

let quadrado = {
    lados: 4,

    area: function (lado){
        return lado * lado;
    },
    perimetro: function (lado){
        return this.lados * lado;
    },
    cinco(){
        return 5;
    },
}

console.log(quadrado.area(4));
console.log(quadrado.perimetro(4));
console.log(quadrado.cinco());

console.log(Math.random());

console.table(quadrado);

let menu = {
    with: 800,
    height: 50,
    backgroundColor: '#ffff',
    metadeHeight(){
        return this.height / 2;
    }
}

let bg = menu.backgroundColor;

console.log(menu.metadeHeight());


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let dadosPessoais = {
    nome: 'rafael',
    sobrenome: 'ferreira',
    idade: 39,
}

// Crie um método no objeto anterior, que mostre o seu nome completo

let dadosPessoaiss = {
    nome: 'rafael',
    sobrenome: 'ferreira',
    idade: 39,
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
}
console.log(dadosPessoaiss.nomeCompleto());

//ou

dadosPessoais.nomeCompleto2 = function(){
    return `${this.nome} ${this.sobrenome}`;
}

console.log(dadosPessoais.nomeCompleto2());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homen'){
            return 'cachorro latiu'
        } else {
            return 'nada'
        }
    }

}
console.log(cachorro.latir('home'));
