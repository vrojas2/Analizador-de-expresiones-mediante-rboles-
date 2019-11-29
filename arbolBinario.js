import Dato from "./Dato.js";

export default class Arbol {
    constructor() {
        this._raiz = null;
        this._nodos = null;
        this._vecNodos = [];
        this._cadena = " ";
    }

    hacerArbolDeEx() {
        for (let i = 0; i < this._vecNodos.length; i++) {
            if (this._vecNodos[i].dato == "*" || this._vecNodos[i].dato == "/") {
                this._raiz = this._vecNodos[i];
                this._raiz.der = this._vecNodos[i + 1];
                this._raiz.izq = this._vecNodos[i - 1];
                this._vecNodos.splice(i - 1, 1);
                this._vecNodos.splice(i, 1);
                i--;
            }
        }
        for (let i = 0; i < this._vecNodos.length; i++) {
            if (this._vecNodos[i].dato == "+" || this._vecNodos[i].dato == "-") {
                this._raiz = this._vecNodos[i];
                this._raiz.der = this._vecNodos[i + 1];
                this._raiz.izq = this._vecNodos[i - 1];
                this._vecNodos.splice(i - 1, 1);
                this._vecNodos.splice(i, 1);
                i--;
            }
        }
        this._raiz = this._vecNodos[0];
        console.log(this._raiz);
    }

    separarEnNodos(exp) {
        exp = exp.split("");
        for (let i = 0; i < exp.length; i++) {
            if (exp[i] === "+" || exp[i] === "-" || exp[i] === "/" || exp[i] === "*") {
                let dato = new Dato(exp[i]);
                this._vecNodos[i] = dato;
            } else {
                let dato = new Dato(parseInt(exp[i]));
                this._vecNodos[i] = dato;
            }
        }
        console.log(this._vecNodos);
    }

    agregarNodo(nodo) {
        if (!this._raiz) {
            this.agregarPrimerRaiz(nodo);
            this._nodos++;
        } else {
            if (nodo.codigo < this._raiz.codigo) {
                this.agregarIzquierda(nodo, this._raiz);
            } else {
                this.agregarDerecha(nodo, this._raiz);
            }
        }
    }

    agregarDerecha(nodo, raiz) {
        if (raiz.derecha === null) {
            raiz.derecha = nodo;
            this._nodos++;
        } else {
            if (nodo.codigo < raiz.derecha.codigo) {
                this.agregarIzquierda(nodo, raiz.derecha);
            } else {
                this.agregarDerecha(nodo, raiz.derecha);
            }
        }
    }
    
    agregarIzquierda(nodo, raiz) {
        if (raiz.izquierda === null) {
            raiz.izquierda = nodo;
            this._nodos++;
        } else {
            if (nodo.codigo > raiz.izquierda.codigo) {
                this.agregarDerecha(nodo, raiz.izquierda);
            } else {
                this.agregarIzquierda(nodo, raiz.izquierda);
            }
        }
    }

    agregarPrimerRaiz(nodo) {
        this._raiz = nodo;
    }

    inOrder() {
        this._cadena = " ";
        this.sacarInOrder(this._raiz);
        return this._cadena;
    }

    sacarInOrder(raiz) {
        if (raiz === null) {
            return;
        } else {
            this.sacarInOrder(raiz.izq);
            this._cadena += raiz.toString();
            this.sacarInOrder(raiz.der);
        }
    }

    postOrder() {
        this._cadena = " ";
        this.sacarPostOrder(this._raiz);
        return this._cadena;
    }

    sacarPostOrder(raiz) {
        if (raiz === null) {
            return;
        } else {
            this.sacarPostOrder(raiz.izq);
            this.sacarPostOrder(raiz.der);
            this._cadena += raiz.toString();
        }
    }

    preOrder() {
        this._cadena = " ";
        this.sacarPreOrder(this._raiz);
        return this._cadena;
    }

    sacarPreOrder(raiz) {
        if (raiz === null) {
            return;
        } else {
            this._cadena += raiz.toString();
            this.sacarPreOrder(raiz.izq);
            this.sacarPreOrder(raiz.der);
        }
    }
}