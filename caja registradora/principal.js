
import {pedirValor} from "./valor.js";
import {desglosar} from "./euros.js";
function usuario() {
    let pedirIngreso = pedirValor("por favor ingrese el valor que desea desglosar");
    let resultado = desglosar(pedirIngreso);
    console.log(resultado);
}
usuario()