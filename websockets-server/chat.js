import express from 'express';
import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocketServer({ server })

function sendToOthers(ws, message, identify = true) {
  wss.clients.forEach(function each(client) {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      const identification = identify ?  clients.get(ws) + ': ' : ''
      client.send(identification + message);
    }
  })
}

const clients = new Map();
let counter = 0;

wss.on('connection', function connection(ws) {

  clients.set(ws, 'Chatter ' + counter++)
  sendToOthers(ws, 'Somebody just joined the conversation', false)

  ws.on('message', function incoming(data) {
    console.log(data.toString())
    sendToOthers(ws, data.toString())
  })
})

server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})
