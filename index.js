const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/datetime', (req, res) => {
    const now = new Date();
    res.json({
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
    });
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${3000}`);
});
