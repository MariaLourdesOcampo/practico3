function convertirTemp(temperaturaC){
    let gradosCelsius = temperaturaC
    let gradosFarenheit = gradosCelsius * (9/5) + 32
    return gradosFarenheit
}
temperaturaC = prompt('Ingrese una temperatura en grados Celsius ')
document.write('Usted ingreso una temperatura de ' + temperaturaC + ' grados Celsius' + ' lo que equivale a ' + convertirTemp(temperaturaC) + ' Grados Farenheit.' )