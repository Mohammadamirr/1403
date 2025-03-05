document.addEventListener('DOMContentLoaded', function() {
    // دریافت عناصر مورد نیاز
    var mainContent = document.querySelector('main');
    var congratsMessage = document.getElementById('congrats-message');
    var userScoreElement = document.getElementById('user-score');

    // بررسی اسکرول کاربر
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY + window.innerHeight;
        var mainHeight = mainContent.offsetTop + mainContent.offsetHeight;

        if (scrollPosition >= mainHeight) {
            // نمایش پیام تبریک
            congratsMessage.style.display = 'block';

            // افزودن امتیاز به کاربر
            addUserScore(100);
        }
    });

    // تابع برای افزودن امتیاز به کاربر
    function addUserScore(points) {
        var currentScore = localStorage.getItem('userScore') || 0;
        currentScore = parseInt(currentScore);

        if (!localStorage.getItem('articleRead')) {
            currentScore += points;
            localStorage.setItem('userScore', currentScore);
            localStorage.setItem('articleRead', true);
            userScoreElement.innerText = currentScore;
        }
    }

    // تنظیم امتیاز کاربر در پنل
    function loadUserScore() {
        var currentScore = localStorage.getItem('userScore') || 0;
        userScoreElement.innerText = currentScore;
    }

    loadUserScore();
});
