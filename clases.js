class Concierto{
    // Constructor
    constructor(grupo, precio, fecha, ubicacion){
        this.grupo = grupo;
        this.precio = precio;
        this.fecha = fecha;
        this.ubicacion = ubicacion;
    }

    // Setters
    set concierto(concierto){
        this._concierto = concierto;
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