const express = require('express')
const app = express()

app.use(express.static("./public"));
app.set('view engine', 'ejs');
app.set('views', './views');

const server = require('http').Server(app);
const io = require("socket.io")(server);

let port = 8000;
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`, `- http://localhost:${port}/`)
});

//



// 
app.get('/', (req, res) => {
    res.render('home');
})