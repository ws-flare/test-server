const WebSocket = require('ws');

console.log('Starting ws server');

const wss = new WebSocket.Server({
    port: process.env.port || 8080
});

wss.on('connection', (ws) => {
    console.log('new connection');

    ws.on('close', () => {
        console.log('connection dropped');
    });
});
