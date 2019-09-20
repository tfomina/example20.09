const { join } = require("path");
const express = require("express");
const { getData } = require("./utils");
const { data } = require("./data.js");

const app = express();

app.use(express.static(join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

app.get("/list", (req, res) => {
  console.log(req.query);

  const { count } = req.query;

  const result = getData(data, count);

  res.send(result);
});

// TODO метод обработки запроса здесь

app.listen(3000, () => console.log("port 3000"));
