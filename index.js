const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Configuração do CORS para permitir o frontend no Vercel
app.use(cors({
    origin: 'https://frontend-datetime.vercel.app',
    methods: ['GET'],
    credentials: true
}));

app.get('/datetime', (req, res) => {
    const now = new Date();
    res.json({
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
    });
});

app.listen(port, () => {
    console.log(`API rodando em https://api-datetime.onrender.com`);
});
