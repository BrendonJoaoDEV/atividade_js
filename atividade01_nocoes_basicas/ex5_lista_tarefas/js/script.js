// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    let novaTarefa = document.getElementById('nova-tarefa');
    const btnAdicionar = document.getElementById('adicionar');
    const listaTarefas = document.getElementById('tarefas');

    // Quando o botão "Adicionar" é pressionado:
    btnAdicionar.addEventListener('click', function () {
        // Cria um elemento HTML li:
        const tarefa = document.createElement('li');
        // Adiciona o texto digitado pelo usuário como texto desse li:
        tarefa.textContent = novaTarefa.value;
        // Adiciona o li como filho da ul "tarefas":
        listaTarefas.appendChild(tarefa);
    });
});