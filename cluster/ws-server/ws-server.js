const http = require('http');
const WebSocket = require('ws');
const superagent = require('superagent');

const server = http.createServer();
const wss = new WebSocket.Server({noServer: true});

wss.on('connection', (ws) => {
    console.log('new connection');

    const interval = setInterval(() => {
        superagent
            .get(`https://ws-flare-cluster-service-1.cfapps.io/endpoint`)
            .set('X-B3-TraceId', 'foobar')
            .end((err, res) => {
                ws.send(JSON.stringify(res.body));
            });
    }, 5000);

    ws.on('close', () => {
        clearInterval(interval);
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
