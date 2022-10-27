const express = require('express')
const app = express()

app.use(express.static("./public"));
app.set('view engine', 'ejs');
app.set('views', './public');

const server = require('http').Server(app);
const io = require("socket.io")(server);

server.listen(8000, () => {
  console.log(`Example app listening on port ${8000}`, ' - http://localhost:8000/')
});

// io xac nhan co nguoi ket noi
io.on('connection', function (socket) {
    console.log("co nguoi ket noi - " + socket.id);

    socket.on('disconnect', function () {
        console.log(socket.id + " - ngat ket noi");
    })
})

app.get('/', (req, res) => {
  res.render('trangchu')
});


