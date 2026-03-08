var idioma = window.navigator.languages[2];

if (idioma === 'pt-BR'){
    console.log('esse site é brasileiro');
} else {
    console.log('esse site não é brasileiro');
}


console.log(navigator.languages);

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const selecao = document.querySelector('.ativo');

console.log(selecao.innerHTML);

// Retorne a linguagem do navegador

console.log(navigator.language);

// Retorne a largura da janela

console.log(window.innerWidth);
