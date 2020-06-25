const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


router.get('/message', function(req, res) {
  // console.log(req.headers);
  res.header({
    'customm': 'Un valor personalizazo'
  })
  console.log(req.headers);

  res.send('Lista de Mensajes');
});

router.post('/message', function(req, res) {
  res.send('Mensaje añadido');
})

router.delete('/message', (req, res) => {
  console.log('El body: ', req.body);
  console.log('El query: ', req.query);
  res.send('Mensahje añadido correctamente');
})
// app.use('/', function(req, res) {
  //   res.send('hola');
  // });
  
app.listen(3000, () => {
  console.log(`La app esta escuchando en http://localhost:3000`);
});