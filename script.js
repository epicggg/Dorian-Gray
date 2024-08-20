document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar ul li a');
    let currentSlideIndex = 0;

    // Desplazamiento suave al hacer scroll
    window.addEventListener('scroll', () => {
        currentSlideIndex = Math.floor(window.scrollY / window.innerHeight);
        activateSlide(currentSlideIndex);
    });

    // Desplazamiento automático cada 16 segundos
    setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });
        activateSlide(currentSlideIndex);
    }, 16000);

    // Función para activar la slide y manejar el navbar
    function activateSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                changeBackgroundColor(i);
                resetProgressLine(slide);
                // Ocultar navbar después de la primera slide
                if (i > 0) {
                    navbar.classList.add('hidden');
                } else {
                    navbar.classList.remove('hidden');
                }
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

    // Mostrar el navbar al mover el cursor a la parte superior
    document.addEventListener('mousemove', function(e) {
        if (e.clientY < 50) {
            navbar.classList.remove('hidden');
        }
    });

    // Funcionalidad del menú para ir a la sección correspondiente
    navbarLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentSlideIndex = index;
            slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });
            activateSlide(currentSlideIndex);
        });
    });

    // Inicializa la primera slide como activa y añade la línea de progreso
    slides.forEach(slide => {
        const progressLine = document.createElement('div');
        progressLine.classList.add('progress-line');
        progressLine.innerHTML = '<svg><path d="M 20,20 Q 700,0 1380,20 Q 1400,390 1380,760 Q 700,780 20,760 Q 0,390 20,20 Z"></path></svg>';
        slide.appendChild(progressLine);
    });

    function resetProgressLine(slide) {
        const progressPath = slide.querySelector('.progress-line path');
        progressPath.style.animation = 'none';
        progressPath.offsetHeight; /* trigger reflow */
        progressPath.style.animation = null;
    }

    activateSlide(0);
});
