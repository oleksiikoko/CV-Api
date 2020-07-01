const express = require("express");
const dotenv = require("dotenv");
const createServer = require("http").createServer;

dotenv.config();

const createRoutes = require("./core/routes");

const mongoose = require("mongoose");

const DB = "Portfolio";
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const app = express();
const http = createServer(app);

createRoutes(app);

http.listen(process.env.PORT || 3000, () => {
  console.log(`Server: http://localhost:${process.env.PORT || 3000}`);
});
