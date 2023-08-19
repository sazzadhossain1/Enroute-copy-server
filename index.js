const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allApis = require("./api.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("MY SERVER IS RUNNING");
});

app.get("/allApis", (req, res) => {
  res.send(allApis);
});

app.get("/allApis/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const api = allApis[0].button.find((apiById) => apiById.id === id);
  res.send(api);
});

app.listen(port, () => {
  console.log("Express app listening on port");
});
