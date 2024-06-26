const express = require('express')
const server = require('http').createServer()
const app = express()

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
    
})



server.on('request', app)
server.listen(3000, () => console.log('server started on port 3000'))

/** begin websockets */
const WebSocketServer = require('ws').Server

const wss = new WebSocketServer({server: server})

wss.on('connection', function connection(ws) {
    const numClients = wss.clients.size;
    console.log('Clients connected: ', numClients)

    wss.broadcast(`Current Visitors: ${numClients}`)

    if(ws.readyState === ws.OPEN){
        ws.send('Welconme to my server')
    }

    ws.on('close', function close() {
        wss.broadcast(`Current Visitors: ${numClients}`)
        console.log('Client has disconnected')
    })


})

wss.broadcast = function broadcast(data){
    wss.clients.forEach(function each(client) {
        client.send(data)
    })
}
