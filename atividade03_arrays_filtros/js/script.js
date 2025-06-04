document.addEventListener('DOMContentLoaded', function () {
    const array = [
        {nome: 'Sabonete Natural', preco: 15.00, categoria: 'cosmético'},
        {nome: 'Shampoo Orgânico', preco: 25.00, categoria: 'cosmético'},
        {nome: 'Granola Artesanal', preco: 18.50, categoria: 'alimento'},
        {nome: 'Mel Puro', preco: 22.00, categoria: 'alimento'}
    ];

    const limpar = elemento => elemento.innerHTML = '';

    const filtro = document.getElementById('filtro');
    const resultado = document.getElementById('resultado');
    const total = document.getElementById('total');

    filtro.addEventListener('input', function () {
        if (filtro.value === 'todos') {
            limpar(resultado);

            let soma = 0;

            array.forEach(function (valor) {
                const elemento = document.createElement('li');

                elemento.innerHTML = `<strong>${valor.nome}</strong><br>
                R$: ${valor.preco}`;

                resultado.appendChild(elemento);

                soma = soma + valor.preco;
            });
            
            total.innerHTML = `Total: R$ ${soma}`;
        } 

        else if (filtro.value === 'alimentos') {
            limpar(resultado);

            let soma = 0;

            let arrayFiltrado = array.filter(function (valor) {
                return valor.categoria === 'alimento';
            });

            arrayFiltrado.forEach(function (valor) {
                const elemento = document.createElement('li');

                elemento.innerHTML = `<strong>${valor.nome}</strong><br>
                R$: ${valor.preco}`;

                resultado.appendChild(elemento);

                soma = soma + valor.preco;
            });
            
            total.innerHTML = `Total: R$ ${soma}`;
        } 

        else if (filtro.value === 'cosmeticos') {
            limpar(resultado);

            let soma = 0;

            let arrayFiltrado = array.filter(function (valor) {
                return valor.categoria === 'cosmético';
            });

            arrayFiltrado.forEach(function (valor) {
                const elemento = document.createElement('li');

                elemento.innerHTML = `<strong>${valor.nome}</strong><br>
                R$: ${valor.preco}`;

                resultado.appendChild(elemento);

                soma = soma + valor.preco;
            });
            
            total.innerHTML = `Total: R$ ${soma}`;
        }
    });
});

