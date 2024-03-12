const express = require("express");
const app = express();
const mainRouter = require("./routes/index");
const cors = require("cors");
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(8080, () => {
  console.log("Connected on port 8080");
});
