var http = require("http");
var count=1;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080 ;
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1' ;
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
	response.write("Esta es la visita número "+count+".");
	response.end();
	count++;
}).listen(port, ip_address);
console.log('Script en funcionamiento en la dirección: http://localhost:8080');
