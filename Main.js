import Arbol from "./arbolBinario.js";

class Main {
    constructor() {
        let arbol = new Arbol();
        document.querySelector("#btn").addEventListener("click", () => {
            let exp = document.querySelector("#exp").value;
            arbol.separarEnNodos(exp);
            arbol.hacerArbolDeEx();
            console.log("post");
            
            document.querySelector("#post").textContent = "Post order: " + arbol.postOrder();
            console.log("pre");
            
            document.querySelector("#pre").textContent = "Pre order: " + arbol.preOrder();
            console.log("in");
            
            document.querySelector("#in").textContent = "In order: " + arbol.inOrder();
            let expresion = arbol.preOrder().split(",");
            let pilaNum = [];
            expresion.pop();
            console.log(expresion);

            let primero = 0;
            for (let i = expresion.length - 1; i >= 0; i--) {
                switch (expresion[i]) {
                    case " +":
                        primero = pilaNum.pop();
                        primero = primero + pilaNum.pop();
                        console.log(primero)
                        pilaNum.push(primero);
                        break;
                    case "-":
                        primero = pilaNum.pop();
                        primero = primero - pilaNum.pop();
                        pilaNum.push(primero);
                        break;
                    case "*":
                        primero = pilaNum.pop();
                        primero = primero * pilaNum.pop();
                        pilaNum.push(primero);
                        break;
                    case "/":
                        primero = pilaNum.pop();
                        primero = primero / pilaNum.pop();
                        pilaNum.push(primero);
                        break;

                    default:
                        pilaNum.push(parseInt(expresion[i]));
                        break;

                }
            }
            return alert("El resultado es : " + pilaNum[0]);
        });
    }
}
let m = new Main();