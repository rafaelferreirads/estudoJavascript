const imgsI = document.querySelectorAll('img');

//let i = 0;
imgsI.forEach(function(item, index, array){
    //console.log(item, index, array);
});

const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item) => {
    //console.log(item);
})

//imgs2.forEach((item) => console.log(item));

// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => {
    console.log(item);
})

// Mostre o texto dos parágrafos no console

const textoP = document.querySelectorAll('p');

textoP.forEach((item)=>{
    console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

