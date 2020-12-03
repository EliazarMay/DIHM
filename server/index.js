const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/CRUD-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.use("/posts", require("./routes/post"));
app.use("/offers", require("./routes/offer"));
app.use("/users", require("./routes/auth.routes"));

app.get("/", (req, res) => {
  res.json({ project: "MERN CRUD api" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
