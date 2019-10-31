const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200)/*.send("<h1>Welcome to the Greeter Program!!</h1>")*/.json({hello: "Web 23"});
});

server.listen(5000, () => {
  console.log("\n**** Server running on port 5000 ****\n");
});
