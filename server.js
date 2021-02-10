const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('message has been changed');
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log('working on port');
});