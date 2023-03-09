function removeShortStrings(arr, length) {
  return arr.filter(function(str) {
    return str.length >= length;
  });
}

// Ejemplo de uso
var strings = ["perro", "gato", "oso", "tigre", "elefante"];
var newStrings = removeShortStrings(strings, 10); // ["perro", "tigre", "elefante"]
console.log(newStrings);
