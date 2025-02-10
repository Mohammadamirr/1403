const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

app.post('/chatbot', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userMessage }]
            })
        });

        const data = await response.json();
        const botResponse = data.choices[0].message.content;

        res.json({ response: botResponse });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ response: 'متاسفانه مشکلی پیش آمده است.' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
