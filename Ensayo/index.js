// function iterar(arg1) {
    //for (let i = 0; i < arg1.length; i++) {
        //console.log(arg1[i]);
    //}
//}

//const numeros = [ 1, 2, "Hola", 4, 5]
//const nombres = ["pedro", "juan", "diego", "hola", "chao"]

//iterar(numeros)
//iterar(nombres)

//function suma (a, b) {
    //return a + b;
//}

//const resultadoSuma1 = suma(1, 2)
//const resultadoSuma2 = suma(5, 6)
//const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)
//console.log("resultado", resultadoSuma3);

function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}

function callback(result) {
    console.log("resultado", result);
}

sumar(2, 3, callback)