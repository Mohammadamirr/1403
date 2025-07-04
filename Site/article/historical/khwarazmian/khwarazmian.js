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

document.addEventListener('DOMContentLoaded', function() {
    const newCommentBtn = document.querySelector('.new-comment-btn');
    const newCommentForm = document.querySelector('.new-comment-form');
    const submitCommentBtn = document.getElementById('submit-comment');
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.querySelector('.comments-container');

    // نمایش/مخفی‌سازی فرم افزودن دیدگاه
    newCommentBtn.addEventListener('click', function() {
      if (newCommentForm.style.display === 'none' || newCommentForm.style.display === '') {
        newCommentForm.style.display = 'block';
      } else {
        newCommentForm.style.display = 'none';
      }
    });

    // افزودن یک دیدگاه جدید به لیست نظرات
    submitCommentBtn.addEventListener('click', function() {
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        // ایجاد المنت جدید برای دیدگاه
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
          <div class="comment-header">
            <span class="username">کاربر جدید</span>
            <span class="time">لحظه‌ای پیش</span>
          </div>
          <p class="comment-text">${commentText}</p>
          <button class="reply-btn">پاسخ</button>
          <div class="replies"></div>
        `;
        // افزودن به کانتینر نظرات
        commentsContainer.appendChild(commentDiv);

        // پاکسازی فرم
        commentInput.value = '';
        newCommentForm.style.display = 'none';

        // افزودن رویداد برای دکمه پاسخ جدید
        addReplyListener(commentDiv.querySelector('.reply-btn'));
      } else {
        alert('لطفاً دیدگاه خود را وارد کنید.');
      }
    });

    // تابع افزودن رویداد به دکمه‌های پاسخ
    function addReplyListener(button) {
      button.addEventListener('click', function() {
        // در اینجا می‌توانید فرم پاسخ‌دهی را نشان دهید یا عملکرد دلخواه را پیاده کنید.
        alert('امکان پاسخ به دیدگاه فراهم شده است.');
      });
    }

    // افزودن رویداد برای همه دکمه‌های اولیه پاسخ
    document.querySelectorAll('.reply-btn').forEach(function(button) {
      addReplyListener(button);
    });
  })
