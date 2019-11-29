export default class Dato {
    constructor(dato) {
        this._dato = dato;
        this._izq = null;
        this._der = null;
    }

    get izq() {
        return this._izq;
    }

    set izq(newIzq) {
        this._izq = newIzq;
    }

    get der() {
        return this._der;
    }

    set der(newDer) {
        this._der = newDer;
    }

    get dato() {
        return this._dato;
    }

    set dato(newDato) {
        this._dato = newDato;
    }

    toString() {
        return this._dato + ",";
    }
}