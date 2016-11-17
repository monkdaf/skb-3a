'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _getVolumes = require('./getVolumes');

var _getVolumes2 = _interopRequireDefault(_getVolumes);

var _getInfo = require('./getInfo');

var _getInfo2 = _interopRequireDefault(_getInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get(/^(?:\/)?(.*?)(?:\/)?$/, function (req, res, next) {
  console.log('source path = ' + req.params[0]);
  (0, _nodeFetch2.default)(pcUrl).then(function (result) {
    return result.json();
  }).then(function (pc) {
    var path = req.params[0];
    var retData = '';
    if (path === 'volumes') {
      retData = (0, _getVolumes2.default)(pc);
    } else {
      retData = (0, _getInfo2.default)(pc, path);
    }
    if (retData === 'Not Found') {
      res.status(404).send(retData);
    } else {
      res.json(retData);
    }
  }).catch(function (err) {
    next(err);
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});