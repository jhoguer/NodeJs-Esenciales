const Model = require('./model');

// mongodb+srv://userTelegram:telegram1234@cluster0-efbgv.mongodb.net/telegram?retryWrites=true&w=majority


function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();

}

function getMessages(userFilter) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if(userFilter) filter = { user: userFilter }
  
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if(error) {
          reject(error);
          return false;
        }

        resolve(populated);
      })
  })
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