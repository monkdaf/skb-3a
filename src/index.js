// @flow

import express from 'express';
import fetch from 'node-fetch';
import getVolumes from './getVolumes';
import getInfo from './getInfo';

const app = express();
const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get(/^(?:\/)?(.*?)(?:\/)?$/, (req, res, next) => {
  console.log(`source path = ${req.params[0]}`);
  fetch(pcUrl)
    .then(result => result.json())
    .then((pc) => {
      const path = req.params[0];
      let retData = '';
      if (path === 'volumes') {
        retData = getVolumes(pc);
      } else {
        retData = getInfo(pc, path);
      }
      if (retData === 'Not Found') {
        res.status(404).send(retData);
      } else {
        res.json(retData);
      }
    })
    .catch((err) => {
      next(err);
    });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
