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

    // client ngat ket noi
    socket.on('disconnect', function () {
        console.log(socket.id + " - ngat ket noi");
    })

    // lang nghe A guir ve server
    socket.on('Client_send-data', function (data) {
        console.log(socket.id , " - ", data);

        //server guir toan bo user
        io.sockets.emit('server-send-data', "data = " + data )
    })

})

app.get('/', (req, res) => {
  res.render('trangchu')
});


