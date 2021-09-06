const express = require('express');
const app = express();

app.listen(3000, () => {
    
    console.log('Ta rodando');
});

app.use(express.static('public'));
app.use('/style',express.static(__dirname + '/public/assets/style'));
app.use('/fonts', express.static(__dirname + '/public/assets/fonts'));
app.use('/img', express.static(__dirname + '/public/assets/img'));
app.use('/src', express.static(__dirname + '/public/src'));

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/views/index.html')
});


module.exports = app;