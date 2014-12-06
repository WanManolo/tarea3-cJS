var http = require("http");
var count=1;

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
	response.write("Esta es la visita número "+count+".");
	response.end();
	count++;
}).listen(8080);
console.log('Script en funcionamiento en la dirección: http://localhost:8080');
