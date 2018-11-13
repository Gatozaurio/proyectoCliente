class Concierto{

    // Constructor
    constructor(grupo, precio, date, ubicacion){
        this.grupo = grupo;
        this.precio = precio;
        this.date = date;
        this.ubicacion = ubicacion;
    }

    // Setters
    set grupo(grupo){
        this._grupo = grupo;
    }
    set precio(precio){
        this._precio = precio;
    }
    set concierto(date){
        this._date = date;
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
    get Date(){
        return this._Date;
    }
    get ubicacion(){
        return this._ubicacion;
    }
}

class Grupo{

    // Constructor
    constructor(nombre){
        this.nombre = nombre;
        this.conciertos = [];
    }

    // Getters
    get nombre(){
        return this._nombre;
    }
    get conciertos(){
        return this._conciertos;
    }

    // Setters
    set nombre(nombre){
        this._nombre = nombre;
    }
    set conciertos(conciertos){
        this._conciertos = conciertos;
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

class Voto {

    // Constructor
    constructor(valor, comentario, usuario){
        this.valor = valor;
        this.comentario = comentario;
        this.usuario = usuario;
    }

    // Getters
    get valor(){
        return this._valor;
    }
    get comentario(){
        return this._comentario;
    }
    get usuario(){
        return this._usuario;
    }

    // Setters
    set valor(valor){
        this._valor = valor;
    }
    set comentario(comentario){
        this._comentario = comentario;
    }
    set usuario(usuario){
        this._usuario = usuario;
    }
}
