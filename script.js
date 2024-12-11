// Efecto de exploración en el botón
document.getElementById('exploreButton').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#section2').offsetTop,
        behavior: 'smooth'
    });
});

// Validación de formulario
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Pronto nos pondremos en contacto.');
});

// Hover animado en imágenes
const images = document.querySelectorAll('.image-gallery img');
images.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.filter = 'brightness(1.2)';
    });
    img.addEventListener('mouseout', () => {
        img.style.filter = 'brightness(1)';
    });
});

// Mostrar más información en el botón
document.getElementById('moreInfoButton').addEventListener('click', () => {
    alert('¡Gracias por tu interés! Estoy constantemente aprendiendo y creando.');
});
