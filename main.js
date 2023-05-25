const form = document.getElementById('form');

function verificarNumero(numeroA, numeroB) {
    if (parseInt(numeroB.value) > parseInt(numeroA.value)) {
        return 0;
    } else if (parseInt(numeroB.value) === parseInt(numeroA.value)) {
        return 1;
    } else {
        return 2;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const mensagemSucesso = document.getElementsByClassName('mensagemSucesso')[0];
    const mensagemFalha = document.getElementsByClassName('mensagemFalha')[0];

    mensagemSucesso.style.display = 'none';
    mensagemFalha.style.display = 'none';

    if (verificarNumero(numeroA, numeroB) === 0) {
        mensagemSucesso.innerHTML = `Está correto! O número <b>${numeroB.value}</b> = B é maior que o número <b>${numeroA.value}</b> = A!`;
        mensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    } else if (verificarNumero(numeroA, numeroB) === 1) {
        mensagemFalha.innerHTML = 'Os números são iguais!';
        mensagemFalha.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        mensagemFalha.innerHTML = `O número <b>${numeroA.value}</b> é maior que o número <b>${numeroB.value}</b>!`;
        mensagemFalha.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    }
});