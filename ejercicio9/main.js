/*
Ejercicio 9
Crea un menú que una opción permita crear un objeto del tipo asignatura
dependiendo de lo introducido por el usuario, otra opción que permita
mostrar lo creado y otra que termine la ejecución.

*/


function __main__() {
    var array = [];


    do {
        var continuar = true;
        var opcion = parseInt(prompt("EJERCICIO 9 - Boletín\n-------------\n1 - Añadir Asignatura\n2 - Ver Boletín\n3 - Salir"));

        switch (opcion) {
            case 1:
                var nombre = prompt("EJERCICIO 8\n-------------\nEscribe el nombre de la asignatura:");

                var asignatura_1 = new asignatura(nombre);

                var nota = parseInt(prompt("EJERCICIO 8\n-------------\nNota Primer Trimestre:"));
                asignatura_1.setNota1(nota);
                var nota = parseInt(prompt("EJERCICIO 8\n-------------\nNota Segundo Trimestre:"));
                asignatura_1.setNota2(nota);
                var nota = parseInt(prompt("EJERCICIO 8\n-------------\nNota Tercer Trimestre:"));
                asignatura_1.setNota3(nota);

                array.push(asignatura_1);
                break;


            case 2:
                resultado = "EJERCICIO 8\n-------------\n";
                array.forEach(element => {
                    resultado += "Asignatura: " + element.getNombre() + "\nNota Media: " + element.mediaTotal() + "\n\n";                    
                });
                alert(resultado);
                break;
                
                
            case 3:
                continuar = false;
                break;
        }
    } while (continuar)






}

__main__()
