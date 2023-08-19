let ingresoTotal = Number(prompt('Suministre el ingreso total'));
let gastosNecesarios = (50 * ingresoTotal) / 100;
let gastosOpcionales = (30 * ingresoTotal) / 100;
let ahorrosEinversion = (20 * ingresoTotal) / 100;

alert('el 50% para gastos necesarios es: ' + gastosNecesarios + '\n'+ 'el 30% para gastos necesarios es: ' + gastosOpcionales + '\n'+ 'el 20% para gastos necesarios es: ' + ahorrosEinversion + '\n' );