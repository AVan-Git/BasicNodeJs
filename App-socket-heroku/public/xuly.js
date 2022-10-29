
let socket = io('http://localhost:8000')


socket.on('server-send-listUser', (data) => {
    $('#listUser').html("");
    let i =1;
    data.forEach(item => {
        $('#listUser').append(`<div class="item"> id: ${i++} || <span id="itemName"> ${item.name}</span> || <span id="itemEmail"> ${item.email}</span> || <span id="itemPhone"> ${item.phone}</span></div>`)
    });

})

$(document).ready(() => {

    $('#btnRegister').click(()=> {
        let user = {
            name : $('#txtName').val(),
            email:  $('#txtEmail').val(),
            phone:  $('#txtPhone').val(),
        }
        socket.emit('client-send-user-acc', user )
    })
})