document.addEventListener('DOMContentLoaded', function () {
    const fundo = document.getElementById('fundo');
    const texto = document.getElementById('texto');
    const caixa = document.getElementById('caixa');
    const corFundo = document.getElementById('cor-fundo');
    const corTexto = document.getElementById('cor-texto');
    const corCaixa = document.getElementById('cor-caixa');

    corFundo.addEventListener('input', function () {
        fundo.style.backgroundColor = corFundo.value
    });

    corTexto.addEventListener('input', function () {
        texto.style.color = corTexto.value
    });

    corCaixa.addEventListener('input', function () {
        caixa.style.backgroundColor = corCaixa.value
    });
});