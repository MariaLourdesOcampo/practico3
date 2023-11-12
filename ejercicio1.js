function encontrarNumeroMayor(arreglo) {
    if (arreglo.length === 0) {
      return "El arreglo está vacío";
    }
  
    let numeroMayor = arreglo[0];
  
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > numeroMayor) {
        numeroMayor = arreglo[i];
      }
    }
    return numeroMayor;
  }
 const miArreglo = [3, 7, 1, 9, 4, 2, 8, 12]
 const resultado = encontrarNumeroMayor(miArreglo)
  document.write(resultado)