var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;

server.listen(port, function() {
   console.log('Listening on ' + port);
});
 
app.get('/', function (request, response) {
   response.sendfile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({server: server});

wss.on("connection", function(ws) {
  console.log("websocket connection open");
  var msg = {
      type: "news",
      data: "hello world"
  };
  ws.send(JSON.stringify(msg));
 console.log("websocket messsage received");
  ws.onmessage = function(d) {
    msg = JSON.parse(d.data);
    console.log("websocket messsage received");
    console.log(msg);
  };
  
});

var mongo = require('mongoskin');
var db = mongo.db('mongodb://RogovS:5mongo@ds049641.mongolab.com:49641/task-5');

console.log('test');
db.collection('TestCollection').update(
{
   ip:"userToUpdate"
},
{
   ip:"userToUpdate",
   date: "someNewData"
},
{
   upsert:true
});
console.log('test');
