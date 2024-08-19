document.addEventListener('keydown', function(event) {
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    if (event.key === 'ArrowDown' && currentSlideIndex < slides.length - 1) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex++;
        slides[currentSlideIndex].classList.add('active');
        changeBackgroundColor(currentSlideIndex);
        slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });
    }

    if (event.key === 'ArrowUp' && currentSlideIndex > 0) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex--;
        slides[currentSlideIndex].classList.add('active');
        changeBackgroundColor(currentSlideIndex);
        slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });
    }
});

function changeBackgroundColor(index) {
    const colors = [
        'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
        'linear-gradient(135deg, #2b5876, #4e4376)',
        'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)',
        'linear-gradient(135deg, #00c6ff, #0072ff)',
        'linear-gradient(135deg, #f46b45, #eea849)'
    ];
    document.body.style.background = colors[index % colors.length];
    document.body.style.backgroundSize = '300% 300%';
    document.body.style.animation = 'backgroundAnimation 15s ease infinite';
}

window.onload = function() {
    const firstSlide = document.querySelector('.slide');
    firstSlide.classList.add('active');
    changeBackgroundColor(0);
};
