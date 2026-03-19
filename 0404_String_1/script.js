const comida = 'pizza';
const agua = new String('agua');
console.log(comida.length);

comida[0];
agua[0];

const frase = "A melhor comida";

console.log(frase[frase.length - 1]);
console.log(frase.charAt(3));

const frase2 = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta1 = frase2 + linguagem;
const fraseCompleta = frase2.concat(linguagem);

console.log(fraseCompleta1);
console.log(fraseCompleta);

const fruta = 'Banana';
const listaFrutas = "melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta, 5));

console.log(fruta.startsWith('ba'));
console.log(fruta.endsWith('ba'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 2)); //seleciona os dois primeiros caracteres
console.log(transacao1.slice(2)); //corta os dois primeiros caracteres
console.log(transacao1.slice(0, -2)); //corta os dois ultimos caracteres
console.log(transacao1.slice(-5)); //corta os ultimos caracteres


const linguagem3 = 'JavaScript';

console.log(fruta.indexOf('a'));
console.log(fruta.lastIndexOf('a'));

const preco = "R$ 99,00"

console.log(preco.padStart(20, ','));

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(47));
})

const frase3 = 'ta';

console.log(frase3.repeat(3));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ');
listaItens = listaItens.replace(' ', ', '); //passa para o primeiro apenas
listaItens = listaItens.replace(/[ ]+/g, ', '); //passa para todos

console.log(listaItens);

const arraLista = listaItens.split('m');
console.log(arraLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novohtml = htmlArray.join('section');

console.log(htmlArray);
console.log(htmlText);
console.log(novohtml);

const frutasArray = ['banna', 'melancia', 'laranja'];

console.log(frutasArray.join('b'));

const valores = ' R$ 20,00   ';

console.log(valores.trim());
console.log(valores.trimEnd());
console.log(valores.trimStart());


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let rebimentoTotal = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');
    if (item.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal = taxaTotal + numeroLimpo;
        //ou 
        //taxaTotal += numeroLimpo;
    } else {
        rebimentoTotal += numeroLimpo;
    }
})

console.log(taxaTotal);
console.log(rebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTranposte = transportes.split(';');
console.log(arrayTranposte);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const novo = html.split('span');
console.log(novo.join('a'));

//ou
//html = html.split('span').join('a')

// Retorne o último caracter da frase
const frases = 'Melhor do ano!';

console.log(frases.slice(-1));
console.log(frases[frases.length -1]);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((item) =>{
    item = item.toLocaleLowerCase();
    item = item.trim();
    item = item.slice(0, 4);

    if(item === 'taxa'){
        totalTaxas++;
    }
    console.log(item);
})

console.log(totalTaxas);