document.addEventListener('DOMContentLoaded', function () {
    function verificarParImpar (entrada) {
        const entradaConvertida = parseInt(entrada.value);

        let texto_resultado = '';

        if (entradaConvertida === 0) {
            return texto_resultado = `${entradaConvertida} é zero!`
        }
        else if  (entradaConvertida % 2 === 0) {
            return texto_resultado = `${entradaConvertida} é par!`;
        } else {
            return texto_resultado = `${entradaConvertida} é ímpar!`;
        }
    }

    document.getElementById('entrada').addEventListener('input', function () {
        document.getElementById('saida').textContent = verificarParImpar(document.getElementById('entrada'));
    });
})