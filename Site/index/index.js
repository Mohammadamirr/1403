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

document.getElementById('support-button').addEventListener('click', function () {
    document.getElementById('chatbot-container').classList.toggle('hidden')
})

document.getElementById('close-chatbot').addEventListener('click', function () {
    document.getElementById('chatbot-container').classList.add('hidden')
})

// ارسال پیام و دریافت پاسخ از چت‌بات
document.getElementById('chatbot-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = document.getElementById('chatbot-input').value;
    if (userInput.trim() === '') return;

    // نمایش پیام کاربر
    addMessage('user', userInput);
    document.getElementById('chatbot-input').value = '';

    // ارسال پیام به سرور برای دریافت پاسخ
    fetch('/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        // نمایش پاسخ چت‌بات
        addMessage('bot', data.response);
    })
    .catch(error => {
        console.error('Error:', error);
        addMessage('bot', 'متاسفانه مشکلی پیش آمده است.');
    });
});

// افزودن پیام به پنجره چت‌بات
function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;

    const messagesContainer = document.getElementById('chatbot-messages');
    messagesContainer.appendChild(messageElement);

    // اسکرول به انتهای پیام‌ها
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

const darkmode = new Darkmode();
darkmode.showWidget();
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    darkmode.toggle();
});

const slider = new KeenSlider(".keen-slider", {
    loop: true,
    slides: { perView: 1 },
    created: function (instance) {
        const dots = document.querySelectorAll(".dot");
        const thumbnails = document.querySelectorAll(".thumbnails img");
        dots.forEach((dot, idx) => {
            dot.addEventListener("click", () => {
                instance.moveToSlide(idx);
            });
        });
        thumbnails.forEach((thumb, idx) => {
            thumb.addEventListener("click", () => {
                instance.moveToSlide(idx);
            });
        });
        document.querySelector(".arrow.left").addEventListener("click", () => {
            instance.prev();
        });
        document.querySelector(".arrow.right").addEventListener("click", () => {
            instance.next();
        });
    },
    slideChanged: function (instance) {
        const dots = document.querySelectorAll(".dot");
        const thumbnails = document.querySelectorAll(".thumbnails img");
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", instance.details().relativeSlide === idx);
        });
        thumbnails.forEach((thumb, idx) => {
            thumb.classList.toggle("active", instance.details().relativeSlide === idx);
        });
    },
});
