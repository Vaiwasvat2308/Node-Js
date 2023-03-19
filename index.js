const http = require('http');
const newVar=async(req,res) => {
    res.await.write("Hello,nanded!");
    res.end();
};
http.createServer(newVar).listen(2000)