const express = require('express');
const app = express () ;

app.get('/', (req, res) => {
    res.json = ({Message: 'Express is working! Hacuman, Carla N.'});
});

app.listen (3000, () => {
    console.log("server that listens on port 3000");
});    