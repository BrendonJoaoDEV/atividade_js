// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    const contador = document.getElementById('contador');
    const mensagem = document.getElementById('mensagem');

    // Define variável de contagem:
    let tempo = 10;

    // Define cronômetro usando a função setInterval:
    cronometro = setInterval(() => {
        // Diminui 1 no contador:
        tempo --;

        // Exibe o contador:
        contador.textContent = `00:0${tempo}`;

        // Verifica se o contador chegou a zero:
        if (tempo === 0) {
            // Para o intervalo:
            clearInterval(cronometro);
            // Destaca o cronômetro zerado:
            contador.className = 'destaque';
            // Exibe a mensagem:
            mensagem.textContent = "Tempo esgotado!";
        }
    }, 1000);
    // setInterval(() => {}, tempo): recebe como parâmetros: 
    // uma função anônima, e um tempo em milessegundos.
    // Na função anônima algo que ser repetido até que o intervalo seja interrompido.
});