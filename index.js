const http = require('http');
const port = 8000;

function requestHandler(req,res)
{
    // we will get the url
    // for localhost:8000 it will give /
    // for localhost:8000/user it will give /user
    // for localhost:8000/prifle it will give /profile
    console.log(req.url);
    
    // content-type text/html gives html
    res.writeHead(200, {'content-type':'text/html'})
    

    //it will give response
    res.end('<h1>Gothcha</h1>');
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("server is running", port);
})
