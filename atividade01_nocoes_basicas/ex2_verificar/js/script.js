// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {

    // Salva os elementos HTML necessários em varáveis JS.:
    let numero = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    // Define função para limpar texto de elementos HTML:
    const limpar = () => innerHTML = '';

    // Quando o botão "Verificar" é pressionado:
    document.getElementById('btnVerificar').addEventListener('click', function () {
        limpar ();

        numeroInt = parseInt(numero.value);

        if (numeroInt === 0) {
            resultado.textContent = `${numeroInt} é igual a zero (0)`;
        } else if (numeroInt > 0) {
            resultado.textContent = `${numeroInt} é um número positivo`;
        } else if (numeroInt < 0) {
            resultado.textContent = `${numeroInt} é um número negativo`;
        } else {
            resultado.textContent = `${numeroInt} é inexistente dentro do conjunto dos números inteiros`;
        }
    });
});