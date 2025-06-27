document.addEventListener('DOMContentLoaded', function () {
    const entrada1 = document.getElementById('numero1');
    const entrada2 = document.getElementById('numero2');
    const entrada3 = document.getElementById('numero3');


    document.getElementById('btnVerificar').addEventListener('click', function () {
        let numeros = [parseInt(entrada1.value), parseInt(entrada2.value), parseInt(entrada3.value)];

        let maior = Math.max(numeros);
        let menor = Math.min(numeros);
        
        console.log(Math.max(numeros));
        console.log(Math.min(numeros));
        console.log(numeros);
    })
})

    // function verificarMaiorMenorIgual (numeros) {
    //     let maior = Math.max(numeros);
    //     let menor = Math.min(numeros);

    //     let max_min = [maior, menor];

    //     let numeros_restantes = numeros.filter(function (numero) {
    //         return !(numero in max_min); 
    //     });

    //     return maior
    // }