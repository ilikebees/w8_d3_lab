const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const publicPath = path.join(__dirname, '../client/public');

app.use(express.static(publicPath));

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bucketList');
    const listCollection = db.collection('bucketList');
    const listRouter = createRouter(listCollection);
    app.use('/api/bucketlist', listRouter);
  })
  .catch(console.err);

  app.listen(3000, function () {
    console.log(`Server listening to ${ this.address().port }`);

  });
