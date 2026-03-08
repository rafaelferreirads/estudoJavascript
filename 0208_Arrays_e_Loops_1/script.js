var videoGames = ['switch', 'ps4', 'xbox', 'nintendo'];

console.log(videoGames[3]);
//console.log(videoGames.pop(), videoGames.push['sega'], videoGames.length);
for(let n = 0; n < 10; n++){
    console.log(n);
}

var i =0;
while (i < 10) {
    console.log(i);
    i++;
}

for (let i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
}

for (var i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
    if(videoGames[i] === 'xbox'){
        break;
    }
}

videoGames.forEach(function(item){
     console.log(item);
});

var frutas = ['banana', 'pera', 'melancia', 'jabuticaba' ];

frutas.forEach(function(suco, index, array){
    console.log(suco, index, array);
})

var numero = 0;
var maximo = 5;

for (; numero < maximo;) {
    console.log(numero);
    numero++
}
   


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copasBrasil = [1959, 1962, 1970, 1994, 2002];
console.log(copasBrasil);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i< copasBrasil.length; i++){
    console.log('O brasil ganhou a copa de' + copasBrasil[i]);
}
//ou
copasBrasil.forEach(function(total){
    console.log(`O brasil ganhou a copa de ${total}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas2 = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i < frutas2.length; i++){
    console.log(frutas2[i]);

    if(frutas2[i] === 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var frut = frutas2[4];

console.log(frut);

//ou forma mais correta de pegar o ultimo item

var ultima = frutas2[frutas2.length - 1]
console.log(ultima);