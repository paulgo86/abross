var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(req,res){
  fs.readFile('HTMLPage.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
  });
}).listen(3000,function(){
  console.log('socket test');
});

var io = socketio.listen(server);
io.sockets.on('connection',function(socket){
  
});
