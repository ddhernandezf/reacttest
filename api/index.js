var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    roleR = require('./src/Routes/Role'),
    bodyParser = require('body-parser');
// var MySQL = require('mysql');

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.urlencoded({
    extended: true
}));
roleR(app);

app.listen(port);

// app.use(function(req, res, next){
//     res.locals.connection = MySQL.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'Letmein',
//         database: 'security'
//     });

//     res.locals.connect();
//     next();
// });

