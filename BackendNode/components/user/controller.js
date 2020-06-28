const store = require('./store');

const getUsers = () => {
  return new Promise((resolve, reject) => {
    store.list()
      .then((users) => {
        resolve(users)
      })
      .catch(err => {
        reject();
      })
  })
}

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    if(!id) reject();
    resolve(store.listOne(id));
  })
}

const addUser = (name) => {
  if(!name) {
    return Promise.reject('Invalid name');
  }

  const user = {
    name,
  }

  return store.add(user);
}

module.exports = {
  addUser,
  getUsers,
  getUser,
}