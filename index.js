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

app.get('/stors/:id', (req, res) => {
    const { id } = req.params;
    const stor = stors.find(st => st.id === parseInt(id));

    if (stor) {
        return res.json({
            "code": "F100",
            "message": "Se obtuvo la tienda",
            "data": [stor]
        });
    } else {
        return res.json({
            "code": "F200",
            "message": "No se ha encontrado la tienda",
            "data": []
        });
    }
});

app.get('/stors', (req, res) => {
    res.json({
        "code": "F100",
        "message": "Se obtuvieron las tiendas",
        "data": stors
    });
});

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
