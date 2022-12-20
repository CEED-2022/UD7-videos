import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';

const PORT = 8999;
const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {

  console.log('connection')

  // Send periodic messages
  setInterval( () => {
    ws.send('PING ' + Date.now())
  },2000)

  //connection is up, let's add a simple simple event
  ws.on('message', (message) => {
    //log the received message and send it back to the client
    console.log('received: %s', message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send('Hi there, I am a WebSocket server');
});

//start our server
server.listen(PORT, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
