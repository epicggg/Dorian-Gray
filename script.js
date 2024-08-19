document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const navbarLinks = document.querySelectorAll('.navbar ul li a');

    // Desplazamiento suave al hacer scroll con la rueda del mouse
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const currentSlideIndex = Math.round(window.scrollY / window.innerHeight);
            activateSlide(currentSlideIndex);
        }, 100);
    });

    // Función para activar la slide
    function activateSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                changeBackgroundColor(i);
            } else {
                slide.classList.remove('active');
            }
        });
    }

    // Cambio de colores de fondo al cambiar de apartado
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

    // Funcionalidad del menú para ir a la sección correspondiente
    navbarLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            slides[index].scrollIntoView({ behavior: 'smooth' });
            activateSlide(index);
        });
    });

    // Inicializa la primera slide como activa
    activateSlide(0);
});
