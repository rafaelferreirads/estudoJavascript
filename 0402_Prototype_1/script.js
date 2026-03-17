function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.abracar = function(){
        return ' abraçou';
    }
    this.andar = function(){
        return 'andou pelo obj';
    }
}

Pessoa.prototype.andar = function(){
    return this.nome + ' pessoal andou';
}

Pessoa.prototype.nadar = function(){
    return this.nome + ' pessoal nadou';
}

const andre = new Pessoa('andre', 28);

console.log(Pessoa.prototype);

const pais = 'brasil';
const cidade = new String('rio');

pais.charAt(0);
cidade.charAt(0);

String.prototype;

const listaAnimais = ['dog', 'gato', 'cavalo'];

// Array.prototype.slice.caller(lista);
// Array.from(lista);

const carro = {
    marca: 'ford',
    preco: 200,
    andar( ){
        return true;
    }
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.prototype.nomeCompletos = function(){
        return `${this.nome} ${this.sobrenome} ${this.idade}`
    }
}

const rafael = new Pessoas('rafael','ferreira', 3);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// NodeList
// NodeList.prototype
// HTMLCollection

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(document.prototype);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //htmlLIelement
li.click; //function
li.innerText; //string
li.value; //number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string
