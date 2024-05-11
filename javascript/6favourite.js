function addMovie() {
    const input = document.getElementById('movieInput');
    const movieTitle = input.value;
    const newItem = document.createElement('div');
    newItem.classList.add('carousel-item');
    newItem.innerHTML = `
        <div class="movie-title">${movieTitle}</div>
        <div class="movie-date">Добавлено: ${new Date().toLocaleString()}</div>
    `;
    carouselContainer.appendChild(newItem);
    input.value = '';
}

const carouselContainer = document.getElementById('carouselContainer');
let startScrollX = null;
let endScrollX = null;
let requestId = null;

carouselContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    startScrollX = carouselContainer.scrollLeft;
    endScrollX = startScrollX + event.deltaY;
    animateScroll();
});

