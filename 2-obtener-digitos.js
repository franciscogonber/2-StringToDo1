function obtenerNumero(cadena) {
  let numeros = "";
  console.log(cadena.length)
  for (let i = 0; i < cadena.length; i++) {
    if (!isNaN(parseInt(cadena[i]))) {
      numeros += cadena[i];
    }
  }
  return parseInt(numeros);
}

const cadenaentrada =  "0s1a3y5w7h9a2t4? 6! 8? 0";
console.log (obtenerNumero(cadenaentrada));