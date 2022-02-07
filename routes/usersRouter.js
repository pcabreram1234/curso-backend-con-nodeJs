const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    resp.json({ limit, offset });
  } else {
    resp.send('No hay parametros');
  }
});

module.exports = router;
