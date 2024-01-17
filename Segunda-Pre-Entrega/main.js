function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
}

function Carrito() {
  this.productos = [];

  this.agregarProducto = function (producto, cantidad) {
    if (producto.stock >= cantidad) {
      for (let i = 0; i < cantidad; i++) {
        this.productos.push(producto);
      }
      producto.stock -= cantidad;
      console.log(`${cantidad} ${producto.nombre}(s) añadido(s) al carrito.`);
    } else {
      console.log(`No hay suficiente stock de ${producto.nombre}.`);
    }
  };

  this.eliminarProducto = function (producto, cantidad) {
    const index = this.productos.indexOf(producto);
    if (index !== -1) {
      this.productos.splice(index, cantidad);
      producto.stock += cantidad;
      console.log(
        `${cantidad} ${producto.nombre}(s) eliminado(s) del carrito.`
      );
    } else {
      console.log(`No se encontró ${producto.nombre} en el carrito.`);
    }
  };

  this.calcularTotal = function () {
    let total = 0;
    for (let producto of this.productos) {
      total += producto.precio;
    }
    return total;
  };

  this.mostrarCarrito = function () {
    console.log("Productos en el carrito:");
    for (let producto of this.productos) {
      console.log(`- ${producto.nombre}: $${producto.precio.toFixed(2)}`);
    }
    console.log(`Total: $${this.calcularTotal().toFixed(2)}`);
  };

  this.realizarPago = function () {
    if (this.productos.length > 0) {
      console.log(
        `Pago exitoso. Total pagado: $${this.calcularTotal().toFixed(2)}`
      );
      this.productos = [];
    } else {
      console.log("El carrito está vacío. No hay nada que pagar.");
    }
  };
}

const producto1 = new Producto("Remera Oversize", 22000, 10);
const producto2 = new Producto("Pantalón", 32000, 5);
const producto3 = new Producto("Zapatillas Chunck", 80000, 8);

const carrito = new Carrito();

alert("Bienvenido a QUIT tienda de ropa urbana");

const cantidadProducto1 = parseInt(
  prompt(
    `Ingrese la cantidad de ${producto1.nombre} que desea comprar:\n(Precio: $22000)`,
    "n"
  ),
  10
);
carrito.agregarProducto(producto1, cantidadProducto1);

const cantidadProducto2 = parseInt(
  prompt(
    `Ingrese la cantidad de ${producto2.nombre} que desea comprar:\n(Precio: $32000)`
  ),
  10
);
carrito.agregarProducto(producto2, cantidadProducto2);

const cantidadProducto3 = parseInt(
  prompt(
    `Ingrese la cantidad de ${producto3.nombre} que desea comprar:\n(Precio 80000)`
  ),
  10
);
carrito.agregarProducto(producto3, cantidadProducto3);

carrito.mostrarCarrito();

const eliminarProducto = confirm("¿Desea eliminar productos del carrito?");
if (eliminarProducto) {
  const cantidadEliminar = parseInt(
    prompt("Ingrese la cantidad de productos que desea eliminar:"),
    10
  );
  carrito.eliminarProducto(producto1, cantidadEliminar);
}

carrito.mostrarCarrito();

const realizarPago = confirm("¿Desea realizar el pago?");
if (realizarPago) {
  carrito.realizarPago();
}
