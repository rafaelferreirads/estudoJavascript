let videoGames = ['switch', 'ps4', 'xbox', '3ds'];

console.log(videoGames[2]);

for(let i = 1; i <= 10; i ++ ){
    console.log(i);
}

let i = 0;

while (i<=10){
    console.log(i);
    i++
}

for (let i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
}


for (let i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
    if(videoGames[i] === 'xbox'){
        break;
    }
}

videoGames.forEach(function (item, index, array){

    console.log(item, index, array)
})

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let copas = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copas.forEach((item) => {
    console.log(`O Brasil ganhou a copa de ${item}`)
})

for(let i = 0; i < copas.length; i++){
    console.log(`O Brasil ganhou a copa de ${copas[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for ( let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if(frutas[i] === 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length - 1];
    console.log(ultimaFruta);
    console.log(frutas);
