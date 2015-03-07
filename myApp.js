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

var ip, date;

io.on('connection', function (socket) {
	io.emit('news', { hello: 'world' });
	/*io.on('ip', function (data) {
		console.log(data);
		ip = data.ip;
	 });*/
});

var mongo = require('mongoskin');
var conn = mongo.db('mongodb://RogovS:5mongo@ds049641.mongolab.com:49641/task-5');

conn.collection('TestCollection').insert( { ip: ip, date: "someDate" } );

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