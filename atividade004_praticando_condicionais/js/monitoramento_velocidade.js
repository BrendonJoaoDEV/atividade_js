document.addEventListener('DOMContentLoaded', function () {
    const entrada = document.getElementById('entrada');
    const saida = document.getElementById('saida');

    entrada.addEventListener('input', function () {
        if (!isNaN(parseInt(numero))) {
            saida.textContent = verificarVelocidade(entrada);
        } else {
            saida.textContent = `${numero} não é uma velocidade válida!`;
        }
    });
});

function verificarVelocidade (entrada) {
    let numero = entrada.value;

    if (numero > 60) {
        saida.textContent = `${numero} km/h está acima do limite de velocidade! Atenção!`;
    } else {
        saida.textContent = `${numero} km/h está dentro do limite de velocidade! Parabéns!`;
    }
}