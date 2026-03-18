console.log(typeof Array.from !== "undefined");

if(typeof Array.from !== "undefined"){
    console.log('não existe');
} else {
    console.log('existe');
}

// Liste 5 objetos nativos
// Object
// String
// Array
// function
// parseInt
// Date

// Liste 5 objetos do browser
// Windown
// history
// Document
// HTMLCollection
// NodeList


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof window.onafterprint !== "undefined"){
    console.log('existe');
}

if(typeof document.adoptNode !== "undefined"){
    console.log('existe');
}

if(typeof document.webkitHidden !== "undefined"){
    console.log('existe');
}