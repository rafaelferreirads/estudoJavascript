const menu = document.querySelector('.menu');
menu.classList.add('ativo');
console.log(menu);

if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('não-possui-azul');
}

menu.className += ' vermelho';

// conseole.log(menu.className);

const animais = document.querySelector('.animais');

console.log(animais.attributes[0]);
// console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

console.log(img.getAttribute('src'));
console.log(img.setAttribute('alt', 'é uma raposa'));

// Adicione a classe ativo a todos os itens do menu

const addMenu = document.querySelectorAll('.menu a');

addMenu.forEach((item)=>{
    item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

addMenu.forEach((item)=>{
    item.classList.remove('ativo');
})

addMenu[0].classList.add('ativo');


// Verifique se as imagens possuem o atributo alt

const verificarImg = document.querySelectorAll('img');

verificarImg.forEach((item)=>{
    const possuiAlt = item.hasAttribute('alt');
    console.log(img, possuiAlt);
})

// Modifique o href do link externo no menu

const modifique = document.querySelector('a[href^="http"]');

modifique.setAttribute('href', 'https://www.youtube.com/');



