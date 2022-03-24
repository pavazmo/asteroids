
require('dotenv').config();
const mongoose = require('mongoose');
const {server: {port}} = require('./infrastructure/config/config');
const {mongo: {mongoConnectionUri}} = require('./infrastructure/config/config');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const asteroidRoutes = require('./infrastructure/rest/asteroid-controller');

app.use(morgan('HTTP :method :url :remote-addr - [:date[clf]] [:status] - :response-time ms'));
app.use(express.json());
app.use(cors());
app.use('/api/v1/asteroids', asteroidRoutes);

app.use('*', function(req, res) {
  res.status(400).send();
});

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}
mongoose.connect(mongoConnectionUri,connectionParams)
  .then( () => {
      console.log('Connected to database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
  })

const server = app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

module.exports = {app, server};