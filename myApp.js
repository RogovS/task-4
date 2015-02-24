var express = require('express')
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;

server.listen(port, function() {
   console.log('Listening' + port);
});

app.get('/', function (request, response) {
   response.sendfile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

/*var io = require('socket.io').listen(server.io.configure(function () {
		   io.set("transportsxhr-polling");
		   io.set("pollingtion", 10);
		}));

		io.sockets.on('connection', function (socket) {
		   socket.emit('news hello: world');
		   socket.on('myer event', function (data) {
			  console.log(data);
		   });
		});*/