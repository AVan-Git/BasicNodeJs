// 
const http = require('http');
const fs = require('fs');
const url = require('url');

// const mod1 = require('./mod1.js');
const modConfig = require('./mymodule/config.js');


function onRequest(req, res)  {
    // console.log( url.parse('http://localhost:8989/about'));

    const path = url.parse(req.url).pathname;
    console.log(path);
    
    if(path == '/about'){
        fs.readFile('./view/about.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write("File not found!")
            }
            else{
                res.write(data);
            }
              res.end();
          });
    }
    else if(path == '/') {
        fs.readFile('./view/study.html', (err, data) => {
      if (err) {
          res.writeHead(404);
          res.write("File not found!")
      }
      else{
          res.write(data);
      }
        res.end();
    });
    }

    
  
  };


http.createServer(onRequest).listen(modConfig.port);