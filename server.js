const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

app.get("/", function (req, res) {
    res.send("Hello World!");
  });

app.get("/chocklate", function (req, res){
    res.send("Mm chocolate :O");
});

app.get("/node", function (req, res){
    res.send("This is node path");
});

app.get("/codeyourfuture", function (req, res){
    res.send("This is Codeyourfuture class");
});

app.get("/", function (req, res) {
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
  });