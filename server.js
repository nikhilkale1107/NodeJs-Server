const http = require('http');

const routes = require('./routes');

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(4000);


// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log('Nikhil kale');

//     if (req.url === '/') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Home</title></head>');
//         res.write('<body><h1>Welcome to my First Node Js project</h1></body>');
//         res.write('</html>')
//         res.end();
//     } else if (req.url === '/home') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Home</title></head>');
//         res.write('<body><h1>Welcome home</h1></body>');
//         res.write('</html>')
//         res.end();
//     } else if (req.url === '/about') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>About</title></head>');
//         res.write('<body><h1>Welcome to About Us page</h1></body>');
//         res.write('</html>')
//         res.end();
//     } else if (req.url === '/node') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Node</title></head>');
//         res.write('<body><h1>Welcome to my Node Js project</h1></body>');
//         res.write('</html>')
//         res.end();
//     } else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Page not found');
//     }

//     res.end();
// })

// server.listen(4000);