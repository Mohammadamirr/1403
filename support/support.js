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
