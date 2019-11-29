import Arbol from "./arbolBinario.js";

class Main {
    constructor() {
        let arbol = new Arbol();
        document.querySelector("#btn").addEventListener("click", () => {
            let exp = document.querySelector("#exp").value;
            arbol.separarEnNodos(exp);
            arbol.hacerArbolDeEx();
            console.log("post");
            console.log(arbol.postOrder());
            console.log("pre");
            console.log(arbol.preOrder());
            console.log("i");
            console.log(arbol.inOrder());
        });
    }
}
let m = new Main();