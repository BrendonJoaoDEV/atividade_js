// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    let entrada = document.getElementById('numero');
    const tabuada = document.getElementById('tabuada');
    const btnGerar = document.getElementById('btnGerar');

    // Define função para limpar a tabuada:
    const limpar = () => tabuada.innerHTML = '';

    // Quando o botão "Gerar" é pressionado:
    btnGerar.addEventListener('click', function () {
        // Limpa a tabuada:
        limpar();

        // Converte a entrada do usuário para número:
        numero = parseInt(entrada.value);

        // Multiplica a entrada do usuário com cada número entre 0 e 10:
        for (let i = 0; i <= 10; i++) {
            const li = document.createElement('li');

            let operacao = numero * i;
            
            li.textContent = `${numero} X ${i} = ${operacao}`;

            tabuada.appendChild(li);
        }
    });
});