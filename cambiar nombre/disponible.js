function existenciasDisponibles() {
    let mensaje = `
    arroz:${localStorage.getItem("arroz")} \n 
    lentejas:${localStorage.getItem("lentejas")} \n 
    frijoles:${localStorage.getItem("frijoles")} \n 
    jabon:${localStorage.getItem("jabon")} \n 
    limpido:${localStorage.getItem("limpido")} \n 
    champu:${localStorage.getItem("champu")} \n 
    pescado:${localStorage.getItem("pescado")} \n 
    res:${localStorage.getItem("res")} \n 
    cerdo:${localStorage.getItem("cerdo")} \n
    yogurt:${localStorage.getItem("yogurt")} \n
    leche:${localStorage.getItem("leche")} \n
    kumis:${localStorage.getItem("kumis")} 
    `
return mensaje
}
  
export {existenciasDisponibles};