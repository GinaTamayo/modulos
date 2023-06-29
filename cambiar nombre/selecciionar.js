function seleccionar() {
    let categoria = parseInt(prompt("Ingrese la categoria \n 1. granos \n 2.aseo \n 3. carnes \n 4.lacteos"));
    let producto = "";
    switch (categoria) {
        case 1:
            producto = prompt("Elija arroz, lentejas o frijoles")  
        break
        case 2:
            producto = prompt("Elija jabon, limpido o champu")
        break
        case 3:
            producto = prompt("Elija pescado, res o cerdo")
        break
        case 4:
            producto = prompt("Elija yogurt, leche o kumis")
        break
}    
return producto

}
export {seleccionar}