const express = require("express");
var cors = require("cors");
require("dotenv").config();
const app = express();

//impot classes

var corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOptions));

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

const routes = require("./routes/routes")

app.use("/invoice", routes);




