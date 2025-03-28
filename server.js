const express = require("express");
const config = require("./config/config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to expense tracker api");
});

app.listen(config.port, () => {
  console.log(`server has been started on ${config.port} `);
});
