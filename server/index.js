const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('HOME');
});

app.listen(PORT, () => {
    console.log('Server running on PORT', PORT);
});