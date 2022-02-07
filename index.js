const express = require('express');
const routerApi = require('./routes/index');
const app = express();
const port = 3120;

app.get('/', (req, resp) => {
  resp.send('Hola mi server en express');
});

app.get('/home', (req, resp) => {
  resp.send('Bienvenido');
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});

routerApi(app);
