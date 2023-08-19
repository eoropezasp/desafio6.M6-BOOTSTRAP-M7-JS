let costosFijos = Number(prompt('ingrese los costos fijos'));
let precioDeVenta = Number(prompt('ingrese el costo de venta'));
let costosVariables = Number(prompt('ingrese los costos variables'));

let resultado = costosFijos/(precioDeVenta - costosVariables);

alert('El punto de equilibrio es: ' + resultado);