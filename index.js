const express = require('express');
const routerApi = require('./routes/index');
const app = express();
const port = process.env.PORT || 3120;

const {
  logErrors,
  errorhandler,
  boomErrorhandler,
} = require('./middlewares/errorHandler');
const { validatorHandler } = require('./middlewares/validorHandler');

app.use(express.json());

app.get('/', (req, resp) => {
  resp.send('Hola mi server en express');
});

app.get('/home', (req, resp) => {
  resp.send('Bienvenido');
});

routerApi(app);

app.use(logErrors);
app.use(errorhandler);
app.use(boomErrorhandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
