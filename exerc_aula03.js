var http = require('http');
var fs = require('fs');



http.createServer(function (req, res) {

res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<html>');
res.write('<body>');
res.write('<h1>Hello, World!</h1>');
res.write('</body>');
res.write('</html>');
res.end()
}).listen(8080);

http.createServer(function(req, res){
    fs.readFile('claudia-rgm-5932846096.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)});        
        }).listen(8082);