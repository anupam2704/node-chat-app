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

server.listen(port, () => {
    console.log("Listening to port 3000")
})