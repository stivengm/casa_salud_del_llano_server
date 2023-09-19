import { Router } from 'express';
import { readJSON } from '../utils/readJSON.js';
import { validateStore } from '../schemas/stores.js';

const stores = readJSON('../../stores.json');

export const storesRouter = Router();

storesRouter.get('/', (req, res) => {
    console.log("Hola mundo");
    console.log(stores);
    res.json({
        "code": "F100",
        "message": "Se obtuvieron las tiendas",
        "data": stores
    });
});

storesRouter.get('/:id', (req, res) => {
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

storesRouter.post('/', (req, res) => {

    const result = validateStore(req.body);

    if (result.error) {
        const parser = JSON.parse(result.error.message);
        const message = parser[0].message;
        return res.status(200).json({
            "code": "F201",
            "message": message,
            "data": []
        });
    }

    const newStore = {
        id: 2, // crypto.randomUUID(),
        ...result.data
    };

    stores.push(newStore)

    res.status(201).json({
        "code": "F100",
        "message": "Se ha creado una nueva tienda",
        "data": [newStore]
    })
});