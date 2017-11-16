const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const morgan = require('morgan')
const port = 8000;
const app = express();

// middleware
// express app only need when hooking up to front and displaying web page
app.use(express.static(__dirname + '/public/dist'));
app.use(bodyParser.json());
app.use(session({
    secret: 'supersecretword',
    resave: false,
    saveUninitialized: true
}))
app.use(morgan('tiny'));

require('./server/config/mongoose');

require('./server/config/routes')(app);


// server turned on
app.listen(port, () => console.log(`...listening on port ${port}...`))