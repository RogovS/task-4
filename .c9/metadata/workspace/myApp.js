{"filter":false,"title":"myApp.js","tooltip":"/myApp.js","undoManager":{"mark":87,"position":87,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["var express = require('express')","var http = require('http');","var app = express();","var server = http.createServer(app);","var port = process.env.PORT || 3000;","","server.listen(port, function() {","   console.log('Listening' + port);","});","","app.get('/', function (request, response) {","   response.sendfile(__dirname + '/index.html');","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":47},"action":"insert","lines":["app.use(express.static(__dirname + '/public'));"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":47},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":26,"column":3},"action":"insert","lines":["var io = require('socket.io').listen(serverio.configure(function () {","   io.set(\"transportsxhr-polling\"]);","   io.set(\"pollingtion\", 10);","});","","io.sockets.on('connectionunction (socket) {","   socket.emit('news hello: 'world' });","   socket.on('myer event', function (data) {","      console.log(data);","   });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"remove","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":14},"end":{"row":21,"column":15},"action":"remove","lines":["'"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"insert","lines":["'"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":37},"end":{"row":22,"column":38},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":37},"end":{"row":22,"column":38},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":3},"end":{"row":27,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":1},"end":{"row":27,"column":2},"action":"insert","lines":["э"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":1},"end":{"row":27,"column":2},"action":"remove","lines":["э"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":1},"end":{"row":27,"column":2},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":27,"column":2},"action":"remove","lines":["var io = require('socket.io').listen(serverio.configure(function () {","   io.set(\"transportsxhr-polling\");","   io.set(\"pollingtion\", 10);","});","","io.sockets.on(connectionunction (socket) {","   socket.emit('news hello': 'world' });","   socket.on('myer event', function (data) {","      console.log(data);","   });","});",");"]},{"start":{"row":16,"column":0},"end":{"row":26,"column":5},"action":"insert","lines":["var io = require('socket.io').listen(serverio.configure(function () {","\t\t   io.set(\"transportsxhr-polling\");","\t\t   io.set(\"pollingtion\", 10);","\t\t}));","","\t\tio.sockets.on('connection', function (socket) {","\t\t   socket.emit('news hello: world');","\t\t   socket.on('myer event', function (data) {","\t\t\t  console.log(data);","\t\t   });","\t\t});"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":43},"end":{"row":16,"column":44},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":4},"end":{"row":19,"column":5},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":3},"end":{"row":26,"column":4},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":4},"end":{"row":19,"column":5},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":34},"end":{"row":22,"column":35},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":33},"end":{"row":22,"column":34},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":32},"end":{"row":22,"column":33},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":31},"end":{"row":22,"column":32},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":30},"end":{"row":22,"column":31},"action":"remove","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":29},"end":{"row":22,"column":30},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"remove","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":18},"end":{"row":23,"column":19},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":5},"end":{"row":22,"column":25},"action":"remove","lines":["socket.emit('news');"]},{"start":{"row":22,"column":5},"end":{"row":22,"column":45},"action":"insert","lines":["socket.emit('news', { hello: 'world' });"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":6},"end":{"row":19,"column":7},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":6},"end":{"row":19,"column":7},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":1},"end":{"row":21,"column":2},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":4},"end":{"row":22,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":3},"end":{"row":22,"column":4},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":2},"end":{"row":22,"column":3},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":1},"end":{"row":22,"column":2},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":0},"end":{"row":23,"column":5},"action":"remove","lines":["\t\t   "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":24,"column":5},"action":"remove","lines":["\t\t\t  "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"remove","lines":["\t\t  "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":1},"end":{"row":24,"column":2},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"remove","lines":["\t\t"]},{"start":{"row":26,"column":0},"end":{"row":26,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":1},"end":{"row":26,"column":2},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":1},"end":{"row":26,"column":2},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":0},"end":{"row":26,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":2},"end":{"row":17,"column":3},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":1},"end":{"row":17,"column":3},"action":"remove","lines":["\t "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":1},"end":{"row":18,"column":5},"action":"remove","lines":["\t   "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":3},"end":{"row":26,"column":4},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["/"]}]}]]},"ace":{"folds":[],"scrolltop":134,"scrollleft":0,"selection":{"start":{"row":26,"column":5},"end":{"row":26,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":8,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424893835844,"hash":"ee9aa7797387f77cd1474250a12bd4d290331407"}