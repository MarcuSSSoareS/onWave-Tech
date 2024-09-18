function enviarFormulario() {
    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const empresa = document.getElementById('empresa').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const necessidade = document.getElementById('necessidade').value;

    // Validação básica dos campos obrigatórios
    if (nome === "" || telefone === "" || email === "" || necessidade === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (necessidade.length > 500) {
        alert("O campo 'Resumo da Necessidade' excedeu o limite de 500 caracteres.");
        return false;
    }

    // Cria a tela de confirmação
    const confirmacao = document.createElement('div');
    confirmacao.classList.add('confirmacao');
    confirmacao.textContent = 'Seu formulário foi enviado com sucesso!';
    document.body.appendChild(confirmacao);

    // Cria um elemento para exibir a contagem regressiva
    const contador = document.createElement('span');
    contador.classList.add('contador');
    confirmacao.appendChild(contador);

    // Função para atualizar a contagem regressiva
    let tempoRestante = 5;
    const atualizarContador = () => {
        contador.textContent = `Esta mensagem será removida em ${tempoRestante} segundos.`;
        tempoRestante--;
        if (tempoRestante >= 0) {
            setTimeout(atualizarContador, 1000);
        } else {
            confirmacao.remove();
        }
    };

    atualizarContador();

    // Aqui você pode adicionar o código para enviar os dados para um servidor,
    // utilizando AJAX ou um framework como Fetch API.

    return false; // Impede o envio padrão do formulário
}