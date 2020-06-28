const express = require('express');
const controller = require('./controller');

const response = require('../../network/response');


const router = express.Router();

router.get('/', function(req, res) {
  const userFilter = req.query.user || null

  controller.getMesseges(userFilter)
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

router.patch('/:id', (req, res) => {

  controller.updateMessage(req.params.id, req.body.message)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, e);
    });

})

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, e);
    })
})

module.exports = router;