const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');

menuButton.addEventListener('click', () => {
    menuOptions.classList.toggle('show');
});

// Adicionar event listeners para os botões de login e outras ações