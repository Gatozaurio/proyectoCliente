class Concierto{
    // Constructor
    constructor(grupo, precio, fecha, ubicacion){
        this.grupo = grupo;
        this.precio = precio;
        this.fecha = fecha;
        this.ubicacion = ubicacion;
    }

    // Setters
    set grupo(grupo){
        this._grupo = grupo;
    }
    set precio(precio){
        this._precio = precio;
    }
    set concierto(fecha){
        this._fecha = fecha;
    }
    set concierto(ubicacion){
        this._ubicacion = ubicacion;
    }

    // Getters
    get concierto(){
        return this._concierto;
    }
    get precio(){
        return this._precio;
    }
    get fecha(){
        return this._fecha;
    }
    get ubicacion(){
        return this._ubicacion;
    }
}

class Usuario{
    // Constructor
    constructor(nombreUsuario, contraseña, correo, nombreReal){
        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;
        this.correo = correo;
        this.nombreReal = nombreReal;
    }

    // Setters
    set nombreUsuario(nombreUsuario){
        this._nombreUsuario = nombreUsuario;
    }
    set contraseña(contraseña){
        this._contraseña = contraseña;
    }
    set correo(correo){
        this._correo = correo;
    }
    set nombreReal(nombreReal){
        this._nombreReal = nombreReal;
    }

    // Getters
    get nombreUsuario(){
        return this._nombreUsuario;
    }
    get contraseña(){
        return this._contraseña;
    }
    get correo(){
        return this._correo;
    }
    get nombreReal(){
        return this._nombreReal;
    }
}