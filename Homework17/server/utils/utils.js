const { readFile, writeFile } = require("fs");

const readJSON = (addr, cb) =>
  readFile(addr, (err, data) => cb(err, JSON.parse(data.toString())));

const writeJSON = (addr, data, cb) =>
  writeFile(addr, JSON.stringify(data), (err) => cb(err));

const deleteJSON = (data, id) => {
  let userToRemove = data.find((user) => user.id === id);

  data.splice(data.indexOf(userToRemove), 1);

  return data;
};
const createUserJSON = (data) =>{
  const lastUser = data[data.length -1];
  const nextId = (lastUser?.id || 0) +1;
  const newUser = {
      id: nextId,
      name: `User ${nextId}`,
      level: Math.ceil(Math.random() * 3)
  };
  return [...data, newUser]
}



module.exports = {
  readJSON,
  writeJSON,
  deleteJSON,
  createUserJSON
};
