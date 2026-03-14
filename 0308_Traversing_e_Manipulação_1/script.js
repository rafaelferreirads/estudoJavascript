// const h1 = document.querySelector('h1');

// // h1.innerHTML = '<p> novo </p>';

// console.log(h1.innerHTML);

// const lista = document.querySelector('.animais-lista');
// console.log(lista.parentElement.parentElement.parentElement);
// console.log(lista.nextElementSibling); //pega o proximo elemento
// console.log(lista.previousElementSibling); //pega o elemento anterior

// console.log(lista.children.length);
// console.log(--lista.children.length);
// console.log(lista.children[lista.children.length - 1]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes);
// console.log(lista.previousSibling);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// // animais.appendChild(titulo);
// const mapa = document.querySelector('.mapa');

// // contato.removeChild(titulo);
// contato.replaceChild(lista, titulo);

// // contato.insertBefore(animais, mapa);

// const novoH1 = document.querySelector('h1');
// novoH1.innerText = "novo titulo";
// novoH1.classList.add('titulo');

// mapa.appendChild(novoH1);

// console.log(novoH1);

// const h12 = document.querySelector('h1');
// const faq = document.querySelector('.faq');

// const coneh1 = h12.cloneNode(true);

// faq.appendChild(coneh1);


// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copia = document.querySelector('.copy');

const dupla = menu.cloneNode(true);

copia.appendChild(dupla);

// Selecione o primeiro DT da dl de Faq

const dt = document.querySelector('.faq-lista');
console.log(dt.firstElementChild);

//ou

const faqf = document.querySelector('.faq');
const primeitoDt = faqf.querySelector('dt');
const primeitoDt2 = primeitoDt.nextElementSibling;

console.log(primeitoDt);
console.log(primeitoDt2);

// Selecione o DD referente ao primeiro DT

console.log(dt.firstElementChild.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const faqs = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faqs.innerHTML = animais.innerHTML;