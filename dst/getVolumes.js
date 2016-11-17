'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by daf on 16.11.2016.
 */

var getVolumes = function getVolumes(pcProps) {
  if (!pcProps || !pcProps.hdd) {
    return null;
  }
  var mapVol = new _map2.default();
  mapVol = pcProps.hdd.reduce(function (prevVal, item) {
    if (prevVal.has(item.volume)) {
      prevVal.set(item.volume, prevVal.get(item.volume) + item.size);
    } else {
      prevVal.set(item.volume, item.size);
    }
    return prevVal;
  }, new _map2.default());
  var str = '{';
  mapVol.forEach(function (val, key) {
    str += '"' + key + '" : "' + val + 'B",';
  });
  return JSON.parse(str.slice(0, -1) + '}');
};

exports.default = getVolumes;