const listaAnimais = document.querySelector('.animais-lista');

const animaisTop = listaAnimais.offsetTop;
const animaisTop1 = listaAnimais.offsetLeft;

console.log(animaisTop, animaisTop1);
console.log(listaAnimais.clientHeight);
console.log(listaAnimais.scrollHeight);

const tituloH = document.querySelector('.titulo');

console.log(tituloH.offsetLeft);

const rect = document.querySelector('h2');

console.log(rect.getBoundingClientRect());

console.log(
    window.innerWidth,
    window.outerWidth,
    window.outerHeight,
    window.innerHeight,
    window.pageYOffset,
    window.pageXOffset
);

const rect2 = document.querySelector('nav');

const segundoRect = rect2.getBoundingClientRect();

if (segundoRect.top < 0) {
    console.log('passou do elemento');
}

console.log(rect2, segundoRect.top);

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
    console.log('tela menor que 600px')
} else {
    console.log('tela maior que 600px')
}

//ou

const small2 = window.matchMedia('(max-width: 600px)').matches;

if (small2) {
    console.log('tela menor que 600px')
} else {
    console.log('tela maior que 600px')
}

// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img');

console.log(img.offsetTop);
console.log(img.getBoundingClientRect());

// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imgs = document.querySelectorAll('img');
    let soma = 0;

    imgs.forEach((item) => {
        soma = soma + item.offsetWidth;
    });
    console.log(soma);

}

window.onload = function () {
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link)=>{
    const linkW = link.offsetWidth;
    const linkH = link.offsetHeight;

    if(linkW >= 48 && linkH >= 48){
        console.log(link, 'são no padrão');
    }else{
        console.log(link, 'não são no padrão');
    }
})

console.log(links.innerWidt);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser2 = window.matchMedia('(max-width: 720px').matches;
console.log(browser2);
if (browser2) {
    const menus = document.querySelector('.menu');
    menus.classList.add('menu-mobile');
}