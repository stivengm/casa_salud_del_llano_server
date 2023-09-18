const express = require('express');
const stores = require('./stores.json');

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

app.get('/stores/:id', (req, res) => {
    const { id } = req.params;
    const store = stores.find(store => store.id === parseInt(id));

    if (store) {
        return res.json({
            "code": "F100",
            "message": "Se obtuvo la tienda",
            "data": [store]
        });
    } else {
        return res.json({
            "code": "F200",
            "message": "No se ha encontrado la tienda",
            "data": []
        });
    }
});

app.get('/stores', (req, res) => {
    res.json({
        "code": "F100",
        "message": "Se obtuvieron las tiendas",
        "data": stores
    });
});

app.post('/stores', (req, res) => {
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
