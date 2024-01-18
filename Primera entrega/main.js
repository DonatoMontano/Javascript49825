function calcularCosto() {
  var precioProducto1 = 50;
  var precioProducto2 = 30;
  var impuesto = 0.1;
  var descuento = 0.05;

  var costoTotalSinImpuestos = precioProducto1 + precioProducto2;

  var costoTotalConImpuestos = costoTotalSinImpuestos * (1 + impuesto);
  
  var costoTotalFinal = costoTotalConImpuestos * (1 - descuento);

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
