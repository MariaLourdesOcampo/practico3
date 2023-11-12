function generarNumerosPrimos(n) {
    const numerosPrimos = [];
    function esPrimo(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
    
    for (let i = 2; i <= n; i++) {
      if (esPrimo(i)) {
        numerosPrimos.push(i);
      }
    }
    return numerosPrimos;
  }
  
  const limite = parseInt(prompt('Hasta que limite le gustaria conocer los numeros primos menores?'))
  const primosHastaLimite = generarNumerosPrimos(limite);
  console.log("Números primos hasta", limite + ":", primosHastaLimite);

  for(let i=0; i <primosHastaLimite.length; i++ ){
    document.write(`<li>${primosHastaLimite[i] } </li>`);
}
