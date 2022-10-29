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

//luu data User
let arrUser = [];

//
io.on('connection', (socket) => {
    console.log(`connect: ${socket.id}`);

    //nghe sk gui acc user ve
    socket.on('client-send-user-acc', (data) => {
        
        arrUser.push(
            new User(data.name, data.email, data.phone)
        )

        io.sockets.emit('server-send-listUser', arrUser)
    })
})

function User(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

// 
app.get('/', (req, res) => {
    res.render('home');
})