function obtenerAcronimo(cadena) {
  // Separa la cadena en palabras
  const palabras = cadena.split(" ");
  let resultado = "";
  
  // Recorre cada palabra y obtén la primera letra
  for (const palabra of palabras) {
    if (palabra.length > 0) {  // Ignora cadenas vacías
      resultado += palabra[0];
    }
  }

  // Convertir a mayúscula y devuelve la cadena resultante
  return resultado.toUpperCase();
}

// Ejemplo de uso:
console.log(obtenerAcronimo("no hay almuerzo gratis. Debes pagar por tu comida")); // NHAG-DPPTC
console.log(obtenerAcronimo("¡En vivo desde Nueva York, es sábado por la noche!")); // ENDNYESPLN
