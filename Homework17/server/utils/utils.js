const { readFile, writeFile } = require("fs");

const readJSON = (addr, cb) =>
  readFile(addr, (err, data) => cb(err, JSON.parse(data.toString())));

const writeJSON = (addr, data, cb) =>
  writeFile(addr, JSON.stringify(data), (err) => cb(err));

const deleteJSON = (data, id) => {
  let userToRemove = data.find((user) => user.id === user[id]);

  data.splice(data.indexOf(userToRemove), 1);

  return data;
};
module.exports = {
  readJSON,
  writeJSON,
  deleteJSON,
};
