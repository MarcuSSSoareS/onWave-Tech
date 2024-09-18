// Utilizando jQuery
function enviarFormulario() {
    // ... (código de validação e criação da tela de confirmação)
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
        contador.textContent = `Esta mensagem será removida automaticamente em ${tempoRestante} segundos.`;
        tempoRestante--;
        if (tempoRestante >= 0) {
            setTimeout(atualizarContador, 1000);
        } else {
            confirmacao.remove();
        }
    };

    atualizarContador();

    $.ajax({
        url: 'owtenviarFormulario.php', // Substitua por seu script PHP
        type: 'POST',
        data: $('#formContato').serialize(), // Serializa os dados do formulário
        success: function (response) {
            console.log(response); // Faça algo com a resposta do servidor
        },
        error: function (error) {
            console.error(error);
        }
    });

    return false; // Impede o envio padrão do formulário
}