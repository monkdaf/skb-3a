// @flow

import express from 'express';
import getUserName from './getUserName';

export default getUserName;

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  console.log(req.query.username);
  const result = getUserName(req.query.username);
  res.send(result);
});


app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
