const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const alert = require('alert-node');

const routes = require('./routes/index.js');

app.set('port',process.env.PORT || 5000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(routes);

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),() => {
    console.log('servidor en puerto', app.get('port'))
});