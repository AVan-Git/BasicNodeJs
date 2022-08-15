const url = require('url')
const fs = require('fs')
//

function rederHTML(path, res) {
    fs.readFile(path, (err, data) => {
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
//
function reder404(res) {
	res.writeHead(404);
	res.write("File not found!");
	res.end();
}

//
module.exports = {
    request: function onRequest(req, res)  {
        // console.log( url.parse('http://localhost:8989/about'));
    
        const path = url.parse(req.url).pathname;
        console.log(path);
        
        switch (path) {
            case '/about':
                rederHTML('./view/about.html', res);
                break;
            case '/':
                rederHTML('./view/study.html', res);
                break;
        
            default:
                reder404(res);
                break;
        }
    }
}
