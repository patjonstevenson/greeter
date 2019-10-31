const express = require("express");
require("dotenv").config();
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200)/*.send("<h1>Welcome to the Greeter Program!!</h1>")*/.json({hello: "Web 23", message: process.env.MSG});
});

// The port will be set by Heroku on deployment
const port = process.env.PORT || 5000;
console.log(`\nPort in use: ${port}\n`);

server.listen(port, () => {
  console.log("\n**** Server running on port 5000 ****\n");
});
