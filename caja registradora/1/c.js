//Escribe un programa que pida al usuario un número entero positivo N y calcule 
//la suma de los números pares entre 1 y N (inclusive). El programa debe mostrar
// el resultado de la suma en la consola.
let num = parseInt(prompt("igresar numero"))
let res = 0;
for (let index = 0; index <= num; index++) {
    if (index % 2 == 0) {
        res+=index
    }
}
console.log(res);
