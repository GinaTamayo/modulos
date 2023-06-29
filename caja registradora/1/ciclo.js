//Escribe un programa que pida al usuario un número entero positivo N 
//y calcule la suma de los primeros N números enteros (es decir, 1 + 2 + 3 + ... + N). 
//El programa debe mostrar la suma total en la consola.
let num = parseInt(prompt("ingresar numero"));
let suma = 0;
if (num < 0) {
    console.log("el numero ngresado no es valido");
} else {
for (let index = 1; index <= num; index++) {
    suma+=index
    }
}
console.log(suma);
