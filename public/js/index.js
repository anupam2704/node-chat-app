const socket = io(); 
socket.on('connect', function() {
    console.log('Connected to server');
    socket.emit('createMessage', {
        from: 'jenny@horny.com',
        text: 'She is not horny'
    })
})

socket.on('disconnect', function() {
    console.log('Disonnected from server');
})

socket.on('newMessage', function(message) {
    console.log('New Message', message);
})