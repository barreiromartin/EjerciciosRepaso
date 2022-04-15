/*
Ejercicio 6
Crea un programa que reciba una palabra y muestre la misma palabra al
revés. Recuerda que puedes recorrer las cadenas de caracteres como un
array/vecto
*/
function __main__() {
    var cadena = prompt("EJERCICIO 6\n-------------\nEscribe una cadena de texto:");
    var array = "";
   
    for (var i = cadena.length -1; i >= 0; i--) {
        array += cadena[i];
    }

    alert("EJERCICIO 6\n-------------\n" + cadena + "\n" + array);

}

__main__()
