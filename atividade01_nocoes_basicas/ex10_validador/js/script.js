// Esperar o HTML carregar para rodar o JS:
document.addEventListener('DOMContentLoaded', function () {
    // Salva os elementos HTML necessários em variáveis JS:
    const entrada = document.getElementById('entrada');
    const resultado = document.getElementById('seguranca');
    const btnValidar = document.getElementById('btnValidar');
    
    // Quando o botão "Validar" é pressionado:
    btnValidar.addEventListener('click', function () {
        // Pega a senha que o usuário digitou:
        let senha = entrada.value;

        // Pega o comprimento dessa senha:
        let senhaComprimento = senha.length;

        // Converte a senha para letras minúsculas:
        let senhaMinuscula = senha.toLowerCase();

        // Converte a senha para letras maiúsculas:
        let senhaMaiuscula = senha.toUpperCase();

        // Verifica se tem números na senha:
        let senhaNumero = false
        for (let i = 0; i < senhaComprimento; i++) {
            j = senha[i];
            if ((j => 0) && (j <= 9)) {
                senhaNumero = true;
            }
        }

        // Condições para validação da senha:
        let cond1 = !(senha === senhaMaiuscula); // não tem letra minúscula
        let cond2 = !(senha === senhaMinuscula); // não tem letra maiúscula
        let cond3 = (senhaComprimento >= 8); // tem mais de 8 caracteres
        let cond4 = (senhaNumero); // tem números

        if (cond1 && cond2 && cond3 && cond4) {
            resultado.textContent = 'Senha forte!';
        } 
        else if ((cond3 || cond1) && (cond3 || cond2) && (cond3 || cond4)) {
            resultado.textContent = 'Senha intermediária!';
        }
        else {
            resultado.textContent = 'Senha fraca!';
        }
    });
});