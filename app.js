const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (request, response) => {
  response.sendFile("./About.page", { root: __dirname });
});

module.exports = app;
