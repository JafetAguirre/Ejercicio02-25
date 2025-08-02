function calcular() {
  let totalAntiguo = 0;
  let totalNuevo = 0;

  while (true) {
    let entrada = prompt("Ingrese el sueldo del empleado (o -1 para terminar):");

    if (entrada === null || entrada === "-1") {
      break;
    }

    let sueldo = parseFloat(entrada);

    if (isNaN(sueldo) || sueldo < 0) {
      alert("Por favor, ingrese un número válido.");
      continue;
    }

    let aumento = 0;
    if (sueldo < 1000) {
      aumento = sueldo * 0.15;
    } else {
      aumento = sueldo * 0.12;
    }

    let nuevoSueldo = sueldo + aumento;

    alert("Sueldo actual: Q" + sueldo.toFixed(2) +
          "\nAumento: Q" + aumento.toFixed(2) +
          "\nNuevo sueldo: Q" + nuevoSueldo.toFixed(2));

    totalAntiguo += sueldo;
    totalNuevo += nuevoSueldo;
  }

  document.getElementById("totalAntiguo").innerText = 
    "Suma total de sueldos antiguos: Q" + totalAntiguo.toFixed(2);
  document.getElementById("totalNuevo").innerText = 
    "Suma total de sueldos nuevos: Q" + totalNuevo.toFixed(2);
}
