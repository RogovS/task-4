var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = 3000;

var mongo = require('mongoskin');
var db = mongo.db('mongodb://RogovS:5mongo@ds049641.mongolab.com:49641/task-5');
 
server.listen(port, function() {
   console.log('Listening on ' + port);
});
 
app.get('/', function (request, response) {
   response.sendfile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({server: server});

console.log("проверка " + db.collection('TestCollection').findOne({ip:"123"}));
 
wss.on("connection", function(ws) {
  console.log("websocket connection open");
  var msg = {
      type: "news",
      data: "hello world"
  };
  ws.send(JSON.stringify(msg));
 
  ws.onmessage = function(d) {
    msg = JSON.parse(d.data);
    console.log("websocket messsage received");
    console.log(msg);
  };
  
});

/////////////////////////////////////////////


    console.log("проверка");
    
    db.collection('TestCollection').update(
        {
            id:"123"
            
        },
        {
            id:"123",
            ip:"123.123.123.123",
            date:"11.04.2015"
            
        },
        {
            upsert:true
        }
    );


    /*var mongo = require('mongoskin');
    var db = mongo.db('mongodb://RogovS:5mongo@ds049641.mongolab.com:49641/task-5');
    console.log("проверка");*/
    
    //conn.collection('TestCollection').insert( { ip: 'ip', date: "someDate" } );
    
    /*conn.createCollection("test", function(err, collection){
      collection.insert({"test":"value"});
    });*/
    
    //conn.collection.insert();
    
    /*db.collection('TestCollection').update(
        {
            id:"123"
            
        },
        {
            id:"123",
            ip:"123.123.123.123",
            date:"11.04.2015"
            
        },
        {
            upsert:true
        }
    );*/
    
    /*db.collection('TestCollection').update(
    {
       ip1:"ip1"
    },
    {
       ip1:"ip1",
       date: "someNewDate"
    },
    {
       upsert:true
    });*/

/*conn.collection('TestCollection').findOne( {
   user:"userToFind"
},
function(err, doc) {
   if (err) { console.log("Ошибка соединения!"); }
   if (doc) { var foundData = doc.someData; }
});*/