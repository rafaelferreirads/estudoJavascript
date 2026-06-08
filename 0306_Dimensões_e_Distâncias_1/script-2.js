const listaAnimais = document.querySelector('.animais-lista');


console.log(listaAnimais.scrollHeight);
console.log(listaAnimais.clientHeight);
console.log(listaAnimais.offsetLeft);

const rects = listaAnimais.getBoundingClientRect();

console.log(rects);
console.log(rects.height);
console.log(rects.width);
console.log(rects.top);

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerHeight,
    window.outerWidth,
    window.pageYOffset,
    window.pageXOffset
)

const small = window.matchMedia('(max-width: 600px)');

if(small.matches){
    console.log('tela menor que 600px');
} else {
    console.log('Tela maior que 600px');
}

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img');
const primeiraImagemTop = primeiraImagem.offsetTop;
console.log(primeiraImagemTop);

// Retorne a soma da largura de todas as imagens
const somaImg = document.querySelectorAll('img');
let soma = 0;
somaImg.forEach((item)=>{
    soma += item.offsetWidth;
    // console.log(item.offsetWidth);
})
   console.log(soma);
// const soma = somaImg.getBoundingClientRect();
// console.log(soma.width);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((item)=>{
    const linkW = item.offsetWidth;
    const linkH = item.offsetWidth;
    if(linkW >= 48 && linkH >= 48){
        console.log(item, 'possui acessibiliade');
    } else {
        console.log(item, 'não possui');
    }
})
// console.log(links.innerWidth);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const smalls = window.matchMedia('(max-width: 720px)').matches;

if(smalls){
    const classe = document.querySelector('.menu');
    classe.classList.add('menu-mobile');
}