// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    const quadrado = document.querySelector('#quadrado');
    const vermelho = document.getElementById('vermelho');
    const verde = document.getElementById('verde');
    const azul = document.getElementById('azul');

    // Quando o botão "Vermelho" é pressionado:
    vermelho.addEventListener('click', function () {
        // Limpa as classes do elemento "quadrado":
        quadrado.className = '';

        // Adiciona a classe "vermelho" ao elemento "quadrado":
        quadrado.classList.add('vermelho');
    
    });

    // Quando o botão "Verde" é pressionado:
    verde.addEventListener('click', function () {
        // Limpa as classes do elemento "quadrado":
        quadrado.className = '';

        // Adiciona a classe "verde" ao elemento "quadrado":
        quadrado.classList.add('verde');
    });

    // Quando o botão "Azul" é pressionado:
    azul.addEventListener('click', function () {
        // Limpa as classes do elemento "quadrado":
        quadrado.className = '';

        // Adiciona a classe "azul" ao elemento "quadrado":
        quadrado.classList.add('azul');
    });
});