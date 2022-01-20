//SELECCIONAMOS TODOS LOS NODOS DE LA PAGINA HTML

const displayValorAnterior = document.getElementById("valor-anterior")
const displayValorActual = document.getElementById("valor-actual")
const numeroBtn = document.querySelectorAll(".numero")
const operadorBtn = document.querySelectorAll(".operador")

const display = new Display(displayValorAnterior, displayValorActual);

numeroBtn.forEach( btn => { 
    btn.addEventListener('click', () => display.agregarNumero(btn.innerHTML)) //AGREGA EL NUMERO DENTRO DEL BUTTON
console.log("Se imprimió un valor")
}) // METODO PARA TOMAR LOS NUMEROS CLICKEADOS

operadorBtn.forEach( btn => {
    btn.addEventListener("click", () => display.agregarOperador(btn.value));
})