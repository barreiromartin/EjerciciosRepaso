/*
Ejercicio 3
Crea un programa que reciba una frase, cuente el número de vocales que
contiene y lo muestre por pantalla.

*/
function __main__() {
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;
    var entradaCaracteres = prompt("EJERCICIO 3\nIntroduce texto para contar sus vocales.");
    entradaCaracteres = entradaCaracteres.toUpperCase();

    console.log(entradaCaracteres)
    for (i = 0; i <= entradaCaracteres.length; i++) {
        if(entradaCaracteres.charAt(i) == "A"){
            contadorA++;
        }
        if(entradaCaracteres.charAt(i) == "E"){
            contadorE++;
        }
        if(entradaCaracteres.charAt(i) == "I"){
            contadorI++;
        }
        if(entradaCaracteres.charAt(i) == "O"){
            contadorO++;
        }
        if(entradaCaracteres.charAt(i) == "U"){
            contadorU++;
        }
    }

    alert("La frase contiene:\nA: " + contadorA +
    "\nE: " + contadorE +
    "\nI: " + contadorI +
    "\nO: " + contadorO +
    "\nU: " + contadorU);
}

__main__();