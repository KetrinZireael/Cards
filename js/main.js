const slides = document.querySelectorAll('.slide');

function animationSlide() {
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();
    
            slide.classList.add('active');
        });
    }
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}

animationSlide();