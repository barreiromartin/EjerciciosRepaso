var crearUsuario = function(usuario, password){
    this.usuario = usuario;
    this.password = password;

    this.getUsuario = function(){
        return this.usuario;
    }

    this.comprobarCredenciales = function(aux_usuario, aux_password){
        if(this.usuario == aux_usuario && this.password == aux_password){
            return true;
        }
    }

    this.cambiarContraseña = function(aux_contraseña){
        this.password = aux_contraseña;
    }
}
