const express = require('express');

const response = require('../../network/response');


const router = express.Router();

router.get('/', function(req, res) {
  res.header({
    'customm': 'Un valor personalizazo'
  })
  console.log(req.headers);

  response.success(req, res, 'Lista de mensajes')
});


router.post('/', (req, res) => {
  console.log('El body: ', req.body);
  console.log('El query: ', req.query);

  if(req.query.error == "ok") {
    response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores');
  } else {
    response.success(req, res, 'Creado correctamente', 201);
  }
})


module.exports = router;