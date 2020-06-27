const express = require('express');
const controller = require('./controller');

const response = require('../../network/response');


const router = express.Router();

router.get('/', function(req, res) {
  controller.getMesseges()
    .then(messageList => {
      response.success(req, res, messageList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected error', 500, e);
    })
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