function Carro() {
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


function Carro2(marca, precoInicial) {
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
    this.element = function () {
        return document.querySelector(this.seletor);
        console.log(this.seletor);
    }
    this.ativar = function () {
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

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
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

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
    this.removeClasse = function (classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        })
    }
}

const listaItens = new Dom('li');
listaItens.addClass('ativo');


function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function () {
        console.log('ola, meu nome é ' + this.nome + ' e tenho ' + this.idade);
    }
}

const joao2 = new Pessoa2('Joao', 25);
const maria2 = new Pessoa2('Maria', 26);

console.log(joao2.apresentar());
console.log(maria2.apresentar());


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    this.valorTotalEstoque = function () {
        console.log(this.preco * this.estoque)
    }
}

const margarina = new Produto('Margarina', 5, 10);

console.log(margarina.valorTotalEstoque());


function Carros(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadeAtual = 0;
    this.acelerar = function () {
        this.velocidadeAtual += 10;
    }
    this.frear = function () {
        this.velocidadeAtual -= 5;
    }
}

const carros = new Carros('vw', 'fusca');

carros.acelerar();
carros.acelerar();
carros.acelerar();
carros.frear();

console.log('a velocidade do carro é ', carros.velocidadeAtual);


function ContaBancaria(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
    this.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('saldo insuficiente');
        }
    }
    this.verSaldo = function () {
        return this.saldo;
    }
}

const conta = new ContaBancaria('rafael', 50000);
conta.depositar(2500);
conta.sacar(600000);
conta.verSaldo();

console.log(conta.verSaldo());


function Aluno(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }
    this.aprovado = function () {
        const media = this.media();
        if (media >= 7) {
            console.log('aprovado');
        } else {
            console.log('reprovado');
        }
    }
}

const aluno = new Aluno('rafael', 7, 8);
console.log(aluno.media());
aluno.aprovado();


function Livro(titulo, autor, paginas){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.paginasLidas = 0;
    this.ler = function(paginas){
        if(this.paginasLidas + paginas <= this.paginas){
            this.paginasLidas += paginas;
        } else {
            console.log('voce não pode ler mais paginas que o livro possui');
        }
    }
    this.progresso = function(){
        console.log('Você leu ' + this.paginasLidas + ' de ' + this.paginas + ' paginas');
    }
}

const livroLido = new Livro('o homem', 'autor', 500);

livroLido.ler(10);
livroLido.ler(20);
livroLido.ler(30);
livroLido.progresso();

function Produto2(nome, preco){
    this.nome = nome;
    this.preco = preco;
    this.aplicarDesconto = function(percentual){
        const desconto = this.preco * (percentual / 100);
        this.preco -= desconto;
    }
    this.aumentarPreco = function(percentual){
        const aumento = this.preco * (percentual / 100);
        this.preco += aumento;
    }
}

const produtos = new Produto2('café', 24);
const produtos2 = new Produto2('café', 24);

produtos.aplicarDesconto(10);
produtos2.aumentarPreco(10);

console.log(produtos.preco);
console.log(produtos2.preco);


function Jogador(nome, vida){
    this.nome = nome;
    this.vida = vida;
    this.receberDano = function(valor){
        this.vida -= valor;
        if(this.vida < 0){
            this.vida = 0;
        }
    }
    this.curar = function(valor){
        this.vida += valor;
        if(this.vida > 100){
            this.vida = 100;
        }
    }
    this.status = function(){
        console.log(this.nome + ' tem ' + this.vida + ' de vida ');
    }
}

const jogador = new Jogador('genteboa', 100);

jogador.receberDano(30);
jogador.curar(30);
jogador.status();

function Carrinho(itens){
    this.itens = [];
    this.adicionarItem = function(nome, preco){
        this.itens.push(nome, preco);
    }
    this.removerItem = function(nome){

    }
    this.total = function(){
        return this.itens;
    }
}

const carro = new Carrinho();

carro.adicionarItem('camisa', 20);
carro.adicionarItem('calça', 120);
console.log(carro.total());