// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const resultado = document.getElementById('resultado');

    // Define função para limpar texto de elementos HTML:
    const limpar = () => innerHTML = '';

    // Quando o botão "Adicionar" é pressionado:
    document.getElementById('btnAdicao').addEventListener('click', function () {
        limpar ();

        const x = parseInt(numero1.value);
        const y = parseInt(numero2.value);
        const z = x + y;

        resultado.textContent = `${x} + ${y} = ${z}`;
    })

    // Quando o botão "Subtrair" é pressionado:
    document.getElementById('btnSubtrair').addEventListener('click', function () {
        limpar ();

        const x = parseInt(numero1.value);
        const y = parseInt(numero2.value);
        const z = x - y;

        resultado.textContent = `${x} - ${y} = ${z}`;
    })

    // Quando o botão "Multiplicar" é pressionado:
    document.getElementById('btnMultiplicar').addEventListener('click', function () {
        limpar ();

        const x = parseInt(numero1.value);
        const y = parseInt(numero2.value);
        const z = x * y;

        resultado.textContent = `${x} * ${y} = ${z}`;
    })

    // Quando o botão "Dividir" é pressionado:
    document.getElementById('btnDividir').addEventListener('click', function () {
        limpar ();

        const x = parseInt(numero1.value);
        const y = parseInt(numero2.value);
        const z = x / y;

        if (y === 0) {
            resultado.textContent = 'Divisão por zero não existe';
        } else {
            resultado.textContent = `${x} / ${y} = ${z}`;
        }
    });
});