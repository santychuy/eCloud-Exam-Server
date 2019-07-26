const express = require('express');
const morgan = require('morgan');
const path = require('path');

//Inits
const app = express();
require('./db'); //Connect DB

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/users', require('./routes/users.routes'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Run
app.listen(app.get('port'), () => console.log('Server on port: ',app.get('port')));
