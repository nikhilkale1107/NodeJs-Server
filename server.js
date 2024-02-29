const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end();
    }  
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    } 
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>Hello from my NodeJS Server</h1></body>');
    res.write('</html>')
    res.end();

})

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