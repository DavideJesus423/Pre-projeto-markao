        // Seleciona todos os slides
        const slides = document.querySelectorAll('.slide');

        // Função que anima as imagens
        function animarSlides() {
            slides.forEach((slide) => {
                // Inicia a opacidade em 0 e posiciona fora da tela à esquerda
                slide.style.opacity = 0;
                slide.style.transform = `translateX(-100%)`;
                
                // Anima o slide/imagens vindo da esquerda para a direita
                setTimeout(() => {
                    slide.style.transition = 'transform 1s ease, opacity 1s ease';
                    slide.style.transform = `translateX(0)`;
                    slide.style.opacity = 1; // Aumenta a opacidade para 1
                }, 100); // Pequeno atraso para garantir que a transição seja visível
            });
        }

        // Chama a função para iniciar a animação
        window.onload = function() {
            animarSlides();
        };