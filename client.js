const WebSocket = require('ws');
const ws = new WebSocket('ws://ws-test-1.herokuapp.com');

ws.on('open', function () {
    console.log('Connected');
    ws.send('something');
});
ws.on('message', function (data, flags) {
    console.log('received: %s', data);
});
ws.on('close', function () {
    console.log('disconnected');
});
