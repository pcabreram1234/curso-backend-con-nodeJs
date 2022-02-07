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
  resp.json({
    id,
    name: 'product 2',
    price: 2000,
  });
});

module.exports = router;
