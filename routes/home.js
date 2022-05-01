
const express= require('express');
const productController = require('../controllers/product_controller');

const router = express.Router();


//creating different routes for the producctController actions

router.get('/', productController.showproduct);

router.get('/product', productController.addproduct);

router.post('/products/create', productController.addnewproduct);

router.get('/products', productController.getproduct);

router.delete('/products/:_id',  productController.deleteProduct);

router.put(`/products/:_id`, productController.updateProduct)


module.exports = router;

