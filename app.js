console.log("Web Serverlarni boshlash");
const express = require("express");
const app = express();

//MongoDb
const db = require("./server").db();


const mongodb = require("mongodb");

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
  console.log("user entered /create-item" );
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
  res.json(data.ops[0]);  
 });
  //   console.log(req); //body
  // res.json({ test: "success" });
});   
app.post("/delete-item", (req, res) => {
const id = req.body.id;
db.collection("plans").deleteOne(
// {_id: new mongodb.ObjectId(id) },
function(err, data) {
   res.json({state: "success"});
}
);
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);(
//db.collection("plans").findOneAndUpdate
  //{_id: new mongodb.ObjectId(data.id) }, 
  {$set: {reja: data.new_input}},
   function(err, data) {
    res.json({state: "success"});
   }
  );
  res.end("done");
});



 app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});



app.get("/", function (req, res) { // { user: user })
  console.log('user entered / ');
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      console.log(data);
      res.render("reja",  { items: data} ); 
    } 
  });
});


app.get("/author", (req, res) => {
  const user = { name: "Albert", age:24};
res.render("author", {user});
});


module.exports = app;

