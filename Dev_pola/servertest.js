var http = require('http');

//web server object
var server = http.createServer();

//start web server, waiting on port 3000
var port = 3000;
server.listen(port,function(){
    console.log('웹 서버가 시작되었습니다. : %d',port);
});

//client connection event
server.on('connection',function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s %d',addr.address,addr.port);
});

//client request event
server.on('request',function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');
    
    res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write(" <head>");
    res.write("     <title>응답 페이지</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write("     <h1>노드제이에스로부터의 응답 페이지</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end();  //응답을 모두 보냄을 의미 -> end 호출될 때 클라이언트로 응답 전송
});

//server close event
server.on('close',function(){
    console.log('서버가 종료됩니다.');
});