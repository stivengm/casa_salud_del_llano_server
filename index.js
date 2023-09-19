import express, { json } from 'express';
import { storesRouter } from './src/routes/stores.js';

const app = express();
app.disable('x-powered-by');

// Middlewares
// app.use((req, res, next) => {
//     console.log("Mi primer middleware");
//     next();
// });

app.use(json());

app.get('/', (req, res) => {
    res.send('<h1>Mi página</h1>');
});


app.use('/stores', storesRouter);


app.use((req, res) => {
    res.status(200).send({
        "code": "F200",
        "message": "No se ha encontrado el recurso",
        "data": []
    });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
