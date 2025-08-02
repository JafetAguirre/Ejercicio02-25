function procesarNumeros() {
    let sumaImpares = 0;
    let sumaPares = 0;
    let contadorPares = 0;
    let numero;

    do {
        numero = parseInt(prompt("Ingrese un número (0 para terminar):"));

        if (isNaN(numero)) {
            alert("Debe ingresar un número válido.");
            continue;
        }

        if (numero !== 0) {
            if (numero % 2 === 0) {
                sumaPares += numero;
                contadorPares++;
            } else {
                sumaImpares += numero;
            }
        }

    } while (numero !== 0);

    let resultadoDiv = document.getElementById("resultado");
    let mensaje = `<p>Suma de los números impares: <strong>${sumaImpares}</strong></p>`;

    if (contadorPares > 0) {
        let promedio = sumaPares / contadorPares;
        mensaje += `<p>Promedio de los números pares: <strong>${promedio.toFixed(2)}</strong></p>`;
    } else {
        mensaje += `<p>No se ingresaron números pares.</p>`;
    }

    resultadoDiv.innerHTML = mensaje;
}
