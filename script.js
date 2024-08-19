document.addEventListener('keydown', function(event) {
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    if (event.key === 'ArrowDown' && currentSlideIndex < slides.length - 1) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex++;
        slides[currentSlideIndex].classList.add('active');
        slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });
    }

    if (event.key === 'ArrowUp' && currentSlideIndex > 0) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex--;
        slides[currentSlideIndex].classList.add('active');
        slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });
    }
});

window.onload = function() {
    document.querySelector('.slide').classList.add('active');
};
