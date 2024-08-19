document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const navbarLinks = document.querySelectorAll('.navbar ul li a');

    // Desplazamiento suave al hacer scroll
    window.addEventListener('scroll', () => {
        const currentSlideIndex = Math.floor(window.scrollY / window.innerHeight);
        activateSlide(currentSlideIndex);
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
            'linear-gradient(135deg, #f6d365, #fda085)',
            'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
            'linear-gradient(135deg, #ffecd2, #fcb69f)',
            'linear-gradient(135deg, #d4fc79, #96e6a1)',
            'linear-gradient(135deg, #84fab0, #8fd3f4)'
        ];
        document.body.style.background = colors[index % colors.length];
        document.body.style.backgroundSize = '300% 300%';
        document.body.style.animation = 'backgroundAnimation 20s ease infinite';
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
