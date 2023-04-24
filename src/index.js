const express = require("express");
const typeorm = require('typeorm');
const Wilders = require("./entity/Wilders");
const dataSource = require('./Utils').dataSource;
const wilderCtlr = require('./controlleurs/Wilders');

const app = express();
app.use(express.json())


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/wilder", wilderCtlr.create)

const start = async () => {
  await dataSource.initialize();
  dataSource.getRepository(Wilders).save({ name : "frist wilder"})
  app.listen(3000, () => console.log("Server started on 3000"));
}

//Start Server
start()

