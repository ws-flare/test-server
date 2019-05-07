const express = require('express');
const app = express();
const superagent = require('superagent');
const port = process.env.PORT || 3000;

app.get('/endpoint', (_, res) => {
    superagent
        .get(`https://ws-flare-cluster-service-2.cfapps.io/endpoint`)
        .set('X-B3-TraceId', 'foobar')
        .end((_, response) => {
            res.json(response.body);
        });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
