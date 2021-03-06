const express = require('express');
const app = express();
app.use(express.json());
module.exports = {
    path: "/api/",
    handler: app
};
app.get('/geek/', function(req, res){
    res.send('ギークです');
});