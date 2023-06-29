

//for (let index = cantidadEuros; index <= valorEuros; index++) {
   
function desglosar(cantidadEuros) {

let mensaje = ``;
while (cantidadEuros!=0) {
    
    if (Math.floor(cantidadEuros/500) != 0) {
        mensaje += `${Math.floor(cantidadEuros/500)} billetes de 500 euros \n`
        cantidadEuros = cantidadEuros%500
    }
    if (Math.floor(cantidadEuros/200) != 0) {
        mensaje += `${Math.floor(cantidadEuros/200)} billetes de 200 euros \n`
        cantidadEuros = cantidadEuros%200
    }
    if (Math.floor(cantidadEuros/100) != 0) {
        mensaje += `${Math.floor(cantidadEuros/100)} billetes de 100 euros \n`
        cantidadEuros = cantidadEuros%100
    }
    if (Math.floor(cantidadEuros/50) != 0) {
        mensaje += `${Math.floor(cantidadEuros/50)} billetes de 50 euros \n`
        cantidadEuros = cantidadEuros%50
    }
    if (Math.floor(cantidadEuros/20) != 0) {
        mensaje += `${Math.floor(cantidadEuros/20)} billetes de 20 euros \n`
        cantidadEuros = cantidadEuros%20
    }
    if (Math.floor(cantidadEuros/10) != 0) {
        mensaje += `${Math.floor(cantidadEuros/10)} billetes de 10 euros \n`
        cantidadEuros = cantidadEuros%10
    }
    if (Math.floor(cantidadEuros/5) != 0) {
        mensaje += `${Math.floor(cantidadEuros/5)} billetes de 5 euros \n`
        cantidadEuros = cantidadEuros%5
    }
    if (Math.floor(cantidadEuros/2) != 0) {
        mensaje += `${Math.floor(cantidadEuros/2)} monedas de 2 euros \n`
        cantidadEuros = cantidadEuros%2
    }
    if (Math.floor(cantidadEuros/1) != 0) {
        mensaje += `${Math.floor(cantidadEuros/1)} monedas de 1 euros \n`
        cantidadEuros = cantidadEuros%1
    }

}
    
console.log(mensaje);
}
export {desglosar}