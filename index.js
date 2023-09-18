const express = require('express');
const stors = require('./stors.json');

const app = express();
app.disable('x-powered-by');

// Middlewares
app.use((req, res, next) => {
    console.log("Mi primer middleware");
    next();
});

// app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Mi página</h1>');
});

app.get('/stors', (req, res) => {
    res.json({
        "code": "F100",
        "message": "Se obtuvieron las tiendas",
        "data": stors
    });
})

app.post('/stors', (req, res) => {
    res.json({
        "code": "F100",
        "message": "",
        "data": []
    })
});

app.use((req, res) => {
    res.status(200).send({
        "code": "F200",
        "message": "No se ha encontrado el recurso",
        "data": []
    });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
