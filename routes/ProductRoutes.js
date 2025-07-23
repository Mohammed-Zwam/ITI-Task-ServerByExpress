const ProductController = require('../controller/ProductControllers');
const validateID = require('../middlewares/validateID');
const express = require('express');
const router = express.Router();

// Middlewares
router.param("id", validateID);

// Get All Products
router.get("/", ProductController.getAllProducts);

// Get Product By ID
router.get("/:id", ProductController.getProductByID);

// Create New Product
router.post("/add", ProductController.createNewProduct);

// Update Existing Product
router.put("/update/:id", ProductController.updateProduct);

// Delete Product
router.delete("/delete/:id", ProductController.deleteProduct)

module.exports = router;