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

    function manipularContador(contador, botao) {
        switch (botao) {
            case 'zerar':
                contador = 0;
                break;
            case 'adicionar':
                contador++;
                break;
            case 'subtrair':
                contador--;
                break;
            default:
                return;
        };

        contador.textContent = `${c}`;
    };

    btnZerar.addEventListener('click', manipularContador('zerar'));

    btnAdicionar.addEventListener('click', manipularContador('adicionar'));

    btnSubtrair.addEventListener('click', manipularContador('subtrair'));
});