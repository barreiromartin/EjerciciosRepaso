/*
Ejercicio 4
Crea un programa que reciba un número entero y muestre todos los números
impares hasta el introducido.

*/
function __main__ (){

    var num = parseInt(prompt("EJERCICIO 4\n-------------\nIntroduce un número entero."));
    var resultado = [];
    for(i = 0; i <= num;i++){
        if((i % 2) != 0){
            resultado.push(i);
        }
    }

    alert("EJERCICIO 4\n-------------\n" + resultado + " - " + num);
}

__main__()
