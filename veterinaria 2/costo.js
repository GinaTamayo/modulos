function precio(tipoDeMascota, servicioElegidoPorElCliente) {
    let total = 0;
    if (servicioElegidoPorElCliente == "peluqueria") {
        if (tipoDeMascota == "perro") {
            total = 30.000
        } else if (tipoDeMascota == "gato") {
            total = 40.000
        }
    } else if (servicioElegidoPorElCliente == "baño") {
        if (tipoDeMascota == "perro") {
            total = 35.000
        } else if (tipoDeMascota == "gato") {
            total = 25.000
        }
    } else if (servicioElegidoPorElCliente == "consulta") {
        total = 30.000
    } else if (servicioElegidoPorElCliente == "esterilizacion") {
        total = 120.000
    }
    return total
}
export {precio}