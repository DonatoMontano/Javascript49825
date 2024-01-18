// Función para calcular el costo total
function calcularCosto() {
  // Variables de ejemplo: precio de los productos, impuesto y descuento
  var precioProducto1 = 50;
  var precioProducto2 = 30;
  var impuesto = 0.1; // 10%
  var descuento = 0.05; // 5%

  // Calcular el costo total antes de impuestos y descuentos
  var costoTotalSinImpuestos = precioProducto1 + precioProducto2;

  // Calcular el costo total con impuestos
  var costoTotalConImpuestos = costoTotalSinImpuestos * (1 + impuesto);

  // Calcular el costo total final con descuentos
  var costoTotalFinal = costoTotalConImpuestos * (1 - descuento);

  // Mostrar resultados por consola
  console.log(
    "1- Costo total sin impuestos: $" + costoTotalSinImpuestos.toFixed(2)
  );
  console.log(
    "2- Costo total con impuestos: $" + costoTotalConImpuestos.toFixed(2)
  );
  console.log(
    "3- Costo total final con descuentos: $" + costoTotalFinal.toFixed(2)
  );
}
