// Test kar raha tha didn't succeed, but it will display the message from the server to this js file.
// Open this on a new terminal to see this work.

var io = require('socket.io-client');
var socket = io.connect("http://localhost:8080/", {
    reconnection: true
});

socket.on('connect', function () {
    console.log(socket);
    });

socket.on("message", function(message){
 console.log(message);
})