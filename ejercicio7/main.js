/*
Ejercicio 7
Crea un menú que permita realizar el programa del ejercicio 6 hasta que el
usuario decida salir.

*/
function __main__() {
    do {
        var continuar = true;
        var cadena = prompt("EJERCICIO 7\n-------------\nEscribe una cadena de texto:");
        var array = "";

        for (var i = cadena.length - 1; i >= 0; i--) {
            array += cadena[i];
        }
        alert("EJERCICIO 7\n-------------\n" + cadena + "\n" + array);

        var opcion = parseInt(prompt("EJERCICIO 7\n-------------\n1 - Continuar el programa.\n2 - Salir."));

        switch(opcion){
            case 1:
                break;
            case 2:
                alert("EJERCICIO 7\n-------------\Saliendo del programa.");
                continuar = false;
                break;
        }
    } while (continuar)
}

__main__()
