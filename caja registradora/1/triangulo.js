//Escribe un programa que pida al usuario un número entero positivo N 
//y dibuje un triángulo de asteriscos (*) con base de longitud N. 
//El programa debe mostrar el triángulo en la consola.
let num = parseInt(prompt("Ingresar numero"));  

if (num <= 0) {
    console.log("qel numero no es valido");
} else {
    for (let index = 1; index <= num; index++) {
        let total = "";
        for (let j = 1; j <= index; j++) {
            total +="*";

        }
        console.log(total);
    }
}