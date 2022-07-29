

const socketController = (socket) => {

    console.log('Cliente desconectado', socket.id)

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado', socket.id)
    })

    socket.on('enviar-mensaje',(payload, callback)=>{
        const id = 123456
        //callback({id, fecha: new Date().getTime()})
        callback(id)
        socket.broadcast.emit('enviar-mensaje',payload)
    })

}

export {
    socketController
}