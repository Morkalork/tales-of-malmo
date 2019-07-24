const path = require("path");
const compression = require("compression");
const express = require("express");
const app = express();

app.use(compression());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
app.use("/", express.static(path.join(__dirname, "../dist")));

app.listen(8080, () => {
  console.log("Server is up an running on http://localhost:8080!");
});
