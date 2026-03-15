function Carro(){
    this.marca = 'marca';
    this.preco = 0;
}

const fiat = new Carro();
fiat.marca = 'fiat';
fiat.preco = 300;

const vw = new Carro();
vw.marca = 'gol';
vw.preco = 4000;

console.log(fiat);
console.log(vw);
console.log(Carro);


function Carro2 (marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000); 


// const Dom = {
//     seletor: 'li',
//     element(){
//         return document.querySelector(this.seletor);
//         console.log(this.seletor);
//     },
//     ativar(){
//         this.element().classList.add('ativar');
//     }
// }

function Dom(seletor) {
    this.element  = function(){
        return document.querySelector(this.seletor);
        console.log(this.seletor);
    }
    this.ativar = function(){
        this.element().classList.add('ativar');
    }
}

// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
        console.log(this.nome + ' Andou');
    }
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function (classe){
        elementList.forEach((element) =>{
            element.classList.add(classe);
        })
    }
    this.removeClasse = function (classe){
        elementList.forEach((element) =>{
            element.classList.remove(classe);
        })
    }
}

const listaItens = new Dom('li');
listaItens.addClass('ativo');


function Pessoa2(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function(){
        console.log('ola, meu nome é ' + this.nome + ' e tenho ' + this.idade);
    }
}

const joao2 = new Pessoa2('Joao', 25);
const maria2 = new Pessoa2('Maria', 26);

console.log(joao2.apresentar());
console.log(maria2.apresentar());


function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    this.valorTotalEstoque = function(){
       console.log(this.preco * this.estoque)
    }
}

const margarina = new Produto('Margarina', 5, 10);

console.log(margarina.valorTotalEstoque());


function Carros(marca, modelo, velocidadeAtual){
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadeAtual = 0;
    this.acelerar = function (){
        console.log(this.velocidadeAtual + 10);
    }
    this.frear = function(){
        console.log(this.velocidadeAtual - 5);
    }
}

const carros = new Carros('vw', 'fusca', 40);

console.log(carros.acelerar());