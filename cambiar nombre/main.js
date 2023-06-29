import {seleccionar} from "./selecciionar.js";
import {ingresarExistencias, eliminarExistencia} from "./actualizar.js";
import { esquema } from "./model.js";
import {existenciasDisponibles} from "./disponible.js";
esquema()
function star() {
let opcion = parseInt(prompt("Ingrese 1 para mostrar la cantidad de productos disponibles, 2 para ingresar nuevas existencias del producto, 3 para eliminar existencias del producto"));
let producto = seleccionar()
    switch (opcion) {
        case 1:
            console.log(existenciasDisponibles());
            break 
        case 2:
            console.log(ingresarExistencias(producto));
            console.log(existenciasDisponibles());
            break
        case 3:
            console.log(eliminarExistencia(producto));
            console.log(existenciasDisponibles());
            break
    }
}
star()