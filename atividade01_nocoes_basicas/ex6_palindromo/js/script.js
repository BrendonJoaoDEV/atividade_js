// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    let entrada = document.getElementById('entrada');
    const btnVerificar = document.getElementById('btnVerificar');
    const resultado = document.getElementById('saida');

    // Define função para limpar texto de elementos HTML:
    const limpar = () => resultado.innerHTML = '';

    // Quando o botão "Verificar" é pressionado:
    btnVerificar.addEventListener('click', function () {
        // Limpa o parágrafo de resultado:
        limpar();

        // Valor da entrada escrito em letras minúsculas:
        let string = entrada.value.toLowerCase();
        // Inverte a string:
        let invertida = string.split('').reverse().join('');
            // .split(): transforma string em array.
            // .reverse(): inverte array.
            // .join(): transforma array em string.
        
        if (string === invertida) {
            resultado.textContent = `${string} é um palíndromo`;
        } else {
            resultado.textContent = `${string} não é um palíndromo`;
        }
    });
});