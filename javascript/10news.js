class News {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

const viewedNews = new WeakSet();

const newsViewTime = new WeakMap();

function fetchNews() {
    const newsData = [
        { title: 'Леонардо Д узнал как ...', content: 'Леонардо Д узнал каков его рост' },
        { title: 'Джек Воробей уме...', content: 'Джек Воробей умело сыграл свою роль в фильме' },
        { title: 'Сьюзи Пэм рассказала...', content: 'Сьюзи Пэм рассказала шутку' }
    ];

    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    newsData.forEach(newsItem => {
        const newsInstance = new News(newsItem.title, newsItem.content);
        const newsElement = document.createElement('div');
        newsElement.classList.add('news-item');
        newsElement.innerHTML = `
            <h2>${newsInstance.title}</h2>
            <button class="view-btn">Посмотреть</button>
        `;
        newsElement.querySelector('.view-btn').addEventListener('click', function() {
            viewNews(newsInstance);
        });
        newsContainer.appendChild(newsElement);
    });
    
}

function viewNews(news) {
    viewedNews.add(news);
    newsViewTime.set(news, new Date());
    alert(` ${news.content}`);
    console.log("Просмотренные новости:", viewedNews);
    console.log("Время просмотра новостей:", newsViewTime);
}

window.onload = function() {
    fetchNews();
};
