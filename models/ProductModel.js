const productsData = require("../data/ProductsData.json");
/*
        "id": 6,
        "name": "Nintendo Switch",
        "description": "Portable gaming console with versatile play modes",
        "available": false,
        "price": 299.99

*/

module.exports = class Product {
    constructor({ id, name, description, available, price }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = available;
        this.price = price;
    }

    save() {
        productsData.push(this);
    }

    static find() {
        return productsData;
    }

    static findOne(id) {
        const idx = this.getIdx(id);
        if (idx == -1) return null;
        return productsData[idx];
    }


    static getIdx(id) {
        const idx = productsData.findIndex(p => p.id == id);
        return idx;
    }

    static updateOne(id, updatedProduct) {
        const idx = this.getIdx(id);
        if (idx == -1) return false;
        for (let key in updatedProduct) {
            productsData[idx][key] = updatedProduct[key];
        }
        return true;
    }


    static deleteOne(id) {
        const idx = this.getIdx(id);
        if (idx == -1) return false;
        productsData.splice(idx, 1);
        return true;
    }
}