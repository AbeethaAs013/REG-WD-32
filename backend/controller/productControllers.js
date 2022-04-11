const product = require('../models/product');

const getAllProducts = () =>async (req, res) => {
    try{
        const products = await product.find({});

        res.json(products);
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Server Error"});
    }
}


const getproductById = () =>async (req, res) => {
    try {
        const product = await product.findById(req.params.id);

        res.json(product);
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Server Error"});
    }
}


module.exports = {
    getAllProducts,
    getproductById
}