const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
    // console.log(item, index, array);
});

imgs.forEach((item, index, array) =>{
    console.log(item, index, array);
});


// Mostre no console cada parágrado do site

const paragrafo = document.querySelectorAll('p');

paragrafo.forEach((item) =>{
    console.log(item);
})

// Mostre o texto dos parágrafos no console

paragrafo.forEach((item)=>{
    console.log(item.innerText);
})

// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs2.forEach(() => {
  console.log(i++);
});

imgs2.forEach(() => i++);

