function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    const apiKey = 'DKC2NA0-XMJMJPW-QFJ1YBA-MA7E7PQ';
    const url = `https://api.kinopoisk.dev/v1.4/movie?search=${searchInput}`;
    
    fetch(url, {
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
        displayMovies(data.docs);
    })
    .catch(error => {
        console.error(error);
        displayErrorMessage('Произошла ошибка при загрузке данных о фильмах.');
    });
}

function displayMovies(movies) {
    const movieResults = document.getElementById('movieResults');
    movieResults.innerHTML = '';

    if (movies.length === 0) {
        movieResults.innerHTML = '<p>Ничего не найдено</p>';
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-item');
        movieElement.innerHTML = `
            <img src="${movie.poster.url}" alt="${movie.name}">
            <div class="movie-info">
                <h3>${movie.name}</h3>
                <p>${movie.year}</p>
            </div>
        `;
        movieResults.appendChild(movieElement);
    });
}

function displayErrorMessage(message) {
    const movieResults = document.getElementById('movieResults');
    movieResults.innerHTML = `<p>${message}</p>`;
}
