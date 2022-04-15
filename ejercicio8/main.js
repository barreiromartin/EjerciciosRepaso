/*
Ejercicio 8
Crea un objeto del tipo Asignatura. Debe tener como atributos un nombre y
una nota para cada trimestre y una función que sea mediaTotal, que calcule
la media de los tres trimestres. Instancia un objeto del tipo Asignatura para
comprobar que funciona.
*/


function __main__() {
    var nombre = prompt("EJERCICIO 8\n-------------\nEscribe el nombre de la asignatura:");

    var asignatura_1 = new asignatura(nombre);

    var nota = parseInt(prompt("EJERCICIO 8\n-------------\nNota Primer Trimestre:"));
    asignatura_1.setNota1(nota);
    var nota = parseInt(prompt("EJERCICIO 8\n-------------\nNota Segundo Trimestre:"));
    asignatura_1.setNota2(nota);
    var nota = parseInt(prompt("EJERCICIO 8\n-------------\nNota Tercer Trimestre:"));
    asignatura_1.setNota3(nota);


    resultado = alert("EJERCICIO 8\n-------------\nAsignatura: " + asignatura_1.getNombre() + "\nNota final: " + Math.round(asignatura_1.mediaTotal()));

    return resultado;

}

__main__()
