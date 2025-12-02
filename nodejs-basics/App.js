const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // console.log(req.url, req.method,req.headers);
//    process.exit();
if(req.url==='/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>'); 
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
}
if(req.url==='/message' && req.method==='POST'){
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk);
        console.log(chunk);
    });
    return req.on('end',()=>{
         const parsedBody=Buffer.concat(body).toString();
         console.log(parsedBody);
         const message=parsedBody.split('=')[1]
// This writes the message to "message.txt" immediately (synchronously).
// For small text, it's super fast and you won't notice a delay.
// But if the file is very large (hundreds of MB or more), this will block the program
// — no other code can run until the writing is finished.
// Even other incoming requests in a server would have to wait.
// So for big files or servers, it's better to use the asynchronous version (fs.writeFile).
            fs.writeFileSync('message.txt',message);
             res.statusCode=302;
   
    })
     res.setHeader('Location','/');
    return res.end();
 
   
}
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello from my Node.js server!</h1></body>');
res.write('</html>');
res.end();
})
server.listen(3000);
