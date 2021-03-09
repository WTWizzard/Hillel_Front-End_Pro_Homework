const {
  readJSON,
  writeJSON,
  createUserJSON,
} = require("./utils/utils");
const path = require("path");
const http = require("http");
const { join } = require("path");
const cors = require('cors');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const userAddr = path.join(__dirname, "./users.json");
const levelAddr = path.join(__dirname, "./levels.json");


app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

app.get("/get", (req, res) => {
  readJSON(userAddr, (_, data) => {
    res.send(data);
  });
});

app.delete("/:id", ({ params }, res) => {
  const { id } = params;
  readJSON(userAddr, (_, data) => {
    const userToRemove = data.find(el => el.id == id);
    const updateUsers = [...data].filter(el => el !== userToRemove);

    writeJSON(userAddr, updateUsers, () => {
      console.log("Data saved");
    });
    console.log(updateUsers);
    res.end(JSON.stringify(updateUsers));
  });
});

app.patch("/:id", ({ body, params }, res) => {
  const { id } = params;
  readJSON(userAddr, (_, data) => {
    const index = data.findIndex((el) => el.id === Number(id));
    if (body.name) {
      data[index].name = body.name;
    }
    if (body.level) {
      data[index].level = body.level;
    }
    data[index].id = Number(id);
    writeJSON(userAddr, data, () => {
      res.end(JSON.stringify(data));
    });
  });
});

app.post("/add", (req, res) => {
  readJSON(userAddr, (_, data) => {
    const newData = createUserJSON(data);
    writeJSON(userAddr, newData, () => {
      res.send(newData);
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello Node(Express)!");
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});
