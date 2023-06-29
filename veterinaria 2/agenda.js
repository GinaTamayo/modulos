import {servicio} from "./servicios.js";
import {tipoDeMascota} from "./mascotas.js";
import {empleadosPeluqueria,empleadosBaño,empleadoVeterinaria} from "./empleados.js";


function agendarCita() {
    let nombre = prompt("Ingrese su nombre");
    let precio = 0
    let empleadoElegido = "";
    let suMascota = tipoDeMascota("Ingrese su mascota")
    let servicioElegido = servicio("ingrese que servicio solicita")
    if (servicioElegido == "peluqueria") {
        empleadoElegido = empleadosPeluqueria("Ingrese si desea que lo atienda ana o claudio")
    } else if (servicioElegido == "baño") {
        empleadoElegido = empleadosBaño("¿Desea ser atendido por Milena, Maria o Rosa")
    } else if (servicioElegido == "veterinaria") {
        servicioElegido = prompt("Ingrese si desea esterilizacion o consulta")
        empleadoElegido = empleadoVeterinaria
    }
    
return `Señor@ ${nombre}, eligio el servicio de ${servicioElegido} y lo atendera ${empleadoElegido} y teninendo en cuneta que su mascote es un ${suMascota}, el costo sera de ${precio}`
}

agendarCita()