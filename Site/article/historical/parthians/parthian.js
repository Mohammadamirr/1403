document.addEventListener('DOMContentLoaded', () => {
    let xpGranted = false;

    window.addEventListener('scroll', () => {
      if (!xpGranted) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.body.scrollHeight;

        if (scrollPosition >= pageHeight * 0.9) {
          xpGranted = true;
          fetch('/api/grant-xp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': csrfToken,
            },
            body: JSON.stringify({ articleId: ARTICLE_ID })
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              alert('تبریک! شما XP این مقاله را دریافت کردید.');
            }
          });
        }
      }
    });
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
  });
