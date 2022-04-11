const express = require('express');
const router = express.Router();

const {
    getAllProducts, 
    getproductById,
} = require('../controller/productControllers');


router.get("/", getAllProducts);

router.get("/:id", getproductById);

module.exports = router;