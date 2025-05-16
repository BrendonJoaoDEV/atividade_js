// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    const body = document.getElementById('corpo');
    const header = document.getElementById('cabecalho');
    const main = document.getElementById('principal');
    const footer = document.getElementById('rodape');
    const icon = document.getElementById('icon');
    const btnTrocar = document.getElementById('btnTrocar');
    
    // Quando o botão "Trocar" é pressionado:
    btnTrocar.addEventListener('click', function () {
        // Se o tema estiver claro:
        if (icon.name === 'claro') {
            icon.name = 'escuro';
            icon.alt = 'Ícone de sol';
            icon.src = 'img/sun.png';
            body.className = 'site-escuro';
            header.className = 'banner-escuro';
            main.className = 'conteudo-escuro';
            footer.className = 'rodape-escuro';
        }
        // Se o tema estiver escuro:
        else if (icon.name === 'escuro') {
            icon.name = 'claro';
            icon.alt = 'Ícone de lua';
            icon.src = 'img/moon.png';
            body.className = 'site-claro';
            header.className = 'banner-claro';
            main.className = 'conteudo-claro';
            footer.className = 'rodape-claro';
        }
    });
});