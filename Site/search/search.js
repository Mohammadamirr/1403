// فرض کنید در فایل category.js است
document.addEventListener('DOMContentLoaded', function() {
    var categorySlug = 'history';'study';'sports'
    var categoryTitle = document.getElementById('category-title');
    var articlesList = document.getElementById('articles-list');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            var category = data.categories.find(cat => cat.slug === categorySlug);
            if (category) {
                categoryTitle.innerText = category.name;
                category.articles.forEach(article => {
                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    a.href = article.link;
                    a.innerText = article.title;
                    li.appendChild(a);
                    articlesList.appendChild(li);
                });
            } else {
                categoryTitle.innerText = 'دسته مورد نظر یافت نشد';
            }
        })
        .catch(error => console.error('Error:', error));
});
