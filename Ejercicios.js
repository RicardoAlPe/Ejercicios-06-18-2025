// ejercicio 1 

let input = prompt("ingrese los nombres separados por espacios:");
let nombres = input.split(" ");

nombres.forEach(nombre => {
  console.log(`hola ${nombre}`);
});

// ejercicio 2   

let input = prompt("ingrese los numeros separados por espacios:");
let numeros = input.split(" ").map(Number);
let menor = Math.min(...numeros);

console.log(`El numero menor es: ${menor}`);

// ejercicio 3 

let input = prompt("ingrese los nnmeros separados por espacios:");
let numeros = input.split(" ").map(Number);
let suma = numeros.reduce((acc, num) => acc + num, 0);

console.log(`la suma de todos los nnmeros es: ${suma}`);

// ejercicio 4

let input = prompt("ingrese valores separados por espacios:");
let valores = input.split(" ");
let valorBuscado = prompt("ingrese valor a buscar:");

if (valores.includes(valorBuscado)) {
  console.log(`el valor ${valorBuscado} se encuentra entre los valores originales`);
} else {
  console.log(`el valor ${valorBuscado} NO se encuentra entre los valores originales`);
}

// ejercicio 5 


const valoresStr = prompt("ingrese los valores separados por espacios:");


const valores = valoresStr.split(" ");


const valorABuscar = prompt("ingrese valor a buscar:");


const indice = valores.indexOf(valorABuscar);

if (indice !== -1) {
  console.log(`el valor ${valorABuscar} se encuentra en el indice ${indice}`);
} else {
  console.log(`el valor ${valorABuscar} no se ha encontrado.`);
}




