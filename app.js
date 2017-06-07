const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// START THE APP

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(process.env.PORT || 8989, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Listening at http://localhost:8989/');
  }
});
