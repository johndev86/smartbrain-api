const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const compression = require('compression');


const register = require('./controllers/register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const profile = require('./controllers/profile');
const auth = require('./controllers/authorization');

let connection = {};
if (process.env.DATABASE_URL === 'localhost') {
  connection = process.env.POSTGRES_URI
} else {
  connection = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
}

const db = require('knex')({
    client: 'pg',
    connection: connection
});


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(compression());

app.get('/', (req, res) => { res.send('api working') });
app.post('/signin', (req, res) => { signin.signinAuthentication(req, res, db, bcrypt) });
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });
app.get('/profile', auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db) });
app.post('/profile', auth.requireAuth, (req, res) => { profile.handleProfileUpdate(req, res, db) });
app.put('/image', auth.requireAuth, (req, res) => { image.handleImage(req, res, db) });
app.post('/imageurl', auth.requireAuth, (req, res) => { image.handleApiCall(req, res) });

app.listen(process.env.PORT || 3000, () => {
    console.log('app is running on port 3000');
});