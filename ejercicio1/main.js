/*
Ejercicio 1
Crea un programa que permita introducir una cadena de caracteres al
usuario y la muestre transformada a mayúsculas.
*/
function __main__() {
    entradaCaracteres = prompt("EJERCICIO 1\nIntroduce la cadena para pasar a mayúsculas.");
    resultado = entradaCaracteres.toUpperCase();
    alert("Entrada: \n" + entradaCaracteres + "\nSalida: \n" + resultado);
}

__main__();