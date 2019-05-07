const WebSocket = require('ws');
const ws = new WebSocket('wss://ws-flare-cluster-ws.cfapps.io:4443');

ws.on('open', function () {
    console.log('Connected');
    ws.send('something', {
        headers: {
            x_b3_traceid: 'AhoyThere'
        }
    });
});
ws.on('message', function (data, flags) {
    console.log('received: %s', data);
});
ws.on('close', function () {
    console.log('disconnected');
});
