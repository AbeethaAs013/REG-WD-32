const express = require('express');
const router = express.Router();

const {
    getAllProducts, 
    getproductById,
} = require("../controller/productControllers");

// GET all products from db
// GET api/products
router.get("/", getAllProducts);

// GET a product by id from db
// GET api/products/:id
router.get("/:id", getproductById);

module.exports = router;