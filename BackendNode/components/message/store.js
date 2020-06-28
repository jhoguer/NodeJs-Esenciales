const db = require('mongoose');
const Model = require('./model');

// mongodb+srv://userTelegram:telegram1234@cluster0-efbgv.mongodb.net/telegram?retryWrites=true&w=majority
db.Promise = global.Promise;
db.connect('mongodb+srv://userTelegram:telegram1234@cluster0-efbgv.mongodb.net/telegram?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('[db] Conectada con exito');

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();

}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({ _id: id });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
}