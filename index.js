const express = require("express");

const app = express();

app.use(express.static('asset'))

app.get("/", (req, res) => {
  res.sendFile((path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT

app.listen(PORT);