const searchInput = document.getElementById('search-input');
const pagesList = document.getElementById('pages-list');
const pages = pagesList.getElementsByTagName('li');

searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toLowerCase();
    Array.from(pages).forEach((page) => {
        const text = page.textContent.toLowerCase();
        if (text.includes(filter)) {
            page.style.display = '';
        } else {
            page.style.display = 'none';
        }
    });
});
