var exp = require("express");
var app = exp();
var sock= require("socket.io").listen(8080);
var http = require('http');
var mongoose = require("mongoose");
var blo = require("./Chain");
var blo1 = blo.d;

console.log(blo1); // Testing 




var Port=8080;
var IP = "192.168.10.2"; // Change it to your Local IP. 

// Remove the comment to save the data to database

//mongoose.connect("mongodb+srv://Auction:model@auction-ujxcw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

var test = new mongoose.Schema({
    text: String
    });

var block = mongoose.model("Blockchain", test);

// For Testing to check wheather the database was working or not.

// block.create({
//     text: "sss"
//    }, function(err, block){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("new schema");
//         console.log(block);
//     }
// });

// Testing, will send Hi to the CLient side socket. 
sock.on("connection", function(socket){
    console.log("connected", socket.client.id);
    sock.send("hi")
})



app.get("/", function(req,res){
    res.send("Hello Assassino");
    console.log(req.ip); // display the IP of anyone who visit the server.
});

app.listen(Port, IP, function(){
    console.log("Server started");
});

