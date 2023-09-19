import { readJSON } from '../utils/readJSON.js';

const stores = readJSON('../../stores.json');

export class StoresModel {
    static async getById({ id }) {
        const store = stores.find(store => store.id === parseInt(id))
        return store;
    }
}