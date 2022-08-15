// 
const http = require('http');
const fs = require('fs');
const url = require('url');

// const mod1 = require('./mod1.js');
const modConfig = require('./mymodule/config.js');
const helper = require('./mymodule/helper');



http.createServer(helper.request).listen(modConfig.port);