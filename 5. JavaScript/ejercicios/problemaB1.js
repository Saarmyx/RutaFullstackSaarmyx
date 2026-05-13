// Crear un sistema para una cafetería escolar

// Hay 3 productos:
// Cafe = $3000
// Jugo = $2500
// Empanada = $2000

// El sistema debe permitir:
// 1. Registrar qué compró cada cliente
// 2. Mostrar cuánto gastó cada cliente
// 3. Mostrar cuánto dinero ganó la cafetería en total
// 4. Mostrar cuál fue el producto más vendido

// Extra:
// Si un cliente gasta más de $10000, mostrar:
// "Cliente VIP: tiene descuento en la próxima compra"

const nombreProductos = {
  producto1: 'cafe',
  producto2: 'jugo',
  producto3: 'empanada',
}

const precioProductos = {
  cafe: 3000,
  jugo: 2500,
  empanada: 2000,
}

let pedidoCliente = 'cafe'
//prompt('¿Qué producto deseas comprar? (cafe, jugo, empanada)')
let dineroCliente = 5000
let dineroCafeteria = 0

// let ventas = []
if (pedidoCliente === nombreProductos.producto1 && dineroCliente >= precioProductos.cafe) {
  console.log(`El cliente compro ${nombreProductos.producto1} por ${precioProductos.cafe}`)

  dineroCliente -= precioProductos.cafe
  console.log(`El cliente le sobran ${dineroCliente} pesos`)

  dineroCafeteria += precioProductos.cafe

  console.log(`Ahora la cafeteria tiene ${dineroCafeteria} pesos`)
} else if (pedidoCliente === nombreProductos.producto2 && dineroCliente >= precioProductos.jugo) {
  console.log(`El cliente compro ${nombreProductos.producto2} por ${precioProductos.jugo}`)
  dineroCliente -= precioProductos.jugo
  dineroCafeteria += precioProductos.jugo
} else if (
  pedidoCliente === nombreProductos.producto3 &&
  dineroCliente >= precioProductos.empanada
) {
  console.log(`El cliente compro ${nombreProductos.producto3} por ${precioProductos.empanada}`)
  dineroCliente -= precioProductos.empanada
  dineroCafeteria += precioProductos.empanada
} else {
  alert('No tienes suficiente dinero para comprar ese producto')
}
