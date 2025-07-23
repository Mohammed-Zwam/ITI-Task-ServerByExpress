const Product = require('../models/ProductModel');
const messages = require('../util/helpers');


const getAllProducts = (req, res) => {
    const products = Product.find();
    res.json(products)
};

const getProductByID = (req, res) => {
    const product = Product.findOne(req.params.id);
    if (product) res.json(product);
    else res.status(404).send(messages.NOT_FOUND);
}

const createNewProduct = (req, res) => {
    const product = new Product(req.body);
    product.save();
    res.send(messages.PRODUCT_ADDED);
}


const updateProduct = (req, res) => {
    const isUpdated = Product.updateOne(req.id, req.body);
    if (isUpdated) res.send(messages.PRODUCT_UPDATED);
    else res.status(404).send(messages.NOT_FOUND);
}


const deleteProduct = (req, res) => {
    const isDeleted = Product.deleteOne(req.id);
    if (isDeleted) res.send(messages.PRODUCT_DELETED);
    else res.status(404).send(messages.NOT_FOUND);
}



module.exports = {
    getAllProducts,
    getProductByID,
    createNewProduct,
    updateProduct,
    deleteProduct
}