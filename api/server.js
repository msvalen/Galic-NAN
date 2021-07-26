const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const buysRoutes = require('./routes/buys')
app.use('/buys', buysRoutes)

app.get('/', (req, res) => res.send('Welcome to the treasury'))

module.exports = app;