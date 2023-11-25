const displayDiv = document.querySelector("#display");
var operador = "";
var contador = "";
var contador_1= "inicio";
var num1=0;
var num2=0;

function setOP(o) {
    operador = String(o);
    contador_1="";
    }
function press(e){    
    if (contador_1 === "inicio" && contador.length <= 7) {
        contador+= e;
        displayDiv.innerText = contador;
        num1 = parseFloat(contador);
    }
    if (contador_1!= "inicio" && contador_1.length<=7) {
        if (operador =="+" || operador=="-" || operador == "*"|| operador == "/") {
            displayDiv.innerText = 0;
            contador_1+= e;
            displayDiv.innerText= contador_1;
            num2 = parseFloat(contador_1);
        }
    }
}
function calculate() {
    if (operador ==="+") {
        var resultado = num1+num2;
    }
    if (operador ==="-") {
        var resultado = num1-num2;
    }
    if (operador ==="*") {
        var resultado = num1*num2;
    }
    if (operador ==="/") {
        if (num2 === 0) {
            var resultado = "Indefinido!"
            displayDiv.innerText= resultado;
            return;
        }
        else {
            var resultado = num1/num2;
        }
    }
    if (resultado < 100000000 ) {
        var resultado1 = String(resultado);
        displayDiv.innerText= resultado1.slice(0,9);
        memoria = "active";
        contador = resultado;
        num1 = resultado;
        return;
    }
    if (resultado >= 100000000) {
        displayDiv.innerText= "too large!";
        return;
    }

}
function clr() {
    contador = "";
    contador_1 ="inicio";
    num1=0;
    num2=0;
    resultado=0;
    operador="";
    displayDiv.innerText= 0;
    return
}