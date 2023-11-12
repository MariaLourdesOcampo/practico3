function filtrarNumerosPares(arreglo) {
    const numerosPares = arreglo.filter(numero => numero % 2 === 0);
    return numerosPares;
  }

  const miArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosPares = filtrarNumerosPares(miArreglo);

  for(let i=0; i < numerosPares.length; i++ ){
    document.write(`<li>${numerosPares[i] } </li>`);
}
