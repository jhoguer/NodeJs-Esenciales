const Model = require('./model');

const addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
}

const getUsers = async () => {
  // try {
  //   const users = await Model.find();
  //   return users;
  // }catch(e) {
  //   console.error('[Error en getUsers] ', e);
  // }

  return Promise.resolve(Model.find());

  // return new Promise((resolve, reject) => {
  //   resolve(Model.find());
  // })
}

const getUser = async (id) => {
  try {
    return await Model.findOne({ _id: id });
  } catch (error) {
    console.error('[Error en getUser] ', e);
  }
}


module.exports = {
  add: addUser,
  list: getUsers,
  listOne: getUser,
}