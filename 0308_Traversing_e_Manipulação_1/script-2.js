// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-lista');

// console.log(animaisLista.innerHTML);

// const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);

// console.log(lista.childNodes);
// console.log(lista.previousSibling);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// // lista.appendChild(titulo);
// // animais.appendChild(titulo);

// contato.insertBefore(animais, titulo);

// // contato.replaceChild(contato, titulo);

// const novo = document.createElement('h1');
// novo.innerText = 'novo titulo';
// novo.classList.add('titulo');

// contato.appendChild(novo);

// const h2 = document.querySelector('h2');
// const faq = document.querySelector('.faq');

// const novoH2 = h2.cloneNode(true);
// faq.appendChild(novoH2);

// Duplique o menu e adicione ele em copy
const menuDuplique = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const novoMenuDuplique = menuDuplique.cloneNode(true);

copy.appendChild(novoMenuDuplique);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiros = faq.querySelector('dt');
const proximoDD = primeiros.nextElementSibling;
console.log(proximoDD);

//ou

const primeiroDt = document.querySelector('.faq-lista');

console.log(primeiroDt.children[0]);

// Selecione o DD referente ao primeiro DT
console.log(primeiroDt.children[0].nextElementSibling);


// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;