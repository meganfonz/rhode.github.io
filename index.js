const images = document.querySelector('.imagenescarrusel');
const totalimages = document.querySelectorAll('.imagenescarrusel img').length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalimages;
    updateCarrusel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalimages) % totalimages;
    updateCarrusel();
});

function updateCarrusel() {
    const offset = -index * 100;
    images.style.transform = `translateX(${offset}%)`;
}

// Movimiento automático cada 4 segundos
setInterval(() => {
    index = (index + 1) % totalimages;
    updateCarrusel();
}, 4000);
