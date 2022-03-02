const http = require('http');
const { url } = require('inspector');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>This is the server</h1> <p>Hey this is server Nodejs.</p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About This is the server</h1> <p>Hey this is the about page.</p>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Server not found Error 404</h1> <p>Server is not found.</p>');


    }
     
})
server.listen(port,()=>{
    console.log("server is listening port ${port}");

});