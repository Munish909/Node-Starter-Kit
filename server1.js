const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

app.get("/", function (req, res) {
    // res.send("Hello World!");
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
  });

app.get("/chocolate", function (req, res){
    // res.send("Mm chocolate :O");
const queryParamName = req.query.name;
const queryParamAmount =req.query.amount;
//const chocolate = chocolates.filter(chocolate => chocolate.name === queryParamName)
// res.send("Hello World! You searched for " + queryParamName);
res.send("I want " + queryParamAmount + "bars of " + queryParamName);
});

app.get("/node", function (req, res){
    res.send("This is node path");
});

app.get("/codeyourfuture", function (req, res){
    res.send("This is Codeyourfuture class");
});
app.get("/pudding", (req, res) => {
    res.send("I am the pudding path");
});

app.get("/pudding/:id", (req, res) => {
    const param = req.params.id;
    console.log("param" + param);
    const pudding = puddings.filter(pudding => pudding.id == param)
    res.send(pudding);
})

const chocolates = [{name: "Toblerone", shape: "triangle"}, {name: "maltesers", shape: "sphere"}];

const puddings = [{id: "1", name: "Glasgow"}, {id: "2", name: "London"}, {id: "3", name: "Edinburgh"}, {id: "4", name: "Manchester"}];

// app.get("/tool", function (req, res) {
//     const searchQuery = req.query.name;
//     // const searchQueryFunction = req.query.function;
//     console.log("Hello World! You searched for " + searchQuery);
//     //const tool =tools.filter(tool => tool.name === searchQuery);
//     res.send("I want "+ searchQuery + " " + req.query.function + " my hair " );
//   });

//   const tools = [{name: "spanner", function: "openbolts"}, { name: "sissors", function: "Tocut"} ]