const express = require('express');
const controller = require('./controller');

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
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Informacion invalida', 404, 'Error en el controlador');
    });
})


module.exports = router;