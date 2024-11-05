// Obtém o botão pelo id
const botao = document.getElementById('meuBotao');

// Adiciona um evento de clique no botão
botao.addEventListener('click', function() {
    // Alterna a classe 'clicked' para mudar a cor
    botao.classList.toggle('clicked');
});
