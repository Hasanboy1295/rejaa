console.log("Web Serverlarni boshlash");
const express = require("express");
const app = express();

//MongoDb
const db =require("./server").db();
// const fs = require("fs");


// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// MongoDB connect 


//1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code
//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background:red" >Hello World  by Bekhzodbek</h1>`);
// });
// app.get("/gift", function (req, res) {
//   res.end(`<h1>You are page of Gift</h1>`);

// });

app.post("/create-item", (req, res) => {
  
  const new_reja = req.body.reja;
  console.log("req.body.reja", req.body)
 db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
  if(err) {
    console.log(err);
    res.end('something went wrong');
  } else {
    res.end("sucsesfully added");
  }
 });
  //   console.log(req); //body
  // res.json({ test: "success" });
});
//app.get("/author", (req, res) => {
  //res.render("author", { user: user });
//});

app.get("/", function (req, res) {
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      console.log(data);
      res.render("Reja",  { items: data} ); 
    } 
  });
});


module.exports = app;  
