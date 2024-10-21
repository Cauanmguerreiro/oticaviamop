let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-inner article');
const totalSlides = slides.length;

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const slideWidth = slides[0].clientWidth;
    carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Volta ao início quando chega ao fim
    }
    updateCarousel();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; // Vai para o último slide se for o primeiro
    }
    updateCarousel();
}

window.addEventListener('resize', updateCarousel); // Atualiza o tamanho do slide ao redimensionar a tela
