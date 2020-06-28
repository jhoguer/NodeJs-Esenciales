const Model = require('./model');

// mongodb+srv://userTelegram:telegram1234@cluster0-efbgv.mongodb.net/telegram?retryWrites=true&w=majority


function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();

}

async function getMessages(userFilter) {
  let filter = {};
  if(userFilter) filter = { user: userFilter }
  console.log(filter)

  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({ _id: id });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

const removeMessage = (id) => {
  return Model.deleteOne({ _id: id });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
}