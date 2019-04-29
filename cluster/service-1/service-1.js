const express = require('express');
const app = express();
const port = process.env.port || 3000;

let counter = 0;

app.get('/endpoint1', (req, res) => {
    counter++;
    res.json({message: `Hello ${counter}`});
});

app.listen(port, () => console.log(`listening on port ${port}!`));
