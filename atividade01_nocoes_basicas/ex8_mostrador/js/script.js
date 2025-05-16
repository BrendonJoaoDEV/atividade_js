// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    const entrada = document.getElementById('entrada');
    const btnVerificar = document.getElementById('btnVerificar');
    const resultado = document.getElementById('resultado');

    // Quando o botão "Verificar Tipo" é pressionado:
    btnVerificar.addEventListener('click', function () {
        if (parseFloat(entrada.value) == entrada.value) {
            resultado.textContent = `"${entrada.value}" é um número!`;
        }
        else if ((entrada.value === "true") || (entrada.value === "false")) {
            resultado.textContent = `"${entrada.value}" é um booleano!`;
        } 
        else {
            resultado.textContent = `"${entrada.value}" é uma string!`;
        } 
    });
});