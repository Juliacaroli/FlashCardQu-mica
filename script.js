function mostrarFlashcards(tema) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('flashcards').style.display = 'block';
    
    const container = document.getElementById('container');
    const headerTitle = document.querySelector('header h1');
    const headerSubtitleContainer = document.getElementById('subtitulo-container');
    container.innerHTML = ''; // Limpa os flashcards anteriores

    let flashcards = [];
    let titulo = '';
    let subtitulo = '';

    // Definindo os flashcards, título e subtítulo para cada tema
    switch (tema) {
        case 'nomenclatura':
            titulo = 'Nomenclatura de Hidrocarbonetos';
            subtitulo = 'A NOMENCLATURA DO COMPOSTO ABAIXO É';
            flashcards = [
                { pergunta: 'img/Butano.jpg', resposta: 'Butano' },
                { pergunta: 'img/buteno.jpg', resposta: 'Buteno' },
                { pergunta: 'img/etano.jpg', resposta: 'Etano' },
                { pergunta: 'img/metano.jpg', resposta: 'Metano' },
                { pergunta: 'img/metilpropano.jpg', resposta: 'Metilpropano' },
                { pergunta: 'img/propano.jpg', resposta: 'Propano' }
            ];
            break;
        case 'reacoes':
            titulo = 'Reações Endotérmicas e Exotérmicas';
            subtitulo = 'CLASSIFIQUE A REAÇÃO COMO ENDOTÉRMICA OU EXOTÉRMICA';
            flashcards = [
                { pergunta: 'img/endotermica1.png', resposta: 'Reação Endotérmica' },
                { pergunta: 'img/exotermica1.webp', resposta: 'Reação Exotérmica' },
                { pergunta: 'img/endotermica2.jpg', resposta: 'Reação Endotérmica' },
                { pergunta: 'img/exotermica2.jpg', resposta: 'Reação Exotérmica' },
                { pergunta: 'img/endotermica3.png', resposta: 'Reação Endotérmica' },
                { pergunta: 'img/exotermica3.png', resposta: 'Reação Exotérmica' }
            ]; 
            break;
        case 'organica':
            titulo = 'Química Orgânica';
            subtitulo = 'CLASSIFIQUE AS CADEIAS CARBÔNICAS ABAIXO';
            flashcards = [
                { pergunta: 'img/cadeia1.webp', resposta: 'aberta, heterogênea e saturada' },
                { pergunta: 'img/cadeia2.webp', resposta: 'aberta, insaturada, heterogênia e ramificada' },
                { pergunta: 'img/cadeia3.webp', resposta: 'cadeia aromática, homogênea e ramificada' },
                { pergunta: 'img/cadeia4.webp', resposta: 'insaturada, fechada, heterogênea e alicíclica' },
                { pergunta: 'img/cadeia5.webp', resposta: 'fechada, insaturada, heterogênia e normal' },
                { pergunta: 'img/cadeia6.jpg', resposta: 'acíclica, insaturada, homogênea e ramificada' }
            ];
            break;
        default:
            flashcards = [];
    }

    // Atualiza o título e subtítulo do cabeçalho
    headerTitle.textContent = titulo;
    headerSubtitleContainer.style.display = 'block'; // Certifica-se de que o contêiner do subtítulo está visível
    headerSubtitleContainer.querySelector('#subtitulo').textContent = subtitulo; // Atualiza o subtítulo

    // Adiciona os flashcards ao contêiner
    flashcards.forEach(flashcard => {
        const card = document.createElement('div');
        card.classList.add('cartao');
        card.onclick = () => card.classList.toggle('active');
        
        card.innerHTML = `
            <div class="cartao__conteudo">
                <div class="cartao__conteudo__pergunta">
                    <img src="${flashcard.pergunta}" alt="Pergunta">
                </div>
                <div class="cartao__conteudo__resposta">
                    <p>${flashcard.resposta}</p>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function voltarParaHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('flashcards').style.display = 'none';
    
    // Restaura o título e oculta o subtítulo na tela inicial
    const headerTitle = document.querySelector('header h1');
    const headerSubtitleContainer = document.getElementById('subtitulo-container');
    headerTitle.textContent = 'Aprendendo Química com Flashcards';
    headerSubtitleContainer.style.display = 'none'; // Oculta o subtítulo-container na tela inicial
}

// Adiciona um evento para esconder o subtítulo ao carregar a página inicial
document.addEventListener('DOMContentLoaded', () => {
    const headerSubtitleContainer = document.getElementById('subtitulo-container');
    headerSubtitleContainer.style.display = 'none'; // Garante que o subtítulo-container esteja escondido inicialmente
});
