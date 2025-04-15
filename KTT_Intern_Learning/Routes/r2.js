const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.post('/data', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
