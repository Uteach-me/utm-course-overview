const express = require('express');

const app = express();
const port = 3011;
const path = require('path');
const morgan = require('morgan');
const db = require('../database/index.js');


app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));
app.get('/test1', (req, res) => {
  const var1 = req.body;
  db.readOne((var1) => {
    res.send(var1);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));