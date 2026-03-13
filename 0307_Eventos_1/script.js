const img = document.querySelector('img');

function callback(event) {
    console.log('clicou', event);
}

img.addEventListener('click', callback);

const imagensLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

imagensLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="https"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log('clicou');
    console.log(this);
    console.log(this.getAttribute('href'));
    //ou o mesmo que currentTarget
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);


const h1 = document.querySelector('h1');

function handEvent(event) {
    console.log(event.target, event);
}

h1.addEventListener('click', handEvent);
// h1.addEventListener('mouseenter', handEvent);
// h1.addEventListener('mousemove', handEvent);


// window.addEventListener('scroll', handEvent);
window.addEventListener('resize', handEvent);
window.addEventListener('keydown', handEvent);

function teclado(event) {
    if (event.key === 'f') {
        document.body.classList.toggle('fullscreme')
    }
}

window.addEventListener('keydown', teclado);



const fotos = document.querySelectorAll('img');

function clicou(event) {
    console.log(event.target);
}

fotos.forEach((img) => {
    img.addEventListener('click', clicou)
})


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const clickLinks = document.querySelectorAll('a[href^="#"');

function classeAtivo(event) {
    event.preventDefault();
    clickLinks.forEach((item) => {
        item.classList.remove('ativo');
    });

    event.currentTarget.classList.add('ativo');
}

clickLinks.forEach((item) => {
    item.addEventListener('click', classeAtivo);

});



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const corpo = document.querySelector('body');

function corpoClique(event) {
    console.log(event.target);
}

corpo.addEventListener('click', corpoClique);

//ou

const corpos = document.querySelectorAll('body *');

function corpoCliques(event) {
    console.log(event.currentTarget);
}

corpos.forEach((elemento) => {
    elemento.addEventListener('click', corpoCliques);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const corpos2 = document.querySelectorAll('body *');

function corpoCliques2(event) {
    // event.currentTarget.remove();
}

corpos2.forEach((elemento) => {
    elemento.addEventListener('click', corpoCliques2);
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function clickK(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', clickK);