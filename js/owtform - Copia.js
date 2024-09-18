function enviarFormulario() {
    const form = document.getElementById('formContato');
    const data = new FormData(form);

    fetch('https://formsubmit.co/onwavetech@outlook.com.br', {
        method: 'POST',
        body: data
    })
        .then(response => {
            if (response.ok) {
                mostrarMensagemSucesso();
                form.reset();
            } else {
                alert('Ocorreu um erro ao enviar o formulário.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocorreu um erro ao enviar o formulário.');
        });

    return false; // Impede o envio padrão do formulário
}

function mostrarMensagemSucesso() {
    const mensagem = document.getElementById('mensagemSucesso');
    mensagem.style.display = 'block';

    setTimeout(() => {
        mensagem.style.display = 'none';
    }, 15000); // Esconde a mensagem após 15 segundos

    document.getElementById('fecharMensagem').addEventListener('click', () => {
        mensagem.style.display = 'none';
    });
}