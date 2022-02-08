const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, resp) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      id: Math.random() * 20,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  resp.json(products);
});

router.get('/filter', (resq, resp) => {
  resp.send('Yo sou un filter');
});

router.get('/:id', (req, resp) => {
  const { id } = req.params;
  if (id === '999') {
    resp.status(404).json({
      message: 'Not Found!',
    });
  } else {
    resp.json({
      id,
      name: 'product 2',
      price: 2000,
    });
  }
});

router.post('/', (req, resp) => {
  const body = req.body;
  resp.status(201).json({
    message: 'Created',
    data: body,
  });
});

router.patch('/:id', (req, resp) => {
  const { id } = req.params;
  const body = req.body;
  resp.json({
    message: 'Updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, resp) => {
  const { id } = req.params;
  resp.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
