const http = require('http');
const WebSocket = require('ws');
const superagent = require('superagent');

const server = http.createServer();
const wss = new WebSocket.Server({noServer: true});

wss.on('connection', (ws) => {
    console.log('new connection');

    superagent
        .get(`http://ws-flare-service1.cfapps.io/endpoint1`)
        .end((err, res) => {
            ws.send(res.body);
        });

    ws.on('close', () => {
        console.log('connection dropped');
    });
});

server.on('upgrade', function upgrade(request, socket, head) {
    wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request);
    });
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Starting ws server');
});
