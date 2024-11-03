const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: { origin: 'http://localhost:5173'}})

const PORT = 3001

io.on('connection', socket=> {
    console.log("Usuário conectado!", socket.id)

    socket.on('set_username', username => {
        socket.data.username = username
    })

    socket.on('disconnect', reason => {
        console.log("usuário disconectado! ", socket.id)
    })

    socket.on('message', text => {
        const message = {
            author: socket.data.username,
            text: text,
        };

        io.emit('receive_message', message);
    });
    
})

server.listen(PORT, () => console.log('Server running...'))