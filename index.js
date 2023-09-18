const express = require('express');

const app = express();
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.send('<h1>Mi página</h1>');
});

app.get('/stors', (req, res) => {
    res.json({ test: "hola" });
})

app.post('/stors', (req, res) => {




});

app.use((req, res) => {
    res.status(404).send({
        "code": "F200",
        "message": "No se ha encontrado el recurso",
        "data": []
    });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
