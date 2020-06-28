const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  controller.getUsers()
    .then(userlist => {
      response.success(req, res, userlist, 200);
    })
    .catch(err => {
      response.error(req, res, 'Internal error to get users', 500, err);
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  controller.getUser(id)
    .then(user => response.success(req, res, user, 200))
    .catch(err => response.error(req, res, 'Internal error to get user by id'));
})

router.post('/', (req, res) => {
  controller.addUser(req.body.name)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err);
    })
});

module.exports = router;