// Array com URLs de imagens aleatórias de casais (substitua pelas suas fotos)
const randomImages = [
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
];

// Função para gerar imagens aleatórias
function generateRandomImages() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        // Limpa o carrossel (opcional, depende do que você quer)
        // carousel.innerHTML = '';
        
        // Adiciona 6 itens aleatórios a cada carrossel
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * randomImages.length);
            const imgUrl = randomImages[randomIndex];
            
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            carouselItem.innerHTML = `
                <img src="${imgUrl}" alt="Foto do casal">
                <div class="carousel-item-overlay">
                    <h3>Momento Especial ${i+1}</h3>
                    <button class="btn-play"><i class="fas fa-play"></i></button>
                </div>
            `;
            
            carousel.appendChild(carouselItem);
        }
    });
    
    // Adiciona eventos aos novos botões de play
    addPlayEvents();
}

// Função para adicionar eventos aos botões de play
function addPlayEvents() {
    const newPlayButtons = document.querySelectorAll('.btn-play');
    
    newPlayButtons.forEach(button => {
        button.addEventListener('click', function() {
            videoModal.src = 'assets/videos/nosso-video.mp4';
            modal.classList.remove('hidden');
        });
    });
}

// Chama a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');
    const videoModal = document.querySelector('.modal video');
    const btnHero = document.querySelector('.btn-hero');
    
    // Gera imagens aleatórias
    generateRandomImages();
    
    // Restante do código original...
    btnHero.addEventListener('click', function() {
        videoModal.src = 'assets/videos/nosso-video.mp4';
        modal.classList.remove('hidden');
    });
    
    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
        videoModal.pause();
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
            videoModal.pause();
        }
    });
});