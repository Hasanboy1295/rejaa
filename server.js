const http = require("http"); // core module
 
const mongodb = require("mongodb"); // external package

let db;
//const connectionString = "mongodb+srv://alberti:<db_password>@cluster0.vhweshu.mongodb.net/";
const connectionString = "mongodb+srv://alberti:hasanboy0303@cluster0.vhweshu.mongodb.net/Reja";
//DB connection
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true,},
    (err, client) => {
        if(err) console.log("ERROR on connection MongoDB");
        else{
            console.log("MongoDB connection succeed")
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function(){
                console.log((`The server is running seccessfully on port: ${PORT}, http://localhost:${PORT}`));
            });

        }
    }
);

