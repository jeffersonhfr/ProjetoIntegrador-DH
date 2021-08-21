const express = require("express");
const app = express();
app.listen(3000, ()=>{
    console.log("Ta rodando");
});
app.use(express.static('public'));
app.use('/style',express.static(__dirname + '/public/assets/style'));


app.get('/', (req, res) => res.sendFile(__dirname+'/views/index.html'));

module.exports = app;