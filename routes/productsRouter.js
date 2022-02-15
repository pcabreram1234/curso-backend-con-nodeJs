const express = require('express');
const ProductsServices = require('../services/productService');
const router = express.Router();
const service = new ProductsServices();

router.get('/', async (req, resp) => {
  const products = await service.find();
  resp.json(products);
});

router.get('/filter', (resq, resp) => {
  resp.send('Yo sou un filter');
});

router.get('/:id', (req, resp) => {
  const { id } = req.params;
  const product = service.findeOne(id);
  resp.json(product);
});

router.post('/', (req, resp) => {
  const body = req.body;
  const newProduct = service.create(body);
  resp.status(201).json(newProduct);
});

router.patch('/:id', async (req, resp) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    resp.json(product);
  } catch (error) {
    resp.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', (req, resp) => {
  const { id } = req.params;
  const product = service.delete(id);
  resp.json({
    producto: product,
    meessage: 'Producto eliminado',
  });
});

module.exports = router;
