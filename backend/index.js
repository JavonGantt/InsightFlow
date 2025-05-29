const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  // console.log("test");
  res.send("Hello from backend!f");
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
