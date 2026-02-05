const http = require('http');
const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    const username = req.query.myname;
    res.send(`This is the About Page. Hello, ${username}!`);
});

app.get('/search', (req, res) => {
    const search = req.query.search_query;
    res.send(`This is the Search Page. You searched for: ${search}`);
});

const myServer = http.createServer(app);

myServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});