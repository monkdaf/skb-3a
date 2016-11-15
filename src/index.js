// @flow

import express from 'express';
import getUserName from './getUserName';
import getPC from './getPC';
import fetch from 'node-fetch';

export default getUserName;

const app = express();
const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res, next) => {
  let pc = {};
  fetch(pcUrl)
    .then((result) => result.json())
    .then(pc => res.json(pc))
    .catch(err => {
      next(err);
    });

});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
