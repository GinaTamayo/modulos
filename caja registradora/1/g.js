let n = 12;///parseInt(prompt("ingresar numero"));
if (n <= 1) {
    console.log("el numero no es valido");
} else {
    for (let index = 1; index <= n; index++) {
        let l = "";
        for (let j = 1; j <= index; j++) {
            l += "*";
        }
        console.log(l);
    }
}