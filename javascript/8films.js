function fetchMovies() {
    return new Promise((resolve, reject) => {
    const apiKey = 'DKC2NA0-XMJMJPW-QFJ1YBA-MA7E7PQ';
    fetch('https://api.kinopoisk.dev/v1.4/movie?limit=30&rating.kp=7-10', {
        headers: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных о фильмах: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
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
        resolve();
    })
    .catch(error => {
        console.error(error);
        reject(error);
    });
});
}

window.onload = function() {
fetchMovies()
    .then(() => console.log('Данные о фильмах успешно загружены'))
    .catch(error => console.error('Произошла ошибка при загрузке данных о фильмах:', error));
};
