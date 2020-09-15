require('dotenv').config()
const WebSocket = require('ws');
const express = require('express');
const http = require('http');

// install with: npm install @octokit/webhooks
const { Webhooks } = require("@octokit/webhooks");
const webhooks = new Webhooks({
  secret: process.env.WEBHOOK_SECRET,
});

const app = express();

const expressWs = require('express-ws')(app);

app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});

// This should be the client - simple express server. 
app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.end();
});
 
app.ws('/', function(ws, req) {
  req.send("Hello World")
  ws.on('message', function(msg) {
    console.log(msg);
  });
  console.log('socket', req.testing);
});
 
app.listen(3001)

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');

    webhooks.on("*", ({ id, name, payload }) => {
      const output = name + " event received"
      console.log(output);
      message = output;
      ws.send(output);
    });
    
    require("http").createServer(webhooks.middleware).listen(3000);
    // can now receive webhook events at port 3000 - the webhook receiver

});

//start our server
server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});