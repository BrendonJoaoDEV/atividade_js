// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    const entrada = document.getElementById('palpite');
    const btnVerificar = document.getElementById('btnVerificar');
    const resultado = document.getElementById('resultado');

    // Gera número aleátorio:
    // 1°: Gera número aleátorio entre 0 e 1;
    // 2°: Multiplica este por 10;
    // 3°: Arredonda ele para baixo;
    // 4°: Soma 1 para alterar o intervalo de 0 a 9 para 1 a 10.
    let numero = Math.floor(Math.random() * 10) + 1;
        // Math.floor(): arredonda número para baixo.
        // Math.random(): gera número aleátorio entre 0 e 1.

    // Quando o botão "Verificar" é pressionado:
    btnVerificar.addEventListener('click', function () {
        let palpite = parseInt(entrada.value);

        if (palpite === numero) {
            resultado.textContent = `Meus parabéns o número era ${numero}!`;
            numero = Math.floor(Math.random() * 10) + 1;
        }
        else if ((palpite > numero) && (palpite <= 10)) {
            resultado.textContent = `O número é menor que ${palpite}...`;
        } 
        else if ((palpite < numero) && (palpite <= 10)) {
            resultado.textContent = `O número é maior que ${palpite}...`;
        } 
        else {
            resultado.textContent = `${palpite} é maior que dez, palpite inválido!`;
        }
    });
});