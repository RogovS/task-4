/*var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;*/

/////////////////////////////////////////////

/*var WebSocketServer = require("ws").Server;
var http = require("http");
var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

app.get('/', function (request, response) {
   response.sendfile(__dirname + '/index.html');
});

app.use(express.static(__dirname + "/public"));

var server = http.createServer(app);
server.listen(port);

console.log("http server listening on %d", port);

var wss = new WebSocketServer({server: server});
console.log("websocket server created");

wss.on("connection", function(ws) {
  var id = setInterval(function() {
    ws.send(JSON.stringify(new Date()), function() {  });
  }, 1000);

  console.log("websocket connection open");

  ws.on("close", function() {
    console.log("websocket connection close");
    clearInterval(id);
  });
});
*/

var express = require('express')
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

var WebSocketServer = require("ws").Server
var wss = new WebSocketServer({server: server})
 
wss.on("connection", function(ws) {
  console.log("websocket connection open")
  var msg = {
      type: "news",
      data: "hello world"
  }
  ws.send(JSON.stringify(msg));
 
  ws.onmessage = function(d) {
    msg = JSON.parse(d.data);
    console.log("websocket messsage received")
    console.log(msg);
  };
});

/////////////////////////////////////////////

var mongo = require('mongoskin');
var conn = mongo.db('mongodb://RogovS:5mongo@ds049641.mongolab.com:49641/task-5');

conn.collection('TestCollection').insert( { ip: 'ip', date: "someDate" } );

conn.collection('TestCollection').update(
{
   ip:"ip"
},
{
   ip:"ip",
   date: "someNewData"
},
{
   upsert:true
});

conn.collection('TestCollection').findOne( {
   user:"userToFind"
},
function(err, doc) {
   if (err) { console.log("Ошибка соединения!");/* something is wrong */ }
   if (doc) { var foundData = doc.someData; }
});