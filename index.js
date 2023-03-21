const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport')
const port = 4000;
const app = express();

require('./database/connect')
require('./Passport/bearer')

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('express-session')({ secret: 'Secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./routes/authAPi'))
app.use('/api', require('./routes/clientAPi'))
app.use('/api', require('./routes/produitAPi'))
app.use('/api', require('./routes/commandeAPi'))


app.listen(port, () => (console.log('App is running on port ' + port)))