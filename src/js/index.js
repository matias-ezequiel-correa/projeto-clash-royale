const listaSelecaoRoyale = document.querySelectorAll('.royale');
const royaleCard = document.querySelectorAll('.cartao-royale');

listaSelecaoRoyale.forEach(royale => {
    royale.addEventListener('click', () => {
        const cartaoRoyaleAberto = document.querySelector('.aberto');
        cartaoRoyaleAberto.classList.remove('aberto');

        const idRoyaleSelecionado = royale.attributes.id.value

        const idDoCartaoRoyaleParaAbrir = 'cartao-' + idRoyaleSelecionado
        const cartaoRoyaleParaAbrir = document.getElementById(idDoCartaoRoyaleParaAbrir);
        cartaoRoyaleParaAbrir.classList.add('aberto');

        const royaleAtivoNaListagem = document.querySelector('.ativo');
        royaleAtivoNaListagem.classList.remove('ativo');

        const royaleSelecionadoNaListagem = document.getElementById(idRoyaleSelecionado);
        royaleSelecionadoNaListagem.classList.add('ativo');
    });
});