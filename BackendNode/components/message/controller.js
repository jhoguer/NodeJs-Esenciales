const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if(!user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      reject('Los datos son incorrectos!!');
      return false;
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    }
    
    store.add(fullMessage);
    resolve(fullMessage);
  
  })
}

function getMesseges(userFilter) {
  return new Promise((resolve, reject) => {
    resolve(store.list(userFilter));
  })
}

const updateMessage = (id, message) => {
  return new Promise((resolve, reject) => {
    if(!id || !message) {
      reject('Invalid data');
    }

    store.updateText(id, message)
      .then(resultado => {
        resolve(resultado);
      })
      .catch(e => {
        console.error('el error==>', e)
      })
  })
}

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if(!id) {
      reject('Id invalido');
      return false;
    }

    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      })
  })
}

module.exports = {
  addMessage,
  getMesseges,
  updateMessage,
  deleteMessage
}