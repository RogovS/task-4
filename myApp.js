var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000
var io = require('socket.io')(server);

server.listen(port, function() {
   console.log('Listening' + port);
});

app.get('/', function (request, response) {
   response.sendfile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

io.of('http://task-4.herokuapp.com').on('connection', function() {
	io.set('transports', ['xhr-polling']);
	io.set('polling duration', 10);
});

io.on('connection', function (socket) {
	io.emit('news', { hello: 'world' });
	io.on('my other event', function (data) {
		console.log(data);
	 });
});

/*var mongo = require('mongoskin');
var conn = mongo.db('mongodb://user:password@mongohq-user.mongohq.com:10006/databasename');

conn.collection('collectionName').update(
{
   user:"userToUpdate"
},
{
   user:"userToUpdate",
   someData: "someNewData"
},
{
   upsert:true
});

conn.collection('collectionName').findOne( {
   user:"userToFind"
},
function(err, doc) {
   if (err) { /* something is wrong */ }
   if (doc) { var foundData = doc.someData; }
});*/