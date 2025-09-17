console.log("Web Serverlarni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2 Session code
//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4Routing code
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background:red" >Hello World  by Bekhzodbek</h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1>You are page of Gift</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The  server is runnning sucsessfully on port: ${PORT}`);
});
