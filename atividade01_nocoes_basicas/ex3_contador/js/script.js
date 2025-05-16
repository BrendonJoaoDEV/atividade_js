// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    let texto = document.getElementById('texto');
    let nCaracteres = document.getElementById('caracteres');

    // Quando qualquer entrada ocorre no elemento "texto":
    texto.addEventListener('input', function () {
        let i = 0;

        // For de varredura em JS:
        for (let caracter of texto.value) {
            i ++;
        }

        nCaracteres.textContent = `${i} caracteres digitados`;
        }
    );
});