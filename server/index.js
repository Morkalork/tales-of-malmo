const path = require("path");
const compression = require("compression");
const express = require("express");
const app = express();

app.use(compression());
app.use("/public", express.static(path.join(__dirname, "../dist")));

app.get("/app.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/app.js"));
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(8080, () => {
  console.log("Server is up an running on http://localhost:8080!");
});
