function ingresarExistencias(producto) {
        let cantidadSumar = parseInt(prompt("Ingresar valor"))
        let cantidad = localStorage.getItem(producto);
        localStorage.setItem(producto, parseInt(cantidad) + cantidadSumar) 
        return "actualizado";
}

function eliminarExistencia(producto) {
    let cantidadEliminar = parseInt(prompt("Ingresar valor"))
    let cantidad = localStorage.getItem(producto);
    localStorage.setItem(producto, parseInt(cantidad) - cantidadEliminar) 
    return "actualizado";
  }
export {eliminarExistencia, ingresarExistencias}



