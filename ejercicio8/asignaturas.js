var asignatura = function (nombre) {
    this.nombre = nombre;
    this.nota = [];

    this.setNota1 = function (nota) {
        this.nota.push(nota);
    }

    this.setNota2 = function (nota) {
        this.nota.push(nota);
    }

    this.setNota3 = function (nota) {
        this.nota.push(nota);
    }

    this.mediaTotal = function () {
        var media = (this.nota[0] + this.nota[1] + this.nota[2]) / this.nota.length;
        return media;
    }

    this.getNombre = function(){
        return this.nombre;
    }
}