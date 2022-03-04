const express = require('express');
const ProductsServices = require('../services/productService');
const { validatorHandler } = require('../middlewares/validorHandler');
const {
  creatProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/productSchemas');
const router = express.Router();
const service = new ProductsServices();

router.get('/', async (req, resp, next) => {
  try {
    const products = await service.find();
    resp.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/filter', (resq, resp) => {
  resp.send('Yo soy un filter');
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, resp, next) => {
    try {
      const { id } = req.params;
      const product = await service.findeOne(id);
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(creatProductSchema, 'body'),
  async (req, resp) => {
    const body = req.body;
    const newProduct = service.create(body);
    resp.status(201).json(newProduct);
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, resp, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      resp.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', (req, resp) => {
  const { id } = req.params;
  const product = service.delete(id);
  resp.json({
    producto: product,
    meessage: 'Producto eliminado',
  });
});

module.exports = router;
