document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(50px)';
            }
        });
    }, options);

    slides.forEach(slide => {
        observer.observe(slide);
        slide.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSlide = document.getElementById(targetId);
            window.scrollTo({
                top: targetSlide.offsetTop - 50, // Ajustar para barra de navegación
                behavior: 'smooth'
            });
        });
    });
});
