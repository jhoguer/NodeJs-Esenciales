const list = [];

function addMessage(message) {
  list.push(message);
}

function getMessages() {
  console.log(list);
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessages,
}