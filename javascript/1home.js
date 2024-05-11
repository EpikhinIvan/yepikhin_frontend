async function fetchMovies() {
    try {
        const apiKey = 'DKC2NA0-XMJMJPW-QFJ1YBA-MA7E7PQ'; 
        const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?limit=10&rating.kp=7-10', {
    headers: {
        'X-API-KEY': apiKey
    }
});

if (!response.ok) {
    throw new Error('Ошибка при загрузке данных о фильмах: ' + response.statusText);
}
const data = await response.json();

const movieContainer = document.getElementById('movieContainer');

data.docs.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('tickety');
    movieElement.innerHTML = `
        <img src="${movie.poster.url}" alt="${movie.name}">
        <div class="ticket-info">
            <h3>${movie.name}</h3>
            <p class="dop">${movie.year}, ${movie.genres.map(genre => genre.name).join(', ')}</p>
            <button>Подробнее</button>
        </div>
    `;
    movieContainer.appendChild(movieElement);
});
    } catch (error) {
        console.error(error);
    }
}




