const path = require('path');
const http = require('http')
const express = require('express');
const app = express();
const socketIO = require('socket.io');

const port  = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New User Connected");
    socket.on('disconnect', ()=> {
        console.log('User was disconnected');
    })
    socket.emit('newMessage', {
        from : 'mike@fuck.com',
        text: 'Mike the fucker'
    });
    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
    })

})

server.listen(port, () => {
    console.log("Listening to port 3000")
})