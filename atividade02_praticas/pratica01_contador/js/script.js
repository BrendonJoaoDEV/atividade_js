document.addEventListener('DOMContentLoaded', function () {
    const btnZerar = document.getElementById('zerar');
    const btnAdicionar = document.getElementById('adicionar');
    const btnSubtrair = document.getElementById('subtrair');
    const contador = document.getElementById('contador');
    let c = 0;

    btnZerar.addEventListener('click', function () {
        c = 0;
        contador.textContent = `${c}`;
    });

    btnAdicionar.addEventListener('click', function () {
        c++;
        contador.textContent = `${c}`;
    });

    btnSubtrair.addEventListener('click', function () {
        c--;
        contador.textContent = `${c}`;
    });
});