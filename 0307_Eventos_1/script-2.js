const img = document.querySelector('img');

function call(event) {
    console.log(event);

    const alt = event.offsetX;
    console.log(alt);
}

img.addEventListener('click', call);

const imagensLista = document.querySelector('.animais-lista');

function callLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
}

imagensLista.addEventListener('click', callLista)

// console.log(imagensLista);

//prevenir eventos
const linksExterno = document.querySelector('a[href^="http"]');
function externo(event) {
    event.preventDefault();
    console.log('clicou');
    console.log(this);
}
linksExterno.addEventListener('click', externo);

function key(event) {
    if (event.key === 'f') {
        document.body.classList.toggle('fullscreen');

    }
    console.log(event.key);
}

window.addEventListener('keydown', key);


const novasImgs = document.querySelectorAll('img');

function imgs2(event){
    console.log(event.target);
    console.log(event.target.getAttribute('src'));
    console.log(event.currentTarget.getAttribute('src'));
}

novasImgs.forEach((item)=>{
    item.addEventListener('click', imgs2);
})

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
    event.preventDefault();
    linksInternos.forEach((item)=>{
        item.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link)=>{
    link.addEventListener('click', handleLink);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todos = document.querySelectorAll('body *');

function elementos (event){
    console.log(event.currentTarget);
    event.currentTarget.remove();
}

todos.forEach((elemento)=>{
    elemento.addEventListener('click', elementos);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
    
// event.currentTarget.remove();


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function clickT(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', clickT);t