const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
  resp.json({ categorias: ['Frangancias', 'Calzando', 'Cablleros', 'Damas'] });
  console.log(req);
});

router.get('/:categoryId/products/:idProduct', (req, resp) => {
  const { categoryId, idProduct } = req.params;

  resp.json({
    categoryId,
    idProduct,
  });
});

module.exports = router;
