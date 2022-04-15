/*
Ejercicio 5
Crea un programa que pida un usuario y contraseña al empezar. Luego pide
que el usuario introduzca el usuario y contraseña de vuelta hasta que
coincidan. Indica si se equivoca en uno de los campos o en ambos

*/
function __main__() {
    var setUser = false;

    do {
        var continuar = true;


        if (!setUser) {
            alert("Crea un usuario para poder inicar sesión.")
            var user = prompt("EJERCICIO 5 - Registro\n-------------\nIntroduce un nombre de usuario.");
            var password = prompt("EJERCICIO 5 - Registro\n-------------\nIntroduce una contraseña.");
            var usuario_1 = new crearUsuario(user, password);
            setUser = true;
        }

        var opcion = parseInt(prompt("EJERCICIO 5\n-------------\n1 - Iniciar Sesión\n2 - Salir"));

        switch (opcion) {
            case 1:
                aux_user = prompt("EJERCICIO 5 - Inicio de Sesión\n-------------\nIntroduce tu nombre de usuario.");
                aux_password = prompt("EJERCICIO 5 - Inicio de Sesión\n-------------\nIntroduce tu Contraseña.");

                if(usuario_1.comprobarCredenciales(aux_user, aux_password)){
                    do{
                        var continuarUsuario = true;
                        var opcionesUsuario = parseInt(prompt("EJERCICIO 5 - " + usuario_1.getUsuario() + "\n-------------\n1 - Cambiar Contraseña\n2 - Salir"));

                        switch(opcionesUsuario){
                            case 1:
                                nueva_password = prompt("EJERCICIO 5 - " + usuario_1.getUsuario() + "\n-------------\nIntroduce tu nueva contraseña.");
                                usuario_1.cambiarContraseña(nueva_password);
                                alert("Contraseña actualizada");
                                break;
                            case 2:
                                continuarUsuario = false;
                                alert("Saliendo del programa.");
                                break;
                        }
                    }while(continuarUsuario)
                    
                }else{
                    alert("Usuario o contraseña incorrecta.");
                }
                

                break;
            case 2:
                alert("Saliendo del programa.");
                continuar = false;
                break;
        }





    } while (continuar);




}

__main__()
