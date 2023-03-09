function contarCaracteresSinEspacio(cadena) {
  return cadena.replace(/\s/g, "").length;
}

// Ejemplo de uso:
const cadenaEjemplo = "Amor, me estás volviendo loca";
console.log(contarCaracteresSinEspacio(cadenaEjemplo)); // salida: 25
