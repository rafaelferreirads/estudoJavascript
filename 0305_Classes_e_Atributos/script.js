//const menu = document.querySelector('.menu');

// menu.classList.add('ativo', 'azul');
// menu.classList.remove('azul');
// menu.classList.toggle('azul');

// if(menu.classList.contains('ativo')){
//     menu.classList.add('possuiTags');
// }

// console.log(menu.classList);

const animais = document.querySelector('.animais');
console.log(animais.attributes);
console.log(animais.attributes[1]);
console.log(animais.attributes['class']);

const imgs = document.querySelector('img');

imgs.getAttribute('src');
imgs.setAttribute('alt', 'funcionou');
imgs.hasAttribute('id');
imgs.remove('alt');

//ou

const srcImg = imgs.hasAttribute('img'); // true / false se tem algum atributo
console.log(srcImg);




// Adicione a classe ativo a todos os itens do menu

const adiconaMenu = document.querySelectorAll('.menu a');

adiconaMenu.forEach((item) =>{
    item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

adiconaMenu.forEach((item) =>{
    item.classList.remove('ativo');
})

adiconaMenu[0].classList.add('ativo'); 

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img');

imagens.forEach((item)=>{
    const im = item.hasAttribute('alt');
    console.log(im);
})

// Modifique o href do link externo no menu

const linkHref = document.querySelectorAll('a[href^="http"]');
linkHref.forEach((item) => {
    item.setAttribute('href', 'modificando');
    console.log(item);
})

//ou

const linkHref2 = document.querySelector('a[href^="http"]');
    linkHref2.setAttribute('href', 'modificando2');
    console.log(linkHref2);


