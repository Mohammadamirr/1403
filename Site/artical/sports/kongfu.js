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
