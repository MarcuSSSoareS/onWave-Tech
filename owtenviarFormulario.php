<?php
// owtenviarFormulario.php

// Recebe os dados enviados pelo formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
// ... e assim por diante

// Faça algo com os dados, como salvar em um banco de dados, enviar um e-mail, etc.
// ...

// Retorna uma resposta para o JavaScript
echo 'Dados recebidos com sucesso!';