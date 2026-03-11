const animais = document.getElementById('animais');
console.log(animais);

const grid = document.getElementsByClassName('grid-section');
console.log(grid.length);
console.log(grid[1]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);


const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHtml = document.getElementsByClassName('grid-section'); //aovivo
const gridSectionNome = document.querySelectorAll('.grid-section');

// primeiraUl.classList.add('grid-section');

console.log(gridSectionHtml);
console.log(gridSectionNome);

gridSectionNome.forEach(function (item, index){
    console.log(item);
});

const arrayGrid = Array.from(gridSectionHtml);

arrayGrid.forEach(function (item){
    console.log(item);
})


// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagens2 = document.querySelectorAll('img[src^="img/imagem"]');

console.log(imagens2);

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('[href^="#"]');

console.log(links)

// Selecione o primeiro h2 dentro de .animais-descricao

const titulo2 = document.querySelector('.animais-descricao h2');

console.log(titulo2);

// Selecione o último p do site

const paragrafo = document.querySelectorAll('p');
const paragrafo2 = document.querySelectorAll('p');

console.log(paragrafo[paragrafo.length - 1]);
//ou
console.log(paragrafo[--paragrafo.length]);

